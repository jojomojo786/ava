import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  CookingPot,
  Bath,
  Sparkles,
  DoorOpen,
  Truck,
  ShieldCheck,
  Zap,
  BadgeEuro,
  FileCheck,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Umzugsreinigung Hannover | Mit Abnahmegarantie | Premium Reinigungsservice",
  description:
    "Professionelle Umzugsreinigung in Hannover mit Abnahmegarantie. 1-Zimmer ab €159, 2-Zimmer ab €189, 3-Zimmer ab €229. Kurzfristig verfügbar, alle Mittel inkl. Jetzt Angebot anfordern.",
};

const scopeItems = [
  {
    icon: CookingPot,
    title: "Küche komplett",
    desc: "Herd, Backofen, Dunstabzugshaube, Kühlschrank, Arbeitsflächen, Fronten und Böden",
  },
  {
    icon: Bath,
    title: "Bad & WC",
    desc: "Kalkentfernung, Fugen, Armaturen, Fliesen, Spiegel — alles auf Hochglanz",
  },
  {
    icon: Sparkles,
    title: "Alle Böden & Fenster",
    desc: "Sämtliche Bodenbeläge gereinigt, Fenster innen streifenfrei geputzt",
  },
  {
    icon: DoorOpen,
    title: "Schränke, Türen & Details",
    desc: "Einbauschränke innen, Türen, Steckdosen, Lichtschalter, Fensterbänke",
  },
];

const pricingTiers = [
  { rooms: "1-Zimmer", price: "ab €159", desc: "Studio / Apartment" },
  { rooms: "2-Zimmer", price: "ab €189", desc: "Wohnung" },
  { rooms: "3-Zimmer", price: "ab €229", desc: "Wohnung / Haus" },
  { rooms: "4+ Zimmer", price: "auf Anfrage", desc: "Individuelles Angebot" },
];

const usps = [
  {
    icon: ShieldCheck,
    title: "Abnahmegarantie",
    desc: "Wir garantieren die erfolgreiche Abnahme durch Ihren Vermieter. Sollte etwas beanstandet werden, kommen wir kostenlos nach.",
  },
  {
    icon: Zap,
    title: "Kurzfristig verfügbar",
    desc: "Umzüge passieren oft schnell. Wir sind kurzfristig für Sie da — auch bei engen Übergabefristen.",
  },
  {
    icon: BadgeEuro,
    title: "Festpreis — alles inklusive",
    desc: "Reinigungsmittel, Geräte und Anfahrt sind im Preis enthalten. Keine versteckten Kosten.",
  },
  {
    icon: FileCheck,
    title: "Übergabefertiger Zustand",
    desc: "Ihre Wohnung wird so übergeben, wie Ihr Vermieter es erwartet — sauber, gepflegt, beanstandungsfrei.",
  },
];

const faqs = [
  {
    q: "Was bedeutet Abnahmegarantie?",
    a: "Wir garantieren, dass Ihre Wohnung vom Vermieter bei der Übergabe akzeptiert wird. Sollte der Vermieter die Reinigung beanstanden, kommen wir kostenlos zurück und bessern nach.",
  },
  {
    q: "Was kostet eine Umzugsreinigung in Hannover?",
    a: "1-Zimmer ab €159, 2-Zimmer ab €189, 3-Zimmer ab €229 — alles inklusive (Reinigungsmittel, Geräte, Anfahrt). Für größere Wohnungen erstellen wir ein individuelles Angebot.",
  },
  {
    q: "Wie kurzfristig kann ich buchen?",
    a: "Oft innerhalb weniger Tage. Wir verstehen, dass Umzüge stressig sind und Termine eng sein können. Rufen Sie uns an für eine schnelle Terminabstimmung.",
  },
  {
    q: "Was wird bei der Umzugsreinigung gereinigt?",
    a: "Alles, was für eine erfolgreiche Wohnungsübergabe nötig ist: Küche komplett (inkl. Backofen, Kühlschrank), Bad (inkl. Kalkentfernung), alle Böden, Fenster innen, Schränke innen, Türen und alle Details.",
  },
];

export default function UmzugsreinigungPage() {
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
            <p className="text-sm font-medium tracking-wide text-gold/80 uppercase mb-3">
              Unsere Leistungen
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Umzugsreinigung
              <br />
              <span className="text-gold">mit Abnahmegarantie</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Entspannt umziehen — wir kümmern uns um die Reinigung. Mit unserer
              Abnahmegarantie ist Ihre Wohnungsübergabe gesichert. Alle Mittel und
              Geräte inklusive, kurzfristig verfügbar.
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
                href="tel:+49511XXXXXXX"
                className="flex items-center gap-2 text-warm-300 hover:text-gold transition-colors text-sm py-3"
              >
                <Phone className="h-4 w-4" />
                oder rufen Sie an: 0511 XXX XXXX
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Abnahmegarantie inklusive
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Ab €159 (1-Zimmer)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Kurzfristig verfügbar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING TIERS ─── */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Transparente Festpreise
            </h2>
            <p className="mt-4 text-warm-500">
              Alle Reinigungsmittel, Geräte und Anfahrt inklusive. Keine versteckten Kosten.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.rooms}
                className="p-5 bg-white border-warm-200/60 rounded-sm text-center"
              >
                <div className="text-sm text-warm-500 mb-2">{tier.rooms}</div>
                <div className="text-2xl lg:text-3xl font-bold text-navy">
                  {tier.price}
                </div>
                <div className="text-xs text-warm-400 mt-1">{tier.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE SCOPE ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Was wir reinigen
            </h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              Alles, was für eine beanstandungsfreie Wohnungsübergabe nötig ist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {scopeItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="p-6 bg-warm-50 border-warm-200/60 rounded-sm"
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
      <section className="py-20 lg:py-28 bg-navy grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Warum unsere Umzugsreinigung?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div key={usp.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      {usp.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-warm-400 leading-relaxed">
                      {usp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
            Entspannt umziehen — Übergabe gesichert
          </h2>
          <p className="mt-3 text-warm-400">
            Mit Abnahmegarantie für eine sorgenfreie Wohnungsübergabe.
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
              href="tel:+49511XXXXXXX"
              className="flex items-center gap-2 text-warm-300 hover:text-gold transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              oder rufen Sie an: 0511 XXX XXXX
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
