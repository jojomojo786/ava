import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Frame,
  Maximize2,
  Building2,
  Home,
  Sun,
  Droplets,
  BadgeEuro,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Fensterreinigung Hannover | Premium Reinigungsservice",
  description:
    "Professionelle Fensterreinigung in Hannover — streifenfrei garantiert. Glas, Rahmen und Fensterbänke inklusive. Ab €2,50 pro Seite. Jetzt kostenloses Angebot anfordern.",
};

const scopeItems = [
  {
    icon: Sparkles,
    title: "Glasflächen",
    desc: "Streifenfreie Reinigung aller Fensterscheiben — innen und außen",
  },
  {
    icon: Frame,
    title: "Fensterrahmen",
    desc: "Gründliche Reinigung der Rahmen — PVC, Holz oder Aluminium",
  },
  {
    icon: Maximize2,
    title: "Fensterbänke",
    desc: "Innen- und Außenfensterbänke von Staub und Verschmutzung befreien",
  },
  {
    icon: Droplets,
    title: "Glasflächen & Türen",
    desc: "Glastüren, Wintergärten und Glastrennwände streifenfrei reinigen",
  },
];

const usps = [
  {
    icon: Sparkles,
    title: "Streifenfrei garantiert",
    desc: "Professionelle Technik und Reinigungsmittel sorgen für makellose Ergebnisse — jedes Mal.",
  },
  {
    icon: BadgeEuro,
    title: "Transparente Preise pro Fenster",
    desc: "Sie wissen vorher genau, was es kostet. Glas, Rahmen und Fensterbank — alles im Preis enthalten.",
  },
  {
    icon: Home,
    title: "Privat & Gewerbe",
    desc: "Ob Einfamilienhaus oder Bürogebäude — wir reinigen Fenster jeder Größe und Zugänglichkeit.",
  },
  {
    icon: Sun,
    title: "Saisonale Reinigung",
    desc: "Besonders im Frühjahr und Herbst empfohlen. Regelmäßige Fensterreinigung schützt die Verglasung.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Fensterreinigung in Hannover?",
    a: "Ab €2,50 pro Fensterseite inklusive Rahmen und Fensterbank. Der genaue Preis richtet sich nach Anzahl, Größe und Zugänglichkeit der Fenster. Wir erstellen Ihnen ein transparentes Angebot.",
  },
  {
    q: "Werden Rahmen und Fensterbänke mitgereinigt?",
    a: "Ja, immer. Glas, Rahmen und Fensterbank sind bei uns grundsätzlich im Preis enthalten — keine Zusatzkosten.",
  },
  {
    q: "Reinigen Sie auch Fenster in oberen Stockwerken?",
    a: "Ja. Wir verfügen über professionelle Ausrüstung für Fenster in höheren Etagen. Für schwer zugängliche Fenster erstellen wir ein individuelles Angebot.",
  },
  {
    q: "Wie oft sollte man Fenster reinigen lassen?",
    a: "Für Privathaushalte empfehlen wir 2–4 Mal pro Jahr (besonders im Frühjahr und Herbst). Für Gewerbe je nach Lage und Verschmutzungsgrad häufiger.",
  },
];

export default function FensterreinigungPage() {
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
              Fensterreinigung
              <br />
              <span className="text-gold">in Hannover</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Streifenfrei saubere Fenster — garantiert. Glas, Rahmen und
              Fensterbänke inklusive, transparente Preise pro Fenster und
              professionelle Ergebnisse, die Sie sofort sehen.
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
                Ab €2,50 pro Seite
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Rahmen & Fensterbank inkl.
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Streifenfrei garantiert
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
              Nicht nur das Glas — wir reinigen das komplette Fenster von der
              Scheibe bis zur Fensterbank.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              Warum unsere Fensterreinigung?
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
              Transparente Preise
            </h2>
            <p className="mt-4 text-warm-400">
              Pro Fensterseite — Glas, Rahmen und Fensterbank immer inklusive.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">Privatkunden</div>
                <div className="text-3xl font-bold text-gold">ab €2,50</div>
                <div className="text-xs text-warm-500 mt-1">pro Fensterseite</div>
              </div>
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">Gewerbekunden</div>
                <div className="text-3xl font-bold text-gold">auf Anfrage</div>
                <div className="text-xs text-warm-500 mt-1">individuelles Angebot</div>
              </div>
            </div>

            <p className="mt-8 text-sm text-warm-400">
              Inkl. Glas, Rahmen, Fensterbank. Keine versteckten Kosten.
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
            Streifenfrei saubere Fenster
          </h2>
          <p className="mt-3 text-warm-400">
            Lassen Sie das Licht herein — wir kümmern uns um den Rest.
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
