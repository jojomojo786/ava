import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Footprints,
  Home,
  Stethoscope,
  Wrench,
  Sparkles,
  SprayCan,
  Truck,
  BedDouble,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Preise Reinigungsservice Hannover | Was kostet eine Reinigung?",
  description:
    "Transparente Preise für alle Reinigungsservices in Hannover. Büroreinigung ab €89, Fensterreinigung ab €2,50/Seite, Umzugsreinigung ab €159. Alle Mittel inklusive. Jetzt Angebot anfordern.",
};

const services = [
  {
    icon: Building2,
    name: "Büroreinigung",
    href: "/bueroreinigung-hannover",
    prices: [
      { label: "Einzelreinigung", value: "ab €89" },
      { label: "Wöchentlich (100m²)", value: "ab €350/Monat" },
      { label: "Stundenpreis", value: "€14–€18/h" },
    ],
    note: "Preis abhängig von Fläche, Bodenart und Frequenz",
  },
  {
    icon: Footprints,
    name: "Treppenhausreinigung",
    href: "/treppenhausreinigung-hannover",
    prices: [
      { label: "Pro Mietpartei", value: "€5–€20" },
      { label: "3-Etagen-Haus", value: "ab €49" },
      { label: "Monatspauschale", value: "ab €99" },
    ],
    note: "Pauschalpreise nach Gebäudegröße und Frequenz",
  },
  {
    icon: Home,
    name: "Haushaltsreinigung",
    href: "/haushaltsreinigung-hannover",
    prices: [
      { label: "Stundenpreis", value: "€14–€20/h" },
      { label: "Vertragsbindung", value: "Keine" },
    ],
    note: "Alles inklusive — Reinigungsmittel und Geräte im Preis",
  },
  {
    icon: Stethoscope,
    name: "Praxisreinigung",
    href: "/praxisreinigung-hannover",
    prices: [
      { label: "Pauschalpreis", value: "auf Anfrage" },
    ],
    note: "Individuelles Angebot nach Praxisgröße und Hygienestandard",
  },
  {
    icon: Wrench,
    name: "Unterhaltsreinigung",
    href: "/unterhaltsreinigung-hannover",
    prices: [
      { label: "Monatspreis", value: "auf Anfrage" },
    ],
    note: "Fester Monatspreis nach individuellem Leistungsverzeichnis",
  },
  {
    icon: Sparkles,
    name: "Fensterreinigung",
    href: "/fensterreinigung-hannover",
    prices: [
      { label: "Pro Fensterseite", value: "ab €2,50" },
      { label: "Gewerbekunden", value: "auf Anfrage" },
    ],
    note: "Glas, Rahmen und Fensterbank immer inklusive",
  },
  {
    icon: SprayCan,
    name: "Grundreinigung",
    href: "/grundreinigung-hannover",
    prices: [
      { label: "60m² Wohnung", value: "ab €200" },
      { label: "Stundenpreis", value: "€15–€25/h" },
    ],
    note: "Einmalige Intensivreinigung — Festpreis nach Fläche und Zustand",
  },
  {
    icon: Truck,
    name: "Umzugsreinigung",
    href: "/umzugsreinigung-hannover",
    prices: [
      { label: "1-Zimmer", value: "ab €159" },
      { label: "2-Zimmer", value: "ab €189" },
      { label: "3-Zimmer", value: "ab €229" },
    ],
    note: "Mit Abnahmegarantie — alle Mittel und Geräte inklusive",
  },
  {
    icon: BedDouble,
    name: "Airbnb & Ferienwohnung",
    href: "/airbnb-reinigung-hannover",
    prices: [
      { label: "Bis 60m²", value: "ab €65" },
      { label: "Stundenpreis", value: "€30/h (min. 2h)" },
    ],
    note: "Inkl. Bettwäschewechsel und Foto-Dokumentation",
  },
];

export default function PreisePage() {
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
              Was kostet eine
              <br />
              <span className="text-gold">Reinigung?</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Transparente Preise ohne verstecktes Kleingedrucktes. Alle
              Reinigungsmittel und Geräte sind immer im Preis enthalten —
              Sie zahlen genau das, was wir vereinbaren.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Keine versteckten Kosten
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Alle Mittel & Geräte inkl.
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Individuelles Angebot kostenlos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICE OVERVIEW ─── */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Preisübersicht
            </h2>
            <p className="mt-4 text-warm-500 max-w-2xl mx-auto">
              Richtwerte für unsere Reinigungsservices in Hannover. Der genaue
              Preis wird individuell nach Fläche, Zustand und Ihren Anforderungen
              berechnet.
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.name}
                  className="p-6 bg-white border-warm-200/60 rounded-sm"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8">
                    {/* Service name */}
                    <div className="flex items-center gap-3 lg:w-64 shrink-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/10">
                        <Icon className="h-5 w-5 text-gold-dark" />
                      </div>
                      <Link
                        href={service.href}
                        className="font-semibold text-navy hover:text-gold-dark transition-colors"
                      >
                        {service.name}
                      </Link>
                    </div>

                    {/* Prices */}
                    <div className="flex flex-wrap gap-x-6 gap-y-1.5 flex-1 pl-0 lg:pl-0">
                      {service.prices.map((price) => (
                        <div key={price.label}>
                          <span className="text-xs text-warm-400 block lg:inline lg:mr-1.5">
                            {price.label}
                          </span>
                          <span className="font-semibold text-navy text-sm">
                            {price.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Note */}
                    <div className="text-xs text-warm-400 lg:w-64 lg:text-right shrink-0 border-t border-warm-100 pt-2 lg:border-0 lg:pt-0">
                      {service.note}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="gold-line mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Wie entsteht Ihr Angebot?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 font-bold text-gold-dark mb-4">
                1
              </div>
              <h3 className="font-semibold text-navy text-lg">Anfrage</h3>
              <p className="mt-2 text-sm text-warm-500 leading-relaxed">
                Beschreiben Sie kurz Ihren Bedarf — per Formular, Telefon oder
                E-Mail. Wir melden uns innerhalb von 24 Stunden.
              </p>
            </div>
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 font-bold text-gold-dark mb-4">
                2
              </div>
              <h3 className="font-semibold text-navy text-lg">Beratung</h3>
              <p className="mt-2 text-sm text-warm-500 leading-relaxed">
                Wir besprechen Ihre Anforderungen — telefonisch oder bei einer
                kurzen Besichtigung vor Ort. Kostenlos und unverbindlich.
              </p>
            </div>
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 font-bold text-gold-dark mb-4">
                3
              </div>
              <h3 className="font-semibold text-navy text-lg">Festpreis</h3>
              <p className="mt-2 text-sm text-warm-500 leading-relaxed">
                Sie erhalten ein transparentes Angebot mit festem Preis. Keine
                Überraschungen — alle Mittel und Geräte sind immer inklusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Kostenloses Angebot in 24 Stunden
          </h2>
          <p className="mt-3 text-warm-400">
            Beschreiben Sie Ihren Bedarf — wir erstellen Ihr individuelles Angebot.
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
