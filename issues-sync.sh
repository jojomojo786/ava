#!/usr/bin/env bash
# Bidirectional sync: bd (beads) ↔ GitHub Issues (idempotent, safe as cronjob)
#
# Source of truth rules:
#   Title / Body  → GitHub wins (GitHub edits propagate back to bd)
#   Open/Closed   → bd wins (bd status drives GitHub state)
#   New issues    → whichever side creates it first
#
# Mapping keys:
#   bd → GitHub : "bd ID: `ava-xxx`" stored in GitHub issue body
#   GitHub → bd : --external-ref "gh-N" stored in bd issue
#
# Usage: ./scripts/issues-sync.sh
# Requires: gh CLI (authenticated), jq, bd

set -euo pipefail

REPO="jojomojo786/ava"
ISSUES_FILE=".beads/issues.jsonl"

# ── Labels ────────────────────────────────────────────────────────────────────
echo "→ Ensuring GitHub labels..."
for spec in \
  "priority:critical|B60205|P0 Critical" \
  "priority:high|D93F0B|P1 High" \
  "priority:medium|E4E669|P2 Medium" \
  "priority:low|0E8A16|P3 Low" \
  "priority:backlog|CCCCCC|P4 Backlog" \
  "type:bug|EE0701|Bug" \
  "type:feature|84B6EB|Feature" \
  "type:task|BFD4F2|Task" \
  "type:epic|5319E7|Epic" \
  "type:chore|EDEDED|Chore" \
  "status:blocked|E11D48|Blocked" \
  "status:in-progress|F97316|In progress" \
  "bd-synced|0052CC|Synced from bd"
do
  name="${spec%%|*}"; rest="${spec#*|}"; color="${rest%%|*}"; desc="${rest#*|}"
  gh label create "$name" --color "$color" --description "$desc" --repo "$REPO" --force 2>/dev/null
done
echo "✓ Labels ready"
echo ""

# ── Helpers ───────────────────────────────────────────────────────────────────
priority_label() {
  case "$1" in
    0) echo "priority:critical" ;;
    1) echo "priority:high" ;;
    3) echo "priority:low" ;;
    4) echo "priority:backlog" ;;
    *) echo "priority:medium" ;;
  esac
}

bd_priority() {
  echo "$1" | grep -oP '(?<=priority:)\w+' 2>/dev/null | head -1 | \
    sed 's/critical/0/;s/high/1/;s/medium/2/;s/low/3/;s/backlog/4/' || true
}

bd_type() {
  echo "$1" | grep -oP '(?<=type:)\w+' 2>/dev/null | head -1 || true
}

gh_state() {
  case "$1" in closed|cancelled) echo "closed" ;; *) echo "open" ;; esac
}

# Strip the "bd ID: `xxx`\n\n" header that we inject into GitHub body
strip_bd_header() {
  echo "$1" | sed '/^\*\*bd ID:\*\*/d' | sed '/^$/{ N; /^\n$/d; }' | sed '1{/^$/d}'
}

# ── Fetch all GitHub issues once ──────────────────────────────────────────────
echo "→ Fetching GitHub issues..."
ALL_GH=$(gh issue list --repo "$REPO" --state all --limit 500 \
  --json number,title,body,state,labels 2>/dev/null)

find_gh_by_bd_id() {
  echo "$ALL_GH" | jq -r --arg id "$1" \
    '.[] | select(.body != null and (.body | test("bd ID.*" + $id))) | .number' | head -1
}

get_gh_issue() {
  echo "$ALL_GH" | jq -c --argjson n "$1" '.[] | select(.number == $n)' | head -1
}

# ════════════════════════════════════════════════════════════════════════════
# DIRECTION 1: bd → GitHub
# Syncs: new issues (create), open/closed state, labels
# Does NOT overwrite: title or body on existing issues (GitHub wins those)
# ════════════════════════════════════════════════════════════════════════════
echo "── bd → GitHub ──────────────────────────────────────────────"
BD_CREATED=0; BD_SYNCED=0

