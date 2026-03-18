"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Building2,
  Footprints,
  Home,
  Stethoscope,
  Wrench,
  Sparkles as WindowIcon,
  SprayCan,
  Truck,
  BedDouble,
  Clock,
  CheckCircle2,
  CalendarCheck,
  BadgeEuro,
  Phone,
  Mail,
  MapPin,
  Shield,
} from "lucide-react";

const services = [
  {
    name: "Büroreinigung",
    desc: "Saubere Büros für ein produktives Arbeitsumfeld",
    href: "/bueroreinigung-hannover",
    icon: Building2,
  },
  {
    name: "Treppenhausreinigung",
    desc: "Gepflegte Treppenhäuser für zufriedene Mieter",
    href: "/treppenhausreinigung-hannover",
    icon: Footprints,
  },
  {
    name: "Haushaltsreinigung",
    desc: "Mehr Zeit für die schönen Dinge im Leben",
    href: "/haushaltsreinigung-hannover",
    icon: Home,
  },
  {
    name: "Praxisreinigung",
    desc: "Hygienische Reinigung nach höchsten Standards",
    href: "/praxisreinigung-hannover",
    icon: Stethoscope,
  },
  {
    name: "Unterhaltsreinigung",
    desc: "Regelmäßige Pflege für Ihre Immobilie",
    href: "/unterhaltsreinigung-hannover",
    icon: Wrench,
  },
  {
    name: "Fensterreinigung",
    desc: "Streifenfrei saubere Fenster — garantiert",
    href: "/fensterreinigung-hannover",
    icon: WindowIcon,
  },
  {
    name: "Grundreinigung",
    desc: "Intensive Tiefenreinigung, fasertief gründlich",
    href: "/grundreinigung-hannover",
    icon: SprayCan,
  },
  {
    name: "Umzugsreinigung",
    desc: "Mit Abnahmegarantie für Ihre Wohnungsübergabe",
    href: "/umzugsreinigung-hannover",
    icon: Truck,
  },
  {
    name: "Airbnb & Ferienwohnung",
    desc: "Schneller Turnover für 5-Sterne-Bewertungen",
    href: "/airbnb-reinigung-hannover",
    icon: BedDouble,
  },
];

