# Ava – Premium Reinigungsservice Website

## Non-Negotiable Rules

1. **One issue at a time.** Work on a single `bd` issue. Never batch multiple issues.
2. **No parallel agents.** Never use multiple agents, batch agents, or batch file editing. All changes are sequential, one file at a time.
3. **Commit + push + deploy + verify after each page.** After completing each page: `git add` → `git commit` → `git push` → deploy to Vercel → use `/dev-browser` to take screenshots and verify the design is professional with no issues.
4. **Research first.** Before building any page, read the linked research files from the beads issue notes. Never re-research what's already documented.
5. **Never commit `.env` or secrets.**

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Database | Supabase |
| Auth | Supabase Auth (already configured) |
| Hosting | Vercel |
| Issue Tracker | Beads (`bd` CLI) |

---

## Research Files

All research is completed and stored in the Obsidian vault:

- **Location:** `/home/adam/Documents/r2/ava/Research/`
- **Format:** One markdown file per research topic (`{bead-id}-{slug}.md`)
- **Structure:** YAML frontmatter + Summary + Findings + Sources + Notes
- **Total:** 30 files covering competitor analysis, pricing benchmarks, legal requirements, form UX, and copy research for the Hannover cleaning market

### Research File Index

| Research File | Build Issue |
|---------------|-------------|
| `ava-3df-homepage-headline.md` | ava-5yg Homepage |
| `ava-d48-homepage-subtext-hero-copy.md` | ava-5yg Homepage |
| `ava-689-cta-jetzt-kostenloses-angebot-anfordern.md` | ava-5yg Homepage |
| `ava-e1f-ber-uns-section.md` | ava-5yg Homepage, ava-7jz Über Uns |
| `ava-kuh-usp-zuverlässig-und-pünktlich.md` | ava-5yg Homepage |
| `ava-bn1-usp-gründlich-und-sorgfältig.md` | ava-5yg Homepage |
| `ava-fzs-usp-flexible-termine.md` | ava-5yg Homepage |
| `ava-78a-usp-faire-preise.md` | ava-5yg Homepage, ava-b1y Preise |
| `ava-t0e-büroreinigung.md` | ava-611 Büroreinigung, ava-b1y Preise |
| `ava-b3i-treppenhausreinigung.md` | ava-92v Treppenhausreinigung, ava-b1y Preise |
| `ava-x3w-haushaltsreinigung.md` | ava-7my Haushaltsreinigung, ava-b1y Preise |
| `ava-92a-praxisreinigung.md` | ava-x0q Praxisreinigung, ava-b1y Preise |
| `ava-q6e-unterhaltsreinigung.md` | ava-3wx Unterhaltsreinigung, ava-b1y Preise |
| `ava-ug1-fensterreinigung.md` | ava-fwv Fensterreinigung, ava-b1y Preise |
| `ava-caw-grundreinigung.md` | ava-7c3 Grundreinigung, ava-b1y Preise |
| `ava-zhr-umzugsreinigung.md` | ava-797 Umzugsreinigung, ava-b1y Preise |
| `ava-9ek-airbnb-ferienwohnungsreinigung.md` | ava-3ik Airbnb, ava-b1y Preise |
| `ava-979-contact-form-name-field.md` | ava-5yg Homepage, ava-avs Kontakt |
| `ava-yk1-contact-form-telefonnummer-field.md` | ava-5yg Homepage, ava-avs Kontakt |
| `ava-3qj-contact-form-e-mail-field.md` | ava-5yg Homepage, ava-avs Kontakt |
| `ava-hq8-contact-form-art-der-reinigung-field.md` | ava-5yg Homepage, ava-avs Kontakt |
| `ava-qr5-contact-form-nachricht-field.md` | ava-5yg Homepage, ava-avs Kontakt |
| `ava-zcd-contact-cta-kostenloses-angebot-anfordern.md` | ava-5yg Homepage, ava-avs Kontakt |
| `ava-lw4-kontaktdaten-name.md` | ava-5yg Homepage, ava-avs Kontakt, ava-lfe Impressum |
| `ava-9pa-kontaktdaten-adresse.md` | ava-5yg Homepage, ava-avs Kontakt, ava-lfe Impressum |
| `ava-ral-kontaktdaten-telefon.md` | ava-5yg Homepage, ava-avs Kontakt, ava-lfe Impressum |
| `ava-5sl-kontaktdaten-e-mail.md` | ava-5yg Homepage, ava-avs Kontakt, ava-lfe Impressum |
| `ava-rvi-impressum-requirements.md` | ava-lfe Impressum |
| `ava-8ko-datenschutz-dsgvo-compliance.md` | ava-zvn Datenschutz, ava-avs Kontakt |
| `ava-dkl-serper-api-integration.md` | (API reference) |