while IFS= read -r line; do
  ID=$(echo "$line"           | jq -r '.id')
  TITLE=$(echo "$line"        | jq -r '.title')
  DESC=$(echo "$line"         | jq -r '.description // ""')
  STATUS=$(echo "$line"       | jq -r '.status')
  PRIORITY=$(echo "$line"     | jq -r '.priority')
  TYPE=$(echo "$line"         | jq -r '.issue_type // "task"')
  CLOSE_REASON=$(echo "$line" | jq -r '.close_reason // ""')

  P_LABEL=$(priority_label "$PRIORITY")
  DESIRED_STATE=$(gh_state "$STATUS")

  LABELS="bd-synced,${P_LABEL},type:${TYPE}"
  [[ "$STATUS" == "in_progress" ]] && LABELS="${LABELS},status:in-progress"
  [[ "$STATUS" == "blocked"     ]] && LABELS="${LABELS},status:blocked"

  echo -n "  [$ID] $TITLE ... "

  EXISTING_NUM=$(find_gh_by_bd_id "$ID")

  if [[ -z "$EXISTING_NUM" ]]; then
    # ── CREATE (first time only — title+body set once here) ──
    BODY="**bd ID:** \`${ID}\`

${DESC}"
    [[ -n "$CLOSE_REASON" ]] && BODY="${BODY}

---
**Closed reason:** ${CLOSE_REASON}"

    GH_URL=$(gh issue create \
      --repo "$REPO" \
      --title "$TITLE" \
      --body "$BODY" \
      --label "$LABELS" 2>/dev/null || echo "")
    GH_NUM=$(echo "$GH_URL" | grep -oE '[0-9]+$' || echo "")

    if [[ -n "$GH_NUM" ]]; then
      [[ "$DESIRED_STATE" == "closed" ]] && \
        gh issue close "$GH_NUM" --repo "$REPO" 2>/dev/null || true
      bd update "$ID" --external-ref "gh-${GH_NUM}" >/dev/null 2>&1 || true
      echo "created #${GH_NUM}"
      BD_CREATED=$((BD_CREATED + 1))
    else
      echo "FAILED"
    fi

  else
    # ── EXISTING: only sync open/closed state + labels, never touch title/body ──
    CURRENT_STATE=$(get_gh_issue "$EXISTING_NUM" | jq -r '.state')

    if [[ "$DESIRED_STATE" == "closed" && "$CURRENT_STATE" == "OPEN" ]]; then
      gh issue close "$EXISTING_NUM" --repo "$REPO" 2>/dev/null || true
      echo "closed #${EXISTING_NUM}"
    elif [[ "$DESIRED_STATE" == "open" && "$CURRENT_STATE" == "CLOSED" ]]; then
      gh issue reopen "$EXISTING_NUM" --repo "$REPO" 2>/dev/null || true
      echo "reopened #${EXISTING_NUM}"
    else
      echo "no change #${EXISTING_NUM}"
    fi

    bd update "$ID" --external-ref "gh-${EXISTING_NUM}" >/dev/null 2>&1 || true
    BD_SYNCED=$((BD_SYNCED + 1))
  fi

done < "$ISSUES_FILE"

echo ""
echo "  bd→GitHub: $BD_CREATED created, $BD_SYNCED checked"
echo ""

# ════════════════════════════════════════════════════════════════════════════
# DIRECTION 2: GitHub → bd
# Part A — New GitHub issues (no bd-synced label): create in bd
# Part B — Existing synced issues: pull title/body changes back to bd
# ════════════════════════════════════════════════════════════════════════════
echo "── GitHub → bd ──────────────────────────────────────────════"
GH_CREATED=0; GH_UPDATED=0

# Part A: issues not yet in bd
UNSYNCED=$(echo "$ALL_GH" | \
  jq '[.[] | select(.labels | map(.name) | contains(["bd-synced"]) | not)]')
UNSYNCED_COUNT=$(echo "$UNSYNCED" | jq 'length')

