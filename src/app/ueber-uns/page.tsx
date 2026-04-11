import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  CalendarCheck,
  BadgeEuro,
  Users,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über Uns | AvA Facility Services Hannover",
  description:
    "AvA Facility Services Hannover — Qualität, Zuverlässigkeit und sorgfältige Arbeit. Erfahren Sie mehr über unser Team und unsere Werte. Für Privat- und Geschäftskunden.",
};

const values = [
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    desc: "Wir halten, was wir versprechen. Pünktlich, jeden Einsatz, ohne Ausnahme.",
  },
  {
    icon: CheckCircle2,
    title: "Qualität",
    desc: "Gründliche Arbeit mit einem Auge fürs Detail. Wir gehen erst, wenn alles stimmt.",
  },
  {
    icon: Shield,
    title: "Vertrauen",
    desc: "Vollversichert, geschultes Personal, feste Teams. Sie können sich auf uns verlassen.",
  },
  {
    icon: BadgeEuro,
    title: "Fairness",
    desc: "Transparente Preise, keine versteckten Kosten. Das Angebot gilt — ohne Nachforderungen.",
  },
  {
    icon: CalendarCheck,
    title: "Flexibilität",
    desc: "Wir passen uns Ihrem Zeitplan an — nicht umgekehrt. Wunschtermine sind für uns selbstverständlich.",
  },
  {
    icon: Users,
    title: "Persönlicher Service",
    desc: "Kein Callcenter, keine anonymen Teams. Bei uns haben Sie immer einen persönlichen Ansprechpartner.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/[0.03] to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Über
              <br />
              <span className="text-gold">Uns</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              AvA Facility Services steht für Qualität, Zuverlässigkeit und
              sorgfältige Arbeit. Unser Ziel ist es, unseren Kunden ein sauberes,
              gepflegtes und angenehmes Umfeld zu bieten — damit Sie sich auf das
              Wesentliche konzentrieren können.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="gold-line mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Warum wir das tun, was wir tun
              </h2>
              <p className="mt-6 text-warm-600 leading-relaxed">
                In der heutigen Zeit ist es oft schwierig, Beruf, Familie und
                Haushalt unter einen Hut zu bringen. Saubere Räume sind dabei
                kein Luxus — sie sind die Grundlage für Wohlbefinden,
                Produktivität und ein gutes Gefühl.
              </p>
              <p className="mt-4 text-warm-600 leading-relaxed">
                Genau hier setzen wir an. Ob Ihr Büro, Ihre Praxis, Ihr
                Treppenhaus oder Ihr Zuhause — wir übernehmen die Reinigung,
                damit Sie Ihre Zeit für die wichtigen Dinge nutzen können.
              </p>
              <p className="mt-4 text-warm-600 leading-relaxed">
                Als lokaler Dienstleister aus Hannover sind wir nah an unseren
                Kunden. Wir kennen die Bedürfnisse der Stadt und ihrer Bewohner
                — und darauf stellen wir unseren Service ein.
              </p>
            </div>

            <div className="bg-navy rounded-sm p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-gold mb-6">
                Was uns ausmacht
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold/70 shrink-0 mt-0.5" />
                  <p className="text-warm-300 text-sm leading-relaxed">
                    <span className="font-medium text-white">Für Privat- und Geschäftskunden</span> —
                    vom Einfamilienhaus bis zum Bürokomplex
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold/70 shrink-0 mt-0.5" />
                  <p className="text-warm-300 text-sm leading-relaxed">
                    <span className="font-medium text-white">9 Reinigungsservices</span> —
                    maßgeschneidert für jeden Bedarf
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold/70 shrink-0 mt-0.5" />
                  <p className="text-warm-300 text-sm leading-relaxed">
                    <span className="font-medium text-white">Festes Personal</span> —
                    geschulte Reinigungskräfte, die Sie kennen und denen Sie vertrauen
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold/70 shrink-0 mt-0.5" />
                  <p className="text-warm-300 text-sm leading-relaxed">
                    <span className="font-medium text-white">Lokal in Hannover</span> —
                    persönlicher Service, kurze Wege, schnelle Reaktion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Unsere Werte
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 mb-4">
                    <Icon className="h-5 w-5 text-gold-dark" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-warm-500 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── LOCAL ─── */}
      <section className="py-20 lg:py-28 bg-navy grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lindemannallee+17%2C+30173+Hannover"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gold/80 hover:text-gold transition-colors mb-4"
            >
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Lindemannallee 17, 30173 Hannover
              </span>
            </a>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Ihr lokaler Reinigungspartner
            </h2>
            <p className="mt-6 text-lg text-warm-300 leading-relaxed">
              Wir sind kein anonymes Reinigungsportal — wir sind Ihr
              Reinigungspartner aus Hannover. Persönlich, erreichbar und immer
              in der Nähe. Bei uns haben Sie einen festen Ansprechpartner, der
              Ihre Räumlichkeiten und Ihre Wünsche kennt.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
            Lernen Sie uns kennen
          </h2>
          <p className="mt-3 text-warm-500">
            Wir freuen uns auf Ihre Anfrage — persönlich und unverbindlich.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6 rounded-sm shadow-lg shadow-gold/20"
            >
              <Link href="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <a
              href="tel:+4917663818441"
              className="flex items-center gap-2 text-warm-500 hover:text-navy transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              0176 638 184 41
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
