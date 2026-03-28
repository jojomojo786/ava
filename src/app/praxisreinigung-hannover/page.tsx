import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  ShieldCheck,
  Clock,
  UserCheck,
  Armchair,
  ShowerHead,
  Sparkles,
  ClipboardCheck,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Praxisreinigung Hannover | AvA Facility Service",
  description:
    "Hygienische Praxisreinigung in Hannover — nach RKI-Richtlinien mit Desinfektion aller Kontaktflächen. Geschultes Personal, festes Reinigungsteam, außerhalb Ihrer Sprechzeiten. Jetzt Angebot anfordern.",
};

const scopeItems = [
  {
    icon: Stethoscope,
    title: "Behandlungszimmer",
    desc: "Desinfektion aller Oberflächen, Kontaktflächen und medizinischen Geräte-Umgebungen",
  },
  {
    icon: Armchair,
    title: "Empfang & Wartezimmer",
    desc: "Saubere, einladende Wartebereiche — der erste Eindruck für Ihre Patienten",
  },
  {
    icon: ShowerHead,
    title: "Sanitärbereiche",
    desc: "Hygienische Reinigung und Desinfektion aller sanitären Einrichtungen",
  },
  {
    icon: Sparkles,
    title: "Böden & Kontaktflächen",
    desc: "Fachgerechte Bodenreinigung und Desinfektion von Türklinken, Lichtschaltern, Handläufen",
  },
];

const usps = [
  {
    icon: ShieldCheck,
    title: "RKI-konforme Hygiene",
    desc: "Reinigung und Desinfektion nach den Richtlinien des Robert Koch-Instituts. Spezielle Desinfektionsmittel für medizinische Umgebungen.",
  },
  {
    icon: UserCheck,
    title: "Festes Reinigungsteam",
    desc: "Immer dasselbe geschulte Team für Ihre Praxis — Vertrauen und Routine, die Ihr Praxisalltag braucht.",
  },
  {
    icon: Clock,
    title: "Außerhalb der Sprechzeiten",
    desc: "Wir reinigen vor Praxisbeginn, nach Feierabend oder am Wochenende. Kein Patient bemerkt unsere Arbeit.",
  },
  {
    icon: ClipboardCheck,
    title: "Geschultes Fachpersonal",
    desc: "Unser Team ist speziell für medizinische Umgebungen geschult — Hygienevorschriften, Datenschutz und Diskretion inklusive.",
  },
];

const faqs = [
  {
    q: "Reinigen Sie nach RKI-Richtlinien?",
    a: "Ja. Unsere Praxisreinigung folgt den Hygiene-Empfehlungen des Robert Koch-Instituts. Wir verwenden zugelassene Desinfektionsmittel und dokumentieren unsere Arbeit auf Wunsch für Ihre Hygieneakte.",
  },
  {
    q: "Kommt immer dasselbe Team?",
    a: "Ja, das ist bei der Praxisreinigung besonders wichtig. Ihr Reinigungsteam kennt die Abläufe, die sensiblen Bereiche und Ihre individuellen Anforderungen. Nur bei Urlaub oder Krankheit stellen wir eine eingearbeitete Vertretung.",
  },
  {
    q: "Wann wird gereinigt?",
    a: "Ausschließlich außerhalb Ihrer Sprechzeiten — früh morgens, abends oder am Wochenende. Der Praxisbetrieb wird nicht gestört, und Patientenkontakt wird vermieden.",
  },
  {
    q: "Für welche Praxistypen bieten Sie Reinigung an?",
    a: "Für alle medizinischen Einrichtungen: Arztpraxen, Zahnarztpraxen, Physiotherapie-Praxen, Heilpraktiker, Psychotherapie-Praxen und Tierarztpraxen in Hannover und Umgebung.",
  },
];

export default function PraxisreinigungPage() {
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
              Praxisreinigung
              <br />
              <span className="text-gold">in Hannover</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-warm-300 leading-relaxed max-w-2xl">
              Hygienische Reinigung und Desinfektion für Ihre Praxis — nach
              RKI-Richtlinien, mit geschultem Fachpersonal und außerhalb Ihrer
              Sprechzeiten. Damit Ihre Patienten sich sicher fühlen.
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
                RKI-konforme Reinigung
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Festes Reinigungsteam
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                Außerhalb der Sprechzeiten
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
              Unsere Leistungen für Ihre Praxis
            </h2>
            <p className="mt-4 text-warm-500 leading-relaxed">
              Alle Bereiche Ihrer Praxis — von der Behandlung bis zum Empfang —
              hygienisch gereinigt und desinfiziert.
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
              Warum unsere Praxisreinigung?
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

      {/* ─── TRUST BAND ─── */}
      <section className="py-20 lg:py-28 bg-navy grain-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Hygiene, der Sie vertrauen können
            </h2>
            <p className="mt-6 text-lg text-warm-300 leading-relaxed">
              Wir wissen, dass in medizinischen Einrichtungen die höchsten
              Hygieneansprüche gelten. Deshalb setzen wir auf zertifizierte
              Desinfektionsmittel, geschultes Personal und dokumentierte
              Reinigungsprozesse — damit Sie sich voll und ganz auf Ihre Patienten
              konzentrieren können.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6 rounded-sm shadow-lg shadow-gold/20"
            >
              <Link href="/kontakt">
                Kostenloses Angebot anfordern
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
            Saubere Praxis — sichere Patienten
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
