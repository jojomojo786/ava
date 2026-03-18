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
  Warehouse,
  Zap,
  CalendarCheck,
  BadgeEuro,
  Hammer,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Grundreinigung Hannover | Premium Reinigungsservice",
  description:
    "Intensive Grundreinigung in Hannover — fasertief gründlich, kurzfristig verfügbar, ohne Vertragsbindung. Nach Renovierung, Umzug oder Frühjahrsputz. Ab €200 für 60m². Jetzt Angebot anfordern.",
};

const scopeItems = [
  {
    icon: CookingPot,
    title: "Küche intensiv",
    desc: "Herd, Backofen, Kühlschrank innen, Dunstabzugshaube, Arbeitsflächen, Fronten — alles fasertief sauber",
  },
  {
    icon: Bath,
    title: "Bad & Sanitär",
    desc: "Kalkentfernung, Fugenreinigung, Schimmelbehandlung, Armaturen auf Hochglanz",
  },
  {
    icon: Sparkles,
    title: "Böden & Teppiche",
    desc: "Intensivreinigung aller Bodenbeläge — Fliesen, Parkett, Laminat, Teppich",
  },
  {
    icon: DoorOpen,
    title: "Schränke & Innenflächen",
    desc: "Schränke innen auswischen, Regale, Ablagen, Fensterbänke gründlich reinigen",
  },
  {
    icon: Warehouse,
    title: "Keller & Nebenräume",
    desc: "Auch Keller, Abstellräume und Hauswirtschaftsräume auf Wunsch inklusive",
  },
];

const useCases = [
  { label: "Nach Renovierung", desc: "Baustaub und Verschmutzung professionell entfernen" },
  { label: "Frühjahrsputz", desc: "Jährliche Tiefenreinigung für ein frisches Zuhause" },
  { label: "Vor dem Einzug", desc: "Neue Wohnung sauber übernehmen — vom Vormieter befreit" },
  { label: "Vernachlässigte Räume", desc: "Lange nicht gereinigte Objekte wieder auf Vordermann bringen" },
  { label: "Nach Wasserschaden", desc: "Professionelle Reinigung nach Schadensfällen" },
  { label: "Vor Besichtigung", desc: "Immobilie verkaufsfähig oder vermietbar machen" },
];

const usps = [
  {
    icon: Zap,
    title: "Kurzfristig verfügbar",
    desc: "Schnelle Terminvergabe — oft schon innerhalb weniger Tage. Ideal für dringende Situationen.",
  },
  {
    icon: CalendarCheck,
    title: "Ohne Vertragsbindung",
    desc: "Einmalige Buchung, kein Abo, keine Mindestlaufzeit. Sie buchen genau dann, wenn Sie es brauchen.",
  },
  {
    icon: BadgeEuro,
    title: "Transparenter Festpreis",
    desc: "Preis nach Fläche und Umfang — Sie wissen vorher genau, was es kostet. Alle Mittel und Geräte inklusive.",
  },
  {
    icon: Hammer,
    title: "Modulare Zusatzleistungen",
    desc: "Fensterreinigung, Backofen-Intensiv, Kühlschrank-Reinigung — erweitern Sie den Umfang nach Bedarf.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Grundreinigung in Hannover?",
    a: "Typisch €15–€25 pro Stunde oder als Festpreis nach Fläche: ca. €200–€350 für eine 60m²-Wohnung. Der genaue Preis hängt von Zustand, Fläche und gewünschtem Umfang ab.",
  },
  {
    q: "Was ist der Unterschied zur normalen Reinigung?",
    a: "Eine Grundreinigung ist deutlich intensiver als die regelmäßige Unterhaltsreinigung. Sie erreicht Bereiche, die im Alltag nicht gereinigt werden — Backofen innen, Fugen, Schränke innen, hartnäckige Kalkablagerungen.",
  },
  {
    q: "Wie kurzfristig kann ich einen Termin bekommen?",
    a: "In der Regel innerhalb weniger Tage. Bei dringenden Fällen (Wasserschaden, kurzfristiger Umzug) geben wir unser Bestes, noch schneller zu reagieren.",
  },
  {
    q: "Kann ich einzelne Leistungen dazu buchen?",
    a: "Ja. Unsere Grundreinigung ist modular aufgebaut. Sie können Zusatzleistungen wie Fensterreinigung, Backofen-Intensiv oder Teppichreinigung individuell hinzufügen.",
  },
];

export default function GrundreinigungPage() {
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
              Grundreinigung
              <br />
              <span className="text-gold">in Hannover</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Intensive Tiefenreinigung — fasertief gründlich, kurzfristig
              verfügbar und ohne Vertragsbindung. Wenn die regelmäßige Reinigung
              nicht mehr reicht, bringen wir Ihre Räume auf den Ursprungszustand
              zurück.
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
                Ab €200 für 60m²
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Kurzfristig verfügbar
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Ohne Vertragsbindung
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Wann ist eine Grundreinigung sinnvoll?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc) => (
              <Card
                key={uc.label}
                className="p-5 bg-white border-warm-200/60 rounded-sm"
              >
                <h3 className="font-semibold text-navy">{uc.label}</h3>
                <p className="mt-1 text-sm text-warm-500">{uc.desc}</p>
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
              Jeder Winkel wird erreicht — vom Backofen-Inneren bis zu den Fugen
              im Bad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              Warum unsere Grundreinigung?
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
            Fasertief sauber — wie am ersten Tag
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