---

## Serper.dev API (for additional research if needed)

```bash
source /root/ava/.env && \
curl -s -X POST "https://google.serper.dev/search" \
  -H "X-API-KEY: $SERPER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"q": "QUERY HERE", "gl": "de", "hl": "de", "num": 10}'
```

---

## Obsidian Vault

- Vault: `/home/adam/Documents/r2`
- Project Notes: `/home/adam/Documents/r2/ava`
- Research Files: `/home/adam/Documents/r2/ava/Research/`

---

## Environment Variables

- `SERPER_API_KEY` — stored in `.env` (never commit this file)
- Supabase credentials — configured in Vercel environment / `.env.local`

---

## Site Architecture — 15 Pages + 2 Files

### Page Map

| # | Page | URL | Beads ID |
|---|------|-----|----------|
| 1 | Homepage (Startseite) | `/` | ava-5yg |
| 2 | Büroreinigung | `/bueroreinigung-hannover` | ava-611 |
| 3 | Treppenhausreinigung | `/treppenhausreinigung-hannover` | ava-92v |
| 4 | Haushaltsreinigung | `/haushaltsreinigung-hannover` | ava-7my |
| 5 | Praxisreinigung | `/praxisreinigung-hannover` | ava-x0q |
| 6 | Unterhaltsreinigung | `/unterhaltsreinigung-hannover` | ava-3wx |
| 7 | Fensterreinigung | `/fensterreinigung-hannover` | ava-fwv |
| 8 | Grundreinigung | `/grundreinigung-hannover` | ava-7c3 |
| 9 | Umzugsreinigung | `/umzugsreinigung-hannover` | ava-797 |
| 10 | Airbnb & Ferienwohnung | `/airbnb-reinigung-hannover` | ava-3ik |
| 11 | Was kostet eine Reinigung? | `/preise` | ava-b1y |
| 12 | Über Uns | `/ueber-uns` | ava-7jz |
| 13 | Kontakt | `/kontakt` | ava-avs |
| 14 | Impressum | `/impressum` | ava-lfe |
| 15 | Datenschutzerklärung | `/datenschutz` | ava-zvn |
| — | sitemap.xml | `/sitemap.xml` | ava-9sc |
| — | robots.txt | `/robots.txt` | ava-7cx |

### URL Convention
All service page URLs include "hannover" for local SEO: `/bueroreinigung-hannover`, `/treppenhausreinigung-hannover`, etc.

---

## Website Content

### Startseite
**Headline:** Premium Reinigungsservice in Hannover
**Subtext:** Zuverlässige und gründliche Reinigung für Privat- und Geschäftskunden. Wir sorgen für Sauberkeit, auf die Sie sich verlassen können – flexibel, pünktlich und mit höchstem Anspruch an Qualität.
**CTA:** Jetzt kostenloses Angebot anfordern

### Leistungen (9 Services)
- Büroreinigung
- Treppenhausreinigung
- Haushaltsreinigung
- Praxisreinigung
- Unterhaltsreinigung
- Fensterreinigung
- Grundreinigung
- Umzugsreinigung
- Airbnb & Ferienwohnungsreinigung

### Über Uns
Premium Reinigungsservice steht für Qualität, Zuverlässigkeit und sorgfältige Arbeit. Unser Ziel ist es, unseren Kunden ein sauberes, gepflegtes und angenehmes Umfeld zu bieten.

### Warum Wir (USPs)
- Zuverlässig und pünktlich
- Gründlich und sorgfältig
- Flexible Termine
- Faire Preise

### Kontakt
**Formularfelder:** Name, Telefonnummer, E-Mail, Art der Reinigung, Nachricht, DSGVO-Checkbox
**CTA:** Kostenloses Angebot anfordern

**Kontaktdaten:**
- [Dein Name]
- [Adresse]
- [Telefon]
- [E-Mail]

### Impressum
(Name, Adresse, Kontakt — §5 TMG compliant)

### Datenschutz
DSGVO-compliant privacy policy. Generate via e-recht24.de Datenschutz-Generator.

---

## Build Workflow (Per Issue)

This is the exact process for every single beads issue:

### Step 1 — Pick the Issue
```bash
bd update {id} --status in_progress
```

### Step 2 — Read Research
Read all research files listed in the issue's notes. Extract:
- Copy/messaging to use
- Competitor patterns to follow or avoid
- Pricing benchmarks (for service pages)
- Legal requirements (for Impressum/Datenschutz)
- UX patterns (for contact form)

