import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShowerHead,
  Coffee,
  CornerDownRight,
  Wrench,
  ClipboardList,
  CalendarRange,
  UserCheck,
  TrendingUp,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unterhaltsreinigung Hannover | AvA Facility Services",
  description:
    "Regelmäßige Unterhaltsreinigung in Hannover — für den Werterhalt Ihrer Immobilie. Maßgeschneidertes Leistungsverzeichnis, feste Monatspreise, flexible Frequenz. Jetzt kostenloses Angebot anfordern.",
};

const scopeItems = [
  {
    icon: Sparkles,
    title: "Bodenpflege",
    desc: "Regelmäßiges Kehren, Saugen und Wischen aller Bodenflächen — Fliesen, Parkett, Teppich, PVC",
  },
  {
    icon: Wrench,
    title: "Arbeitsplätze & Schreibtische",
    desc: "Staubfreie Oberflächen und saubere Arbeitsflächen für Ihr Team",
  },
  {
    icon: Coffee,
    title: "Küchen & Teeküchen",
    desc: "Gemeinschaftsräume hygienisch sauber — Spüle, Arbeitsflächen, Geräte",
  },
  {
    icon: ShowerHead,
    title: "Sanitärbereiche",
    desc: "Tägliche oder wöchentliche Reinigung und Desinfektion aller sanitären Anlagen",
  },
  {
    icon: CornerDownRight,
    title: "Flure & Treppenhäuser",
    desc: "Gemeinschaftsflächen, Eingangsbereiche und Aufzüge sauber halten",
  },
];

const usps = [
  {
    icon: ClipboardList,
    title: "Maßgeschneidertes Leistungsverzeichnis",
    desc: "Wir erstellen ein detailliertes Leistungsverzeichnis für Ihr Objekt — dokumentiert, transparent und individuell anpassbar.",
  },
  {
    icon: CalendarRange,
    title: "Flexible Frequenzoptionen",
    desc: "Täglich, 2x wöchentlich, wöchentlich oder 14-tägig — Sie bestimmen den Rhythmus, wir garantieren die Qualität.",
  },
  {
    icon: UserCheck,
    title: "Festes Reinigungsteam",
    desc: "Immer dasselbe geschulte Team für Ihr Objekt. Vertrauen, Routine und gleichbleibende Qualität.",
  },
  {
    icon: TrendingUp,
    title: "Werterhalt Ihrer Immobilie",
    desc: "Regelmäßige professionelle Pflege schützt Böden, Oberflächen und Einrichtung vor Verschleiß.",
  },
];

const frequencies = [
  { label: "Täglich", desc: "Für stark frequentierte Gebäude und Bürokomplexe" },
  { label: "2x pro Woche", desc: "Der Standard für mittelgroße Büros und Praxen" },
  { label: "Wöchentlich", desc: "Für Objekte mit moderater Nutzung" },
  { label: "14-tägig", desc: "Für Gebäude mit geringem Publikumsverkehr" },
];

const faqs = [
  {
    q: "Was ist der Unterschied zwischen Unterhaltsreinigung und Grundreinigung?",
    a: "Unterhaltsreinigung ist die regelmäßige, laufende Pflege Ihres Gebäudes — der Standardzustand wird erhalten. Grundreinigung ist eine einmalige Intensivreinigung, die den Ausgangszustand wiederherstellt. Beide ergänzen sich ideal.",
  },
  {
    q: "Wie wird der Preis berechnet?",
    a: "Der Preis richtet sich nach Fläche, Reinigungsumfang und Frequenz. Nach einer Besichtigung erstellen wir ein individuelles Leistungsverzeichnis mit festem Monatspreis — keine Überraschungen.",
  },
  {
    q: "Kann ich den Umfang nachträglich anpassen?",
    a: "Ja, selbstverständlich. Das Leistungsverzeichnis ist flexibel erweiterbar oder reduzierbar. Saisonale Anpassungen oder Sondereinsätze sind jederzeit möglich.",
  },
  {
    q: "Bieten Sie auch Jahresverträge an?",
    a: "Ja. Bei Jahresverträgen profitieren Sie von Preisgarantie und bevorzugter Terminplanung. Aber auch kürzere Laufzeiten sind möglich.",
  },
];

export default function UnterhaltsreinigungPage() {
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
              Unterhaltsreinigung
              <br />
              <span className="text-gold">in Hannover</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Regelmäßige Gebäudepflege für den Werterhalt Ihrer Immobilie. Mit
              einem maßgeschneiderten Leistungsverzeichnis und festen
              Monatspreisen sorgen wir zuverlässig für Sauberkeit — Tag für Tag.
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
                Feste Monatspreise
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Individuelles Leistungsverzeichnis
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
              Unser Leistungsumfang
            </h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              Die Unterhaltsreinigung umfasst alle Bereiche Ihres Gebäudes — individuell
              auf Ihre Anforderungen abgestimmt.
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
              Warum unsere Unterhaltsreinigung?
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

      {/* ─── FREQUENCY OPTIONS ─── */}
      <section className="py-20 lg:py-28 bg-navy grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Reinigungsfrequenz nach Ihrem Bedarf
            </h2>
            <p className="mt-4 text-warm-400">
              Wählen Sie den Rhythmus, der zu Ihrem Objekt passt.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {frequencies.map((freq) => (
                <div
                  key={freq.label}
                  className="rounded-sm bg-white/[0.06] border border-white/10 p-5 text-left"
                >
                  <div className="text-lg font-semibold text-gold">
                    {freq.label}
                  </div>
                  <div className="mt-1 text-sm text-warm-400">{freq.desc}</div>
                </div>
              ))}
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
            Regelmäßige Pflege für Ihre Immobilie
          </h2>
          <p className="mt-3 text-warm-400">
            Lassen Sie sich jetzt unverbindlich beraten — wir erstellen Ihr
            individuelles Leistungsverzeichnis.
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
