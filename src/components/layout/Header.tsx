"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Domaines d'Expertise", href: "/expertise" },
    { name: "Le Cabinet", href: "/a-propos" },
    { name: "Honoraires", href: "/honoraires" },
    { name: "Actualités", href: "/actualites" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link href="/" className="flex flex-col group py-1">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-navy-900 group-hover:text-navy-700 transition-colors">
              Me Arnaud Cheynut
            </span>
            <span className="text-xs uppercase tracking-widest text-stone-500 font-medium">
              Avocat-Défenseur près la Cour d&apos;Appel de Monaco
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-stone-700 hover:text-navy-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions: Phone + Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />

            <Link
              href="tel:+37797980680"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-navy-900 px-3 py-2 rounded-md hover:bg-stone-200/50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" aria-hidden="true" />
              <span>+377 97 98 06 80</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-stone-50 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-md shadow-sm active:scale-[0.98] transition-all"
            >
              <span>Prendre Rendez-vous</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-700 hover:text-navy-900 hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-stone-50 px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <Link
              href="tel:+37797980680"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-navy-900 py-2.5 rounded-md border border-stone-300"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span>Appeler le Cabinet : +377 97 98 06 80</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-navy-900 text-stone-50 font-semibold text-sm py-3 rounded-md shadow-sm"
            >
              <span>Prendre Rendez-vous</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