const usps = [
  {
    icon: Clock,
    title: "Zuverlässig und pünktlich",
    text: "Wir erscheinen pünktlich — garantiert. Ihre Zeit ist uns wichtig.",
  },
  {
    icon: CheckCircle2,
    title: "Gründlich und sorgfältig",
    text: "Wir arbeiten mit einem Auge fürs Detail und individuellen Checklisten.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Termine",
    text: "Wunschtermin, kurzfristig, ohne Vertragsbindung — wann es Ihnen passt.",
  },
  {
    icon: BadgeEuro,
    title: "Faire und transparente Preise",
    text: "Keine versteckten Kosten. Alle Reinigungsmittel und Geräte im Preis enthalten.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy-dark/50 to-transparent" />
        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(201,168,76,0.3) 60px, rgba(201,168,76,0.3) 61px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Gold accent line */}
            <div className="gold-line mb-8 animate-fade-in-up" />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] animate-fade-in-up stagger-1">
              <span className="text-gold">AvA</span>
              <br />
              Reinigungsservice
              <br />
              in Hannover
            </h1>

            <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl animate-fade-in-up stagger-2">
              Zuverlässige und gründliche Reinigung für Privat- und
              Geschäftskunden. Wir sorgen für Sauberkeit, auf die Sie sich
              verlassen können — flexibel, pünktlich und mit höchstem Anspruch an
              Qualität.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up stagger-3">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base px-8 py-6 rounded-sm shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30"
              >
                <a href="#kontakt">
                  Jetzt kostenloses Angebot anfordern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 bg-white text-navy hover:bg-warm-100 px-6 py-3 rounded-sm text-sm font-medium transition-colors"
              >
                Unsere Leistungen entdecken
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex items-center gap-6 text-sm text-warm-400 animate-fade-in-up stagger-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold/70" />
                <span>Versichert</span>
              </div>
              <div className="h-4 w-px bg-warm-600" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold/70" />
                <span>Kostenlose Beratung</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-warm-600" />
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold/70" />
                <span>Antwort in 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section id="leistungen" className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Unsere Reinigungsservices
            </h2>
            <p className="mt-4 text-warm-500 max-w-2xl mx-auto">
              Von der regelmäßigen Büroreinigung bis zur einmaligen Grundreinigung
              — wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href} className="group">
                  <Card className="h-full p-6 bg-white border-warm-200/60 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 rounded-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy/[0.06] group-hover:bg-gold/10 transition-colors">
                        <Icon className="h-5 w-5 text-navy/60 group-hover:text-gold transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-navy group-hover:text-gold-dark transition-colors">
                          {service.name}
                        </h3>
                        <p className="mt-1 text-sm text-warm-500 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-warm-300 group-hover:text-gold shrink-0 mt-1 transition-all group-hover:translate-x-0.5" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── USP SECTION ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Warum AvA Reinigungsservice?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div key={usp.title} className="text-center lg:text-left">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 mb-4">
                    <Icon className="h-5 w-5 text-gold-dark" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg">{usp.title}</h3>
                  <p className="mt-2 text-sm text-warm-500 leading-relaxed">
                    {usp.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ÜBER UNS PREVIEW ─── */}
      <section className="py-20 lg:py-28 bg-navy grain-overlay overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Über Uns
            </h2>
            <p className="mt-6 text-lg text-warm-300 leading-relaxed">
              AvA Reinigungsservice steht für Qualität, Zuverlässigkeit und
              sorgfältige Arbeit. Unser Ziel ist es, unseren Kunden ein sauberes,
              gepflegtes und angenehmes Umfeld zu bieten — damit Sie sich auf das
              Wesentliche konzentrieren können.
            </p>
            <div className="mt-4 text-warm-400 text-sm">
              Für Privat- und Geschäftskunden in Hannover und Umgebung.
            </div>
            <Link
              href="/ueber-uns"
              className="mt-8 inline-flex items-center gap-2 bg-white text-navy hover:bg-warm-100 rounded-sm px-6 py-2.5 text-sm font-medium transition-colors"
            >
              Mehr erfahren
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section id="kontakt" className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              Kostenloses Angebot anfordern
            </h2>
            <p className="mt-4 text-warm-500">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="p-6 sm:p-8 bg-white border-warm-200/60 rounded-sm shadow-sm">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: Supabase form submission
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-navy"
                      >
                        Name <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Ihr vollständiger Name"
                        className="rounded-sm border-warm-200 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="telefon"
                        className="text-sm font-medium text-navy"
                      >
                        Telefonnummer <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        required
                        placeholder="0511 xxxxxxxx"
                        className="rounded-sm border-warm-200 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-navy"
                      >
                        E-Mail <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="ihre@email.de"
                        className="rounded-sm border-warm-200 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-sm font-medium text-navy"
                      >
                        Art der Reinigung <span className="text-gold">*</span>
                      </Label>
                      <Select name="service" required>
                        <SelectTrigger className="rounded-sm border-warm-200 focus:border-gold focus:ring-gold/20">
                          <SelectValue placeholder="Bitte wählen..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bueroreinigung">
                            Büroreinigung
                          </SelectItem>
                          <SelectItem value="treppenhausreinigung">
                            Treppenhausreinigung
                          </SelectItem>
                          <SelectItem value="haushaltsreinigung">
                            Haushaltsreinigung
                          </SelectItem>
                          <SelectItem value="praxisreinigung">
                            Praxisreinigung
                          </SelectItem>
                          <SelectItem value="unterhaltsreinigung">
                            Unterhaltsreinigung
                          </SelectItem>
                          <SelectItem value="fensterreinigung">
                            Fensterreinigung
                          </SelectItem>
                          <SelectItem value="grundreinigung">
                            Grundreinigung
                          </SelectItem>
                          <SelectItem value="umzugsreinigung">
                            Umzugsreinigung
                          </SelectItem>
                          <SelectItem value="airbnb">
                            Airbnb & Ferienwohnung
                          </SelectItem>
                          <SelectItem value="sonstiges">Sonstiges</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="nachricht"
                      className="text-sm font-medium text-navy"
                    >
                      Nachricht
                    </Label>
                    <Textarea
                      id="nachricht"
                      name="nachricht"
                      rows={4}
                      placeholder="Bitte beschreiben Sie kurz Ihre Wünsche: z.B. Größe der Räumlichkeiten, gewünschter Termin, besondere Anforderungen."
                      className="rounded-sm border-warm-200 focus:border-gold focus:ring-gold/20 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="dsgvo"
                      name="dsgvo"
                      required
                      className="mt-1 shrink-0 rounded-sm border-warm-300 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                    />
                    <label
                      htmlFor="dsgvo"
                      className="text-sm text-warm-500 leading-relaxed cursor-pointer"
                    >
                      Ich habe die{" "}
                      <Link
                        href="/datenschutz"
                        className="text-gold-dark underline underline-offset-2 hover:text-gold"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zur
                      Bearbeitung meiner Anfrage zu.{" "}
                      <span className="text-gold">*</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold text-base py-6 rounded-sm shadow-none"
                  >
                    Kostenloses Angebot anfordern
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Details Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.15em] text-warm-400 uppercase mb-4">
                    Direkt erreichen
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+4917663818441"
                      className="flex items-center gap-3 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy/[0.06] group-hover:bg-gold/10 transition-colors">
                        <Phone className="h-4 w-4 text-navy/60 group-hover:text-gold transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-navy">
                          Telefon
                        </div>
                        <div className="text-sm text-warm-500">0176 638 184 41</div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@ava-reinigung.de"
                      className="flex items-center gap-3 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy/[0.06] group-hover:bg-gold/10 transition-colors">
                        <Mail className="h-4 w-4 text-navy/60 group-hover:text-gold transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-navy">
                          E-Mail
                        </div>
                        <div className="text-sm text-warm-500">
                          info@ava-reinigung.de
                        </div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy/[0.06]">
                        <MapPin className="h-4 w-4 text-navy/60" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-navy">
                          Standort
                        </div>
                        <div className="text-sm text-warm-500">
                          Hannover und Umgebung
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-warm-200" />

                <div>
                  <h3 className="text-xs font-semibold tracking-[0.15em] text-warm-400 uppercase mb-4">
                    Erreichbarkeit
                  </h3>
                  <div className="text-sm text-warm-500 space-y-1">
                    <div className="flex justify-between">
                      <span>Mo – Fr</span>
                      <span className="font-medium text-navy">
                        8:00 – 18:00 Uhr
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sa</span>
                      <span className="font-medium text-navy">
                        Nach Vereinbarung
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-warm-200" />

                <div className="rounded-sm bg-navy/[0.03] p-5">
                  <p className="text-sm text-warm-500 leading-relaxed">
                    <span className="font-medium text-navy">
                      Schnelle Antwort garantiert.
                    </span>{" "}
                    Wir beantworten jede Anfrage persönlich innerhalb von 24
                    Stunden. Für dringende Anliegen rufen Sie uns direkt an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Bereit für AvA-Sauberkeit?
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
              <a href="#kontakt">
                Kostenloses Angebot anfordern
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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