### Step 3 — Build the Page
Write the Next.js page component. One file at a time, no batch editing.
- Use shadcn/ui components
- Tailwind CSS for styling
- German-language content throughout
- Mobile-first responsive design
- Semantic HTML (proper H1/H2/H3 hierarchy)

### Step 4 — Commit & Push
```bash
git add [specific files]
git commit -m "Build: [page name] — [brief description]"
git push origin main
```

### Step 5 — Deploy to Vercel
Push triggers automatic Vercel deploy. Wait for deployment to complete.

### Step 6 — Verify with /dev-browser
Use `/dev-browser` to:
1. Navigate to the deployed page on Vercel
2. Take full-page screenshots (desktop + mobile viewports)
3. Check for: layout issues, broken styling, text overflow, missing images, color contrast, responsive behavior
4. Fix any issues found → commit → push → re-verify

### Step 7 — Close the Issue
```bash
bd update {id} --status closed
```

### Step 8 — Move to Next Issue
Pick the next issue in the build order and repeat from Step 1.

---

## Build Order

Process in this exact sequence — dependencies flow top-down:

### Phase 0 — Project Setup
Initialize Next.js project, install Tailwind CSS, shadcn/ui, Supabase client. Configure layout, navigation, footer. This is done BEFORE any page issues.

### Phase 1 — Homepage (Foundation)
| Order | Issue | Page |
|-------|-------|------|
| 1 | ava-5yg | Homepage (Startseite) |

The homepage establishes the global layout, nav, footer, color scheme, typography, and component patterns that all other pages inherit.

### Phase 2 — Service Pages (Core Content)
| Order | Issue | Page |
|-------|-------|------|
| 2 | ava-611 | Büroreinigung |
| 3 | ava-92v | Treppenhausreinigung |
| 4 | ava-7my | Haushaltsreinigung |
| 5 | ava-x0q | Praxisreinigung |
| 6 | ava-3wx | Unterhaltsreinigung |
| 7 | ava-fwv | Fensterreinigung |
| 8 | ava-7c3 | Grundreinigung |
| 9 | ava-797 | Umzugsreinigung |
| 10 | ava-3ik | Airbnb & Ferienwohnungsreinigung |

All 9 service pages follow a shared template/layout established by the first service page (Büroreinigung). Each page has unique content from its research file.

### Phase 3 — Supporting Pages
| Order | Issue | Page |
|-------|-------|------|
| 11 | ava-b1y | Was kostet eine Reinigung? (Preise) |
| 12 | ava-7jz | Über Uns |
| 13 | ava-avs | Kontakt |

### Phase 4 — Legal Pages (Mandatory)
| Order | Issue | Page |
|-------|-------|------|
| 14 | ava-lfe | Impressum |
| 15 | ava-zvn | Datenschutzerklärung |

### Phase 5 — Technical Files
| Order | Issue | File |
|-------|-------|------|
| 16 | ava-9sc | sitemap.xml |
| 17 | ava-7cx | robots.txt |

---

## Shared Components (Established in Phase 1)

These are created during the Homepage build and reused across all pages:

- **Navbar** — Logo + nav links (Startseite, Leistungen dropdown, Preise, Über Uns, Kontakt) + CTA button
- **Footer** — Contact info, service links, legal links (Impressum, Datenschutz), copyright
- **CTA Section** — Reusable "Jetzt kostenloses Angebot anfordern" block
- **Contact Form** — Name, Telefon, E-Mail, Art der Reinigung (dropdown), Nachricht, DSGVO checkbox
- **Service Card** — Card component for service overview grid on homepage
- **Layout** — Root layout with metadata, fonts, Supabase provider

---

## Service Page Template (Established in Phase 2, Issue #2)

Each service page follows this structure:
1. **Hero** — H1 with service name + Hannover, subheadline with key benefit
2. **What We Do** — Service description, scope of work
3. **Why Choose Us** — Service-specific USPs (from research)
4. **Pricing Indication** — "ab €X" or price range (from research)
5. **CTA** — "Jetzt kostenloses Angebot anfordern" → links to /kontakt or inline form
6. **FAQ** (optional) — Common questions about that service

---

## Design Principles

- **Language:** German throughout (no English UI text)
- **Positioning:** Premium — clean, professional, trustworthy
- **Colors:** To be established in Phase 1 (premium palette: dark tones + accent color)
- **Typography:** Modern, readable German text (support for umlauts/ß)
- **Mobile-first:** All pages must work perfectly on mobile — cleaning service customers often search on phone
- **Accessibility:** Proper contrast ratios, semantic HTML, alt text for images
- **Local SEO:** "Hannover" in H1, meta title, URL slug for every service page
