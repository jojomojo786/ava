import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Footprints,
  Mail as MailboxIcon,
  Hand,
  Lightbulb,
  DoorOpen,
  CalendarRange,
  BadgeEuro,
  Scale,
  Users,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Treppenhausreinigung Hannover | Premium Reinigungsservice",
  description:
    "Professionelle Treppenhausreinigung in Hannover — gepflegte Treppenhäuser für zufriedene Mieter. Pauschalpreise, flexible Frequenz (wöchentlich bis monatlich). Jetzt kostenloses Angebot anfordern.",
};

const scopeItems = [
  {
    icon: Footprints,
    title: "Bodenbeläge",
    desc: "Kehren und feuchtes Wischen aller Treppenstufen und Podeste — Fliesen, Stein, PVC",
  },
  {
    icon: Hand,
    title: "Handläufe & Geländer",
    desc: "Gründliche Reinigung aller Griffbereiche — wichtige Hygiene-Kontaktflächen",
  },
  {
    icon: MailboxIcon,
    title: "Briefkästen & Fensterbänke",
    desc: "Staub und Schmutz von Briefkästen, Fensterbänken und Ablagen entfernen",
  },
  {
    icon: DoorOpen,
    title: "Türen & Glasflächen",
    desc: "Eingangstüren, Zwischentüren und Glaselemente streifenfrei reinigen",
  },
  {
    icon: Lightbulb,
    title: "Lichtschalter & Klingeln",
    desc: "Hygienische Reinigung aller Touchpoints — Schalter, Klingeltableaus, Aufzugknöpfe",
  },
];

const usps = [
  {
    icon: BadgeEuro,
    title: "Transparente Pauschalpreise",
    desc: "Feste Monatspreise ohne Überraschungen. Sie wissen vorher genau, was es kostet.",
  },
  {
    icon: CalendarRange,
    title: "Flexible Reinigungsfrequenz",
    desc: "Wöchentlich, 14-tägig oder monatlich — wir passen uns Ihrem Bedarf an.",
  },
  {
    icon: Scale,
    title: "Rechtliche Pflicht erfüllt",
    desc: "Die Hausordnung verpflichtet zur regelmäßigen Treppenhausreinigung. Wir übernehmen das für Sie — rechtssicher.",
  },
  {
    icon: Users,
    title: "Zufriedene Mieter",
    desc: "Ein gepflegtes Treppenhaus steigert die Mieterzufriedenheit und den Wert Ihrer Immobilie.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Treppenhausreinigung in Hannover?",
    a: "Die Kosten richten sich nach Gebäudegröße, Etagen und Reinigungsfrequenz. Als Richtwert: €5–€20 pro Mietpartei oder ab €49 pro Reinigung für ein 3-Etagen-Mehrfamilienhaus. Wir erstellen Ihnen einen individuellen Pauschalpreis.",
  },
  {
    q: "Wie oft sollte das Treppenhaus gereinigt werden?",
    a: "Für Mehrfamilienhäuser empfehlen wir wöchentliche Reinigung. Bei geringerer Nutzung reicht eine 14-tägige oder monatliche Reinigung. Wir beraten Sie gerne zur optimalen Frequenz.",
  },
  {
    q: "Ist die Treppenhausreinigung gesetzlich vorgeschrieben?",
    a: "Ja, die Hausordnung sieht eine regelmäßige Reinigung der Gemeinschaftsflächen vor. Vermieter und WEG-Verwaltungen sind verpflichtet, für saubere Treppenhäuser zu sorgen — entweder durch Mieterregelung oder professionellen Service.",
  },
  {
    q: "Für welche Gebäudetypen bieten Sie Treppenhausreinigung an?",
    a: "Für alle: Mehrfamilienhäuser, Wohnanlagen, Gewerbegebäude, Bürohäuser und gemischt genutzte Immobilien in Hannover und Umgebung.",
  },
];

export default function TreppenhausreinigungPage() {
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
              Treppenhausreinigung
              <br />
              <span className="text-gold">in Hannover</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Gepflegte Treppenhäuser für zufriedene Mieter und den Werterhalt
              Ihrer Immobilie. Wir übernehmen die regelmäßige Reinigung — zuverlässig,
              gründlich und zu transparenten Pauschalpreisen.
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
                Ab €5 pro Mietpartei
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Feste Pauschalpreise
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Flexible Frequenz
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
              Was wir reinigen
            </h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              Alle relevanten Bereiche Ihres Treppenhauses — von den Bodenbelägen
              bis zu den Hygiene-Kontaktflächen.
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
              Warum unsere Treppenhausreinigung?
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

      {/* ─── PRICING ─── */}
      <section className="py-20 lg:py-28 bg-navy grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Transparente Pauschalpreise
            </h2>
            <p className="mt-4 text-warm-400">
              Feste Monatspreise — keine versteckten Kosten, keine Überraschungen.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">Pro Mietpartei</div>
                <div className="text-3xl font-bold text-gold">€5–€20</div>
                <div className="text-xs text-warm-500 mt-1">pro Reinigung</div>
              </div>
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">3-Etagen-Haus</div>
                <div className="text-3xl font-bold text-gold">ab €49</div>
                <div className="text-xs text-warm-500 mt-1">pro Reinigung</div>
              </div>
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">Monatspauschale</div>
                <div className="text-3xl font-bold text-gold">ab €99</div>
                <div className="text-xs text-warm-500 mt-1">bei wöchentlicher Reinigung</div>
              </div>
            </div>

            <p className="mt-8 text-sm text-warm-400">
              Der genaue Preis richtet sich nach Gebäudegröße, Etagen und
              gewünschter Frequenz.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6 rounded-sm shadow-lg shadow-gold/20"
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
            Gepflegte Treppenhäuser — zufriedene Mieter
          </h2>
          <p className="mt-3 text-warm-400">
            Lassen Sie sich jetzt unverbindlich beraten.
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