if [[ "$UNSYNCED_COUNT" -gt 0 ]]; then
  echo "  Found $UNSYNCED_COUNT new GitHub issue(s) → creating in bd"
  while IFS= read -r gh_issue; do
    GH_NUM=$(echo "$gh_issue"    | jq -r '.number')
    GH_TITLE=$(echo "$gh_issue"  | jq -r '.title')
    GH_BODY=$(echo "$gh_issue"   | jq -r '.body // ""')
    GH_STATE=$(echo "$gh_issue"  | jq -r '.state')
    GH_LABELS=$(echo "$gh_issue" | jq -r '[.labels[].name] | join(",")')

    P_NUM=$(bd_priority "$GH_LABELS"); [[ -z "$P_NUM" ]] && P_NUM="2"
    T=$(bd_type "$GH_LABELS");         [[ -z "$T"     ]] && T="task"

    echo -n "  [gh-$GH_NUM] $GH_TITLE ... "

    BD_RESULT=$(bd create "$GH_TITLE" \
      --description "$GH_BODY" \
      -p "$P_NUM" -t "$T" \
      --external-ref "gh-${GH_NUM}" \
      --json 2>/dev/null || echo "{}")

    BD_ID=$(echo "$BD_RESULT" | jq -r '.id // ""')

    if [[ -n "$BD_ID" && "$BD_ID" != "null" ]]; then
      [[ "$GH_STATE" == "CLOSED" ]] && \
        bd close "$BD_ID" --reason "Closed on GitHub" 2>/dev/null || true

      # Inject bd ID into GitHub body and add label
      gh issue edit "$GH_NUM" \
        --repo "$REPO" \
        --body "**bd ID:** \`${BD_ID}\`

${GH_BODY}" \
        --add-label "bd-synced" 2>/dev/null || true

      echo "→ $BD_ID"
      GH_CREATED=$((GH_CREATED + 1))
    else
      echo "FAILED"
    fi
  done < <(echo "$UNSYNCED" | jq -c '.[]')
fi

# Part B: synced issues — pull GitHub title/body changes back into bd
SYNCED=$(echo "$ALL_GH" | \
  jq '[.[] | select(.labels | map(.name) | contains(["bd-synced"]))]')
SYNCED_COUNT=$(echo "$SYNCED" | jq 'length')

if [[ "$SYNCED_COUNT" -gt 0 ]]; then
  echo "  Checking $SYNCED_COUNT synced issue(s) for GitHub edits..."
  while IFS= read -r gh_issue; do
    GH_NUM=$(echo "$gh_issue"   | jq -r '.number')
    GH_TITLE=$(echo "$gh_issue" | jq -r '.title')
    GH_BODY=$(echo "$gh_issue"  | jq -r '.body // ""')

    # Extract bd ID from body (body format: "**bd ID:** `vpnmarkt-xxx`")
    BD_ID=$(echo "$GH_BODY" | grep -oP '(?<=\*\*bd ID:\*\*\s`)[^`]+' 2>/dev/null | head -1 || true)
    [[ -z "$BD_ID" ]] && continue

    # Get current bd issue (bd show --json returns an array)
    BD_DATA=$(bd show "$BD_ID" --json 2>/dev/null || echo "[]")
    BD_TITLE=$(echo "$BD_DATA" | jq -r '.[0].title // ""')
    BD_DESC=$(echo "$BD_DATA"  | jq -r '.[0].description // ""')

    # Strip our injected header from GitHub body to get the clean content
    GH_CLEAN_BODY=$(strip_bd_header "$GH_BODY")

    CHANGED=0
    UPDATE_ARGS=()

    if [[ "$GH_TITLE" != "$BD_TITLE" && -n "$GH_TITLE" ]]; then
      UPDATE_ARGS+=(--title "$GH_TITLE")
      CHANGED=1
    fi

    if [[ "$GH_CLEAN_BODY" != "$BD_DESC" && -n "$GH_CLEAN_BODY" ]]; then
      UPDATE_ARGS+=(--description "$GH_CLEAN_BODY")
      CHANGED=1
    fi

    if [[ "$CHANGED" -eq 1 ]]; then
      echo -n "  [gh-$GH_NUM → $BD_ID] title/body changed ... "
      bd update "$BD_ID" "${UPDATE_ARGS[@]}" 2>/dev/null || true
      echo "updated"
      GH_UPDATED=$((GH_UPDATED + 1))
    fi

  done < <(echo "$SYNCED" | jq -c '.[]')
fi

echo ""
echo "  GitHub→bd: $GH_CREATED created, $GH_UPDATED updated"
echo ""
echo "✓ Sync complete"
echo "  https://github.com/$REPO/issues"
