import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | AvA Facility Service Hannover",
  description: "Datenschutzerklärung gemäß DSGVO — AvA Facility Service Hannover.",
};

export default function DatenschutzPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="gold-line mb-6" />
        <h1 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-8 text-sm text-warm-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-semibold text-navy mt-4 mb-2">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website:
            </p>
            <p className="mt-2">
              <span className="bg-gold/10 text-warm-600 px-1 rounded text-xs">wird ergänzt</span>
              <br />
              AvA Facility Service
              <br />
              Hannover
              <br />
              <br />
              Telefon: 0176 638 184 41
              <br />
              E-Mail: info@ava-reinigung.de
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-semibold text-navy mt-4 mb-2">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten (Name, Telefonnummer, E-Mail-Adresse, Art
              der Reinigung, Nachricht) zwecks Bearbeitung der Anfrage und für den
              Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung) bzw. Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen).
            </p>
            <p className="mt-2">
              <strong>Speicherdauer:</strong> Ihre Daten werden nach
              abgeschlossener Bearbeitung Ihrer Anfrage gelöscht, sofern keine
              gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

            <h3 className="font-semibold text-navy mt-4 mb-2">
              Server-Log-Dateien
            </h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
              des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
            </p>
            <p className="mt-2">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
              Grundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              4. SSL-/TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL-bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von &ldquo;http://&rdquo;
              auf &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              5. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten
                zu erhalten (Art. 15 DSGVO)
              </li>
              <li>
                Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)
              </li>
              <li>
                Die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)
              </li>
              <li>
                Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)
              </li>
              <li>
                Der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DSGVO)
              </li>
              <li>
                Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)
              </li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die
              oben genannte Adresse oder E-Mail.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              6. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu
              beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p className="mt-2">
              Zuständige Aufsichtsbehörde:
              <br />
              Die Landesbeauftragte für den Datenschutz Niedersachsen
              <br />
              Prinzenstraße 5, 30159 Hannover
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              7. Cookies
            </h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies. Es werden keine Tracking-Cookies, Analyse-Tools oder
              Werbecookies eingesetzt.
            </p>
            <p className="mt-2 text-warm-400 text-xs">
              Hinweis: Sollte in Zukunft ein Analyse-Tool (z.B. Google
              Analytics) eingesetzt werden, wird diese Datenschutzerklärung
              entsprechend ergänzt und ein Cookie-Banner implementiert.
            </p>
          </div>

          <div className="pt-4 border-t border-warm-200 text-xs text-warm-400">
            <p>
              Diese Datenschutzerklärung wurde als Basis erstellt und sollte vor
              der finalen Veröffentlichung von einem Rechtsanwalt oder über einen
              Datenschutz-Generator (z.B. e-recht24.de) überprüft und ergänzt
              werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
