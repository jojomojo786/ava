import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Premium Reinigungsservice Hannover",
  description: "Impressum gemäß § 5 TMG — Premium Reinigungsservice Hannover.",
};

export default function ImpressumPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="gold-line mb-6" />
        <h1 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
          Impressum
        </h1>

        <div className="mt-10 space-y-8 text-sm text-warm-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              [Vollständiger Vor- und Nachname]
              <br />
              Premium Reinigungsservice
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] Hannover
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">Kontakt</h2>
            <p>
              Telefon: [0511 XXX XXXX]
              <br />
              E-Mail: [info@premium-reinigung.de]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Umsatzsteuer-ID
            </h2>
            <p>
              Kleinunternehmer im Sinne von § 19 UStG. Die Umsatzsteuer wird
              nicht ausgewiesen.
            </p>
            <p className="mt-2 text-warm-400 text-xs">
              (Diese Angabe ist anzupassen, sobald die Umsatzsteuer-ID erteilt
              wird oder die Kleinunternehmerregelung nicht mehr gilt.)
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              [Vollständiger Vor- und Nachname]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] Hannover
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-dark underline underline-offset-2 hover:text-gold"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
              wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
