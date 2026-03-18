import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Monitor,
  Sparkles,
  ShowerHead,
  Coffee,
  Clock,
  Shield,
  Leaf,
  UserCheck,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Büroreinigung Hannover | AvA Reinigungsservice",
  description:
    "Professionelle Büroreinigung in Hannover — für ein sauberes Arbeitsumfeld und ein gutes Betriebsklima. Flexible Termine, faire Preise, diskret und termingerecht. Jetzt kostenloses Angebot anfordern.",
};

const scopeItems = [
  {
    icon: Monitor,
    title: "Schreibtische & Arbeitsflächen",
    desc: "Staubfreie, hygienische Arbeitsplätze für konzentriertes Arbeiten",
  },
  {
    icon: Sparkles,
    title: "Bodenpflege",
    desc: "Teppich, Parkett, Fliesen — fachgerecht gepflegt mit geeigneten Reinigungsmitteln",
  },
  {
    icon: ShowerHead,
    title: "Sanitärbereiche",
    desc: "Hygienische Reinigung und Desinfektion aller sanitären Einrichtungen",
  },
  {
    icon: Coffee,
    title: "Teeküchen & Pausenräume",
    desc: "Saubere Gemeinschaftsräume für das Wohlbefinden Ihres Teams",
  },
];

const usps = [
  {
    icon: Clock,
    title: "Flexible Terminplanung",
    desc: "Reinigung außerhalb Ihrer Geschäftszeiten — morgens, abends oder am Wochenende. Kein Betriebsablauf wird gestört.",
  },
  {
    icon: Shield,
    title: "Diskret und vertrauenswürdig",
    desc: "Geschultes Personal mit Versicherungsschutz. Ideal für Kanzleien, Praxen und sensible Büroumgebungen.",
  },
  {
    icon: Leaf,
    title: "Umweltfreundliche Reinigung",
    desc: "Wir setzen auf nachhaltige, umweltschonende Reinigungsmittel — gut für Ihr Team und die Umwelt.",
  },
  {
    icon: UserCheck,
    title: "Festes Reinigungsteam",
    desc: "Immer dasselbe geschulte Team für Ihre Räumlichkeiten. Sie wissen, wer kommt — Vertrauen inklusive.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Büroreinigung in Hannover?",
    a: "Die Kosten hängen von Fläche, Bodenart und Reinigungsfrequenz ab. Als Richtwert: ab €89 pro Einsatz für kleinere Büros. Für 100m² bei wöchentlicher Reinigung rechnen Sie mit ca. €350 netto/Monat. Wir erstellen Ihnen ein individuelles, transparentes Angebot.",
  },
  {
    q: "Wie schnell erhalte ich ein Angebot?",
    a: "Nach Ihrer Anfrage melden wir uns innerhalb von 24 Stunden. Nach einer kurzen Besichtigung oder Telefonabsprache erhalten Sie Ihr maßgeschneidertes Angebot.",
  },
  {
    q: "Wird außerhalb der Bürozeiten gereinigt?",
    a: "Ja, selbstverständlich. Wir reinigen vor Arbeitsbeginn, nach Feierabend oder am Wochenende — ganz nach Ihren Wünschen, ohne Ihren Betrieb zu stören.",
  },
  {
    q: "Sind die Reinigungsmittel im Preis enthalten?",
    a: "Ja. Alle Reinigungsmittel, professionellen Geräte und die Anfahrt sind im Preis enthalten. Keine versteckten Kosten.",
  },
];

export default function BueroreinigungPage() {
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
              Büroreinigung
              <br />
              <span className="text-gold">in Hannover</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Saubere Büroräume sind die Visitenkarte Ihres Unternehmens. Wir
              sorgen für ein gepflegtes Arbeitsumfeld, das Vertrauen schafft und
              die Produktivität Ihres Teams steigert — professionell, diskret und
              termingerecht.
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

            {/* Quick trust facts */}
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Ab €89 pro Einsatz
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Angebot in 24h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Alle Mittel inkl.
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
              Unsere Büroreinigung umfasst alle Bereiche, die für ein sauberes und
              professionelles Arbeitsumfeld wichtig sind.
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
              Warum unsere Büroreinigung?
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

      {/* ─── PRICING INDICATION ─── */}
      <section className="py-20 lg:py-28 bg-navy grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Transparente Preise
            </h2>
            <p className="mt-4 text-warm-400">
              Keine versteckten Kosten — alle Reinigungsmittel und Geräte im Preis
              enthalten.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">Einzelreinigung</div>
                <div className="text-3xl font-bold text-gold">ab €89</div>
                <div className="text-xs text-warm-500 mt-1">pro Einsatz</div>
              </div>
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">
                  Wöchentlich (100m²)
                </div>
                <div className="text-3xl font-bold text-gold">ab €350</div>
                <div className="text-xs text-warm-500 mt-1">netto / Monat</div>
              </div>
              <div className="rounded-sm bg-white/[0.06] border border-white/10 p-6">
                <div className="text-sm text-warm-400 mb-2">Stundenpreis</div>
                <div className="text-3xl font-bold text-gold">
                  €14–18
                </div>
                <div className="text-xs text-warm-500 mt-1">pro Stunde</div>
              </div>
            </div>

            <p className="mt-8 text-sm text-warm-400">
              Der genaue Preis richtet sich nach Fläche, Bodenart und Frequenz.
              <br className="hidden sm:block" />
              Wir erstellen Ihnen ein individuelles, unverbindliches Angebot.
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
            Saubere Büros für Ihr Unternehmen
          </h2>
          <p className="mt-3 text-warm-400">
            Lassen Sie sich jetzt unverbindlich beraten — wir antworten innerhalb
            von 24 Stunden.
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
