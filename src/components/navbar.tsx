"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  Phone,
  Building2,
  Footprints,
  Home,
  Stethoscope,
  Wrench,
  Sparkles as WindowIcon,
  SprayCan,
  Truck,
  BedDouble,
  Menu,
  X,
} from "lucide-react";

const services = [
  { name: "Büroreinigung", href: "/bueroreinigung-hannover", icon: Building2 },
  { name: "Treppenhausreinigung", href: "/treppenhausreinigung-hannover", icon: Footprints },
  { name: "Haushaltsreinigung", href: "/haushaltsreinigung-hannover", icon: Home },
  { name: "Praxisreinigung", href: "/praxisreinigung-hannover", icon: Stethoscope },
  { name: "Unterhaltsreinigung", href: "/unterhaltsreinigung-hannover", icon: Wrench },
  { name: "Fensterreinigung", href: "/fensterreinigung-hannover", icon: WindowIcon },
  { name: "Grundreinigung", href: "/grundreinigung-hannover", icon: SprayCan },
  { name: "Umzugsreinigung", href: "/umzugsreinigung-hannover", icon: Truck },
  { name: "Airbnb & Ferienwohnung", href: "/airbnb-reinigung-hannover", icon: BedDouble },
];

const darkHeroPages = [
  "/",
  "/bueroreinigung-hannover",
  "/treppenhausreinigung-hannover",
  "/haushaltsreinigung-hannover",
  "/praxisreinigung-hannover",
  "/unterhaltsreinigung-hannover",
  "/fensterreinigung-hannover",
  "/grundreinigung-hannover",
  "/umzugsreinigung-hannover",
  "/airbnb-reinigung-hannover",
  "/preise",
  "/ueber-uns",
  "/kontakt",
];

function MobileMenu({
  visible,
  shown,
  onClose,
}: {
  visible: boolean;
  shown: boolean;
  onClose: () => void;
}) {
  if (!visible) return null;

  return createPortal(
    <>
      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      {/* Slide-over panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[101] w-[280px] sm:w-80 bg-white shadow-2xl lg:hidden overflow-y-auto transition-transform duration-300 ease-out ${
          shown ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 pb-4">
            <div>
              <span className="text-sm font-semibold tracking-wide text-navy uppercase">
                AvA
              </span>
              <span className="block text-[10px] font-medium tracking-[0.2em] text-warm-500 uppercase">
                Facility Service
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-warm-400 hover:text-navy rounded-sm hover:bg-warm-50 transition-colors"
              aria-label="Menü schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <Separator className="bg-warm-200" />
          <div className="flex-1 overflow-y-auto p-5 space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="block py-2.5 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              Startseite
            </Link>
            <div className="py-2">
              <span className="text-[11px] font-semibold tracking-[0.15em] text-warm-400 uppercase">
                Leistungen
              </span>
              <div className="mt-2 space-y-0.5">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={onClose}
                      className="flex items-center gap-3 py-2 text-sm text-warm-600 hover:text-navy transition-colors"
                    >
                      <Icon className="h-4 w-4 text-warm-400" />
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Separator className="bg-warm-100 !my-3" />
            <Link
              href="/preise"
              onClick={onClose}
              className="block py-2.5 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              Preise
            </Link>
            <Link
              href="/ueber-uns"
              onClick={onClose}
              className="block py-2.5 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              Über Uns
            </Link>
            <Link
              href="/kontakt"
              onClick={onClose}
              className="block py-2.5 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              Kontakt
            </Link>
          </div>
          <div className="p-5 pt-4 border-t border-warm-200">
            <a
              href="tel:+4917663818441"
              className="flex items-center gap-2 text-sm text-warm-500 mb-4"
            >
              <Phone className="h-4 w-4" />
              0176 638 184 41
            </a>
            <Button
              asChild
              className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold rounded-sm shadow-none"
            >
              <Link href="/kontakt" onClick={onClose}>
                Kostenloses Angebot anfordern
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isDarkHero = darkHeroPages.includes(pathname);
  const isLight = isDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const openMobileMenu = () => {
    setMobileOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileVisible(true));
    });
  };

  const closeMobileMenu = () => {
    setMobileVisible(false);
    setTimeout(() => setMobileOpen(false), 300);
  };

  const openDropdown = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpen(true);
  };

  const closeDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,168,76,0.15)]"
            : isDarkHero
              ? "bg-transparent"
              : "bg-white shadow-[0_1px_0_0_rgba(201,168,76,0.1)]"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className={`flex h-9 w-9 items-center justify-center rounded-sm font-bold text-sm tracking-tight transition-colors ${
                isLight ? "bg-white/10 text-gold border border-gold/30" : "bg-navy text-gold"
              }`}>
                AvA
              </div>
              <div className="hidden sm:block">
                <span className={`text-sm font-semibold tracking-wide uppercase transition-colors ${
                  isLight ? "text-white" : "text-navy"
                }`}>
                  AvA
                </span>
                <span className={`block text-[10px] font-medium tracking-[0.2em] uppercase -mt-0.5 transition-colors ${
                  isLight ? "text-warm-400" : "text-warm-500"
                }`}>
                  Facility Service
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isLight ? "text-warm-300 hover:text-white" : "text-warm-700 hover:text-navy"
                }`}
              >
                Startseite
              </Link>

              <div
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                  isLight ? "text-warm-300 hover:text-white" : "text-warm-700 hover:text-navy"
                }`}>
                  Leistungen
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 transition-all duration-200 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="h-2" />
                  <div className="w-72 rounded-lg border border-warm-200 bg-white p-2 shadow-xl shadow-navy/5">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-warm-700 hover:bg-warm-50 hover:text-navy transition-colors group"
                        >
                          <Icon className="h-4 w-4 text-warm-400 group-hover:text-gold transition-colors" />
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Link
                href="/preise"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isLight ? "text-warm-300 hover:text-white" : "text-warm-700 hover:text-navy"
                }`}
              >
                Preise
              </Link>
              <Link
                href="/ueber-uns"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isLight ? "text-warm-300 hover:text-white" : "text-warm-700 hover:text-navy"
                }`}
              >
                Über Uns
              </Link>
              <Link
                href="/kontakt"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isLight ? "text-warm-300 hover:text-white" : "text-warm-700 hover:text-navy"
                }`}
              >
                Kontakt
              </Link>
            </div>

            {/* Desktop CTA + Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+4917663818441"
                className={`flex items-center gap-1.5 text-sm transition-colors ${
                  isLight ? "text-warm-400 hover:text-gold" : "text-warm-500 hover:text-navy"
                }`}
              >
                <Phone className="h-3.5 w-3.5" />
                <span>0176 638 184 41</span>
              </a>
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-navy font-semibold tracking-wide text-sm px-5 rounded-sm shadow-none"
              >
                <Link href="/kontakt">Angebot anfordern</Link>
              </Button>
            </div>

            {/* Mobile buttons */}
            <div className="lg:hidden flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold text-xs px-3 rounded-sm shadow-none"
              >
                <Link href="/kontakt">Angebot</Link>
              </Button>
              <button
                onClick={() => mobileOpen ? closeMobileMenu() : openMobileMenu()}
                className={`p-2 transition-colors ${isLight ? "text-white" : "text-navy"}`}
                aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu portaled to document.body */}
      <MobileMenu
        visible={mobileOpen}
        shown={mobileVisible}
        onClose={closeMobileMenu}
      />
    </>
  );
}
