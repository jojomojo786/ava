import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const services = [
  { name: "Büroreinigung", href: "/bueroreinigung-hannover" },
  { name: "Treppenhausreinigung", href: "/treppenhausreinigung-hannover" },
  { name: "Haushaltsreinigung", href: "/haushaltsreinigung-hannover" },
  { name: "Praxisreinigung", href: "/praxisreinigung-hannover" },
  { name: "Unterhaltsreinigung", href: "/unterhaltsreinigung-hannover" },
  { name: "Fensterreinigung", href: "/fensterreinigung-hannover" },
  { name: "Grundreinigung", href: "/grundreinigung-hannover" },
  { name: "Umzugsreinigung", href: "/umzugsreinigung-hannover" },
  { name: "Airbnb & Ferienwohnung", href: "/airbnb-reinigung-hannover" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-warm-300">
      {/* Gold accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Kontakt */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-semibold tracking-wide text-white uppercase">
                Premium
              </span>
              <span className="block text-[10px] font-medium tracking-[0.2em] text-gold uppercase">
                Reinigungsservice
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+49511XXXXXXX"
                className="flex items-center gap-2.5 text-warm-400 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                0511 XXX XXXX
              </a>
              <a
                href="mailto:info@premium-reinigung.de"
                className="flex items-center gap-2.5 text-warm-400 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@premium-reinigung.de
              </a>
              <div className="flex items-start gap-2.5 text-warm-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Hannover
                  <br />
                  und Umgebung
                </span>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-warm-400 uppercase mb-5">
              Leistungen
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-warm-400 hover:text-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-warm-400 uppercase mb-5">
              Unternehmen
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-sm text-warm-400 hover:text-gold transition-colors"
                >
                  Über Uns
                </Link>
              </li>
              <li>
                <Link
                  href="/preise"
                  className="text-sm text-warm-400 hover:text-gold transition-colors"
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-warm-400 hover:text-gold transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-warm-400 uppercase mb-5">
              Rechtliches
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-warm-400 hover:text-gold transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-warm-400 hover:text-gold transition-colors"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-warm-500">
          <span>&copy; {new Date().getFullYear()} Premium Reinigungsservice Hannover</span>
          <span>Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  );
}
