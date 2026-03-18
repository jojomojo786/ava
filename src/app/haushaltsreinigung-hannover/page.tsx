import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Bath,
  CookingPot,
  Bed,
  Sofa,
  Shield,
  UserCheck,
  CalendarCheck,
  HeartHandshake,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Haushaltsreinigung Hannover | Premium Reinigungsservice",
  description:
    "Professionelle Haushaltsreinigung in Hannover — mehr Zeit für die schönen Dinge im Leben. Ohne Vertragsbindung, zum Wunschtermin, mit festem Reinigungsteam. Jetzt kostenloses Angebot anfordern.",
};

const scopeItems = [
  {
    icon: Home,
    title: "Wohnräume",
    desc: "Staubwischen, Staubsaugen, Böden wischen — alle Wohnbereiche gründlich gepflegt",
  },
  {
    icon: CookingPot,
    title: "Küche",
    desc: "Arbeitsflächen, Herd, Spüle, Fronten — hygienisch sauber und einladend",
  },
  {
    icon: Bath,
    title: "Badezimmer",
    desc: "WC, Dusche, Waschbecken, Armaturen — streifenfrei und desinfiziert",
  },
  {
    icon: Bed,
    title: "Schlafzimmer",
    desc: "Betten machen, Staubwischen, Boden reinigen — für erholsame Nächte",
  },
  {
    icon: Sofa,
    title: "Flure & Treppen",
    desc: "Eingangsbereiche, Flure und Innentreppen sauber halten",
  },
];

const usps = [
  {
    icon: CalendarCheck,
    title: "Ohne Vertragsbindung",
    desc: "Einmalig oder regelmäßig — Sie entscheiden. Keine Mindestlaufzeit, keine Kündigungsfrist. Buchen Sie, wann Sie es brauchen.",
  },
  {
    icon: UserCheck,
    title: "Feste Reinigungskraft",
    desc: "Immer dieselbe vertraute Person für Ihr Zuhause. Keine wechselnden Fremden — Vertrauen von Anfang an.",
  },
  {
    icon: Shield,
    title: "Vollständig versichert",
    desc: "Umfassender Versicherungsschutz für Ihr Eigentum. Sie können sich entspannen, während wir arbeiten.",
  },
  {
    icon: HeartHandshake,
    title: "Zufriedenheitsversprechen",
    desc: "Wenn Sie nicht zufrieden sind, kommen wir nochmal. Ihre Zufriedenheit ist unser wichtigstes Qualitätsmerkmal.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Haushaltsreinigung in Hannover?",
    a: "Unsere Preise liegen zwischen €14 und €20 pro Stunde, inklusive aller Reinigungsmittel und Geräte. Keine versteckten Gebühren, keine Serviceaufschläge — der genannte Preis ist der Endpreis.",
  },
  {
    q: "Muss ich einen Vertrag abschließen?",
    a: "Nein. Sie können unsere Haushaltsreinigung einmalig oder regelmäßig buchen — ganz ohne Vertragsbindung. Keine Mindestlaufzeit, keine Kündigungsfrist.",
  },
  {
    q: "Kommt immer dieselbe Reinigungskraft?",
    a: "Ja, das ist uns wichtig. Wir stellen Ihnen eine feste Reinigungskraft zu, die Ihr Zuhause und Ihre Wünsche kennt. Nur bei Urlaub oder Krankheit wird eine vertretende Person eingesetzt.",
  },
  {
    q: "Muss ich eigene Reinigungsmittel bereitstellen?",
    a: "Nein. Wir bringen alles mit — professionelle Reinigungsmittel und Geräte sind im Preis enthalten. Auf Wunsch verwenden wir auch Ihre bevorzugten Produkte.",
  },
];

export default function HaushaltsreinigungPage() {
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
              Haushaltsreinigung
              <br />
              <span className="text-gold">in Hannover</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Mehr Zeit für die schönen Dinge im Leben. Wir übernehmen die
              Reinigung Ihres Zuhauses — gründlich, zuverlässig und mit einer
              festen Reinigungskraft, der Sie vertrauen können.
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
                Ohne Vertragsbindung
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Feste Reinigungskraft
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Vollständig versichert
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
              Was wir für Sie reinigen
            </h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              Ihr gesamtes Zuhause — vom Wohnzimmer bis zum Bad. Auf Wunsch
              passen wir den Umfang individuell an.
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
              Warum wir statt Putzportale?
            </h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              Anders als Plattformen bieten wir Ihnen professionelle Qualität mit
              persönlicher Betreuung — ohne versteckte Gebühren.
            </p>
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

      {/* ─── PRICING ─── */}
      <section className="py-20 lg:py-28 bg-navy grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Faire Preise — alles inklusive
            </h2>
            <p className="mt-4 text-warm-400">
              Keine Servicegebühren, keine versteckten Kosten. Reinigungsmittel
              und Geräte sind immer im Preis enthalten.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">Stundenpreis</div>
                <div className="text-3xl font-bold text-gold">€14–€20</div>
                <div className="text-xs text-warm-500 mt-1">pro Stunde, alles inkl.</div>
              </div>
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">Vertragsbindung</div>
                <div className="text-3xl font-bold text-gold">Keine</div>
                <div className="text-xs text-warm-500 mt-1">einmalig oder regelmäßig</div>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-10 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6 rounded-sm shadow-lg shadow-gold/20"
            >
              <Link href="/kontakt">
                Individuelles Angebot anfordern
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
            Mehr Zeit für das Wesentliche
          </h2>
          <p className="mt-3 text-warm-400">
            Lassen Sie uns die Reinigung übernehmen — Sie genießen Ihr sauberes
            Zuhause.
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
