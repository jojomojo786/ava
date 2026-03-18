import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  BedDouble,
  Bath,
  CookingPot,
  Camera,
  Package,
  Zap,
  Star,
  CalendarSync,
  BadgeEuro,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Airbnb & Ferienwohnungsreinigung Hannover | Premium Reinigungsservice",
  description:
    "Professionelle Airbnb-Reinigung in Hannover — schneller Turnover zwischen Gästen, Bettwäschewechsel, Foto-Dokumentation. Ab €65 für 60m². 24h verfügbar. Jetzt Angebot anfordern.",
};

const scopeItems = [
  {
    icon: BedDouble,
    title: "Betten & Wäsche",
    desc: "Bettwäsche wechseln, Betten frisch beziehen, Handtücher austauschen und bereitstellen",
  },
  {
    icon: CookingPot,
    title: "Küche",
    desc: "Geschirr prüfen, Arbeitsflächen reinigen, Kühlschrank, Herd und Spüle säubern",
  },
  {
    icon: Bath,
    title: "Bad desinfizieren",
    desc: "Badezimmer komplett reinigen und desinfizieren — WC, Dusche, Waschbecken, Armaturen",
  },
  {
    icon: Package,
    title: "Verbrauchsmaterial auffüllen",
    desc: "Toilettenpapier, Seife, Shampoo, Müllbeutel — alles bereit für den nächsten Gast",
  },
  {
    icon: Camera,
    title: "Foto-Dokumentation",
    desc: "Protokoll mit Fotos nach jeder Reinigung — Ihr Nachweis bei Gästebeanstandungen",
  },
];

const usps = [
  {
    icon: Zap,
    title: "24h Turnaround",
    desc: "Schnelle Reinigung zwischen Check-out und Check-in — auch bei kurzfristigen Buchungen. Wir sind bereit, wenn Ihr Gast abreist.",
  },
  {
    icon: Star,
    title: "5-Sterne-Sauberkeit",
    desc: "Sauberkeit ist der wichtigste Faktor für Gästebewertungen. Wir sorgen dafür, dass jeder Gast begeistert ist.",
  },
  {
    icon: CalendarSync,
    title: "Buchungskalender-Sync",
    desc: "Wir stimmen uns mit Ihrem Airbnb-Buchungskalender ab. Automatisch informiert, automatisch vor Ort.",
  },
  {
    icon: BadgeEuro,
    title: "Festpreis pro Turnover",
    desc: "Transparente Paketpreise pro Reinigung — keine versteckten Kosten, planbare Ausgaben für jeden Gästewechsel.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Airbnb-Reinigung in Hannover?",
    a: "Ab €65 für Apartments bis 60m² inklusive Bettwäschewechsel. Der Stundenpreis liegt bei €30 (mind. 2 Stunden). Für größere Wohnungen erstellen wir ein individuelles Paketangebot.",
  },
  {
    q: "Wie kurzfristig können Sie kommen?",
    a: "Innerhalb von 24 Stunden — oft noch am selben Tag. Besonders während der Messe-Saison (Hannover Messe, IAA) halten wir Kapazitäten für kurzfristige Einsätze bereit.",
  },
  {
    q: "Erstellen Sie eine Foto-Dokumentation?",
    a: "Ja. Nach jeder Reinigung erhalten Sie auf Wunsch ein Foto-Protokoll. Das schützt Sie bei Beanstandungen durch Gäste und dient als Nachweis für den Zustand der Unterkunft.",
  },
  {
    q: "Können Sie auch Verbrauchsmaterial auffüllen?",
    a: "Ja. Toilettenpapier, Seife, Shampoo, Müllbeutel und andere Verbrauchsmaterialien füllen wir auf Wunsch auf — entweder mit Ihrem Material oder wir beschaffen es für Sie.",
  },
];

export default function AirbnbReinigungPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/[0.03] to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(201,168,76,0.3) 60px, rgba(201,168,76,0.3) 61px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <Link href="/#leistungen" className="text-sm font-medium tracking-wide text-gold/80 uppercase mb-3 hover:text-gold transition-colors inline-block">
              ← Unsere Leistungen
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Airbnb &amp;
              <br />
              Ferienwohnungsreinigung
              <br />
              <span className="text-gold">in Hannover</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              5-Sterne-Sauberkeit für Ihre Gästebewertungen. Schneller
              Turnover zwischen Gästen, Bettwäschewechsel,
              Foto-Dokumentation — damit Sie Zeit sparen und Ihre Gäste
              begeistern.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base px-8 py-6 rounded-sm shadow-lg shadow-gold/20"
              >
                <Link href="/kontakt">
                  Jetzt kostenloses Angebot anfordern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="tel:+4917663818441"
                className="flex items-center gap-2 text-warm-300 hover:text-gold transition-colors text-sm py-3"
              >
                <Phone className="h-4 w-4" />
                oder rufen Sie an: 0176 638 184 41
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Ab €65 (bis 60m²)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                24h Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Foto-Dokumentation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE SCOPE ─── */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Unser Turnover-Service
            </h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              Alles, was zwischen zwei Gästen erledigt werden muss — von der
              Bettwäsche bis zur Foto-Dokumentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scopeItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="p-6 bg-white border-warm-200/60 rounded-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-gold/10">
                      <Icon className="h-5 w-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-warm-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Warum Gastgeber uns vertrauen
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div key={usp.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/[0.06]">
                    <Icon className="h-5 w-5 text-navy/70" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg">
                      {usp.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-warm-500 leading-relaxed">
                      {usp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MESSE BAND ─── */}
      <section className="py-20 lg:py-28 bg-navy grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Hannover ist Messestadt
            </h2>
            <p className="mt-6 text-lg text-warm-300 leading-relaxed">
              Hannover Messe, IAA und zahlreiche Fachkonferenzen bringen jedes
              Jahr tausende Besucher. In Spitzenzeiten brauchen Sie einen
              Reinigungspartner, der schnell und zuverlässig reagiert — auch bei
              täglichen Gästewechseln.
            </p>
            <p className="mt-4 text-warm-400">
              Wir halten während der Messe-Saison besondere Kapazitäten für
              unsere Airbnb-Partner bereit.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6 rounded-sm shadow-lg shadow-gold/20"
            >
              <Link href="/kontakt">
                Messe-Paket anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Häufige Fragen
            </h2>
          </div>

          <div className="max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-sm border border-warm-200/60 p-6"
              >
                <h3 className="font-semibold text-navy">{faq.q}</h3>
                <p className="mt-2 text-sm text-warm-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Zeit sparen. Gäste begeistern.
          </h2>
          <p className="mt-3 text-warm-400">
            Lassen Sie uns den Turnover übernehmen — für 5-Sterne-Bewertungen.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6 rounded-sm shadow-lg shadow-gold/20"
            >
              <Link href="/kontakt">
                Kostenloses Angebot anfordern
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href="tel:+4917663818441"
              className="flex items-center gap-2 text-warm-300 hover:text-gold transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              oder rufen Sie an: 0176 638 184 41
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
