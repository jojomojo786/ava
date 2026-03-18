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
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function KontaktPage() {
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
              Kontakt
              <br />
              <span className="text-gold">aufnehmen</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Beschreiben Sie Ihren Bedarf — wir erstellen Ihnen innerhalb von
              24 Stunden ein individuelles, kostenloses Angebot.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Antwort in 24h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Kostenlos & unverbindlich
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Persönliche Beratung
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORM + SIDEBAR ─── */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="gold-line mb-4" />
                <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight">
                  Kostenloses Angebot anfordern
                </h2>
                <p className="mt-2 text-warm-500 text-sm">
                  Füllen Sie das Formular aus — wir melden uns persönlich bei Ihnen.
                </p>
              </div>

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
                      <Label htmlFor="name" className="text-sm font-medium text-navy">
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
                      <Label htmlFor="telefon" className="text-sm font-medium text-navy">
                        Telefonnummer (für unseren Rückruf) <span className="text-gold">*</span>
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
                      <Label htmlFor="email" className="text-sm font-medium text-navy">
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
                      <Label htmlFor="service" className="text-sm font-medium text-navy">
                        Art der Reinigung <span className="text-gold">*</span>
                      </Label>
                      <Select name="service" required>
                        <SelectTrigger className="rounded-sm border-warm-200 focus:border-gold focus:ring-gold/20">
                          <SelectValue placeholder="Bitte wählen..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bueroreinigung">Büroreinigung</SelectItem>
                          <SelectItem value="treppenhausreinigung">Treppenhausreinigung</SelectItem>
                          <SelectItem value="haushaltsreinigung">Haushaltsreinigung</SelectItem>
                          <SelectItem value="praxisreinigung">Praxisreinigung</SelectItem>
                          <SelectItem value="unterhaltsreinigung">Unterhaltsreinigung</SelectItem>
                          <SelectItem value="fensterreinigung">Fensterreinigung</SelectItem>
                          <SelectItem value="grundreinigung">Grundreinigung</SelectItem>
                          <SelectItem value="umzugsreinigung">Umzugsreinigung</SelectItem>
                          <SelectItem value="airbnb">Airbnb & Ferienwohnung</SelectItem>
                          <SelectItem value="sonstiges">Sonstiges</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nachricht" className="text-sm font-medium text-navy">
                      Ihre Nachricht
                    </Label>
                    <Textarea
                      id="nachricht"
                      name="nachricht"
                      rows={5}
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

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.15em] text-warm-400 uppercase mb-5">
                    Direkt erreichen
                  </h3>
                  <div className="space-y-5">
                    <a href="tel:+4917663818441" className="flex items-center gap-3 group">
                      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy/[0.06] group-hover:bg-gold/10 transition-colors">
                        <Phone className="h-5 w-5 text-navy/60 group-hover:text-gold transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-navy">Telefon</div>
                        <div className="text-sm text-warm-500">0176 638 184 41</div>
                      </div>
                    </a>
                    <a href="mailto:info@ava-reinigung.de" className="flex items-center gap-3 group">
                      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy/[0.06] group-hover:bg-gold/10 transition-colors">
                        <Mail className="h-5 w-5 text-navy/60 group-hover:text-gold transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-navy">E-Mail</div>
                        <div className="text-sm text-warm-500">info@ava-reinigung.de</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy/[0.06]">
                        <MapPin className="h-5 w-5 text-navy/60" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-navy">Standort</div>
                        <div className="text-sm text-warm-500">Hannover und Umgebung</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-warm-200" />

                <div>
                  <h3 className="text-xs font-semibold tracking-[0.15em] text-warm-400 uppercase mb-4">
                    Erreichbarkeit
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-warm-400" />
                      <div className="text-sm text-warm-500 flex-1">
                        <div className="flex justify-between">
                          <span>Mo – Fr</span>
                          <span className="font-medium text-navy">8:00 – 18:00 Uhr</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-warm-400" />
                      <div className="text-sm text-warm-500 flex-1">
                        <div className="flex justify-between">
                          <span>Sa</span>
                          <span className="font-medium text-navy">Nach Vereinbarung</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-warm-200" />

                <div className="rounded-sm bg-navy/[0.03] p-5">
                  <p className="text-sm text-warm-500 leading-relaxed">
                    <span className="font-medium text-navy">Schnelle Antwort garantiert.</span>{" "}
                    Wir beantworten jede Anfrage persönlich innerhalb von 24
                    Stunden. Für dringende Anliegen rufen Sie uns direkt an.
                  </p>
                </div>

                <div className="rounded-sm bg-gold/5 border border-gold/20 p-5">
                  <p className="text-sm text-warm-600 leading-relaxed">
                    <span className="font-medium text-navy">Tipp:</span>{" "}
                    Je genauer Sie Ihren Bedarf beschreiben (Fläche, Häufigkeit,
                    besondere Anforderungen), desto schneller können wir Ihnen ein
                    passendes Angebot erstellen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
