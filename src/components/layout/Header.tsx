"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);

  const expertiseLinks = [
    { name: "Droit Pénal & Défense", href: "/expertise/droit-penal" },
    { name: "Droit Civil & Litiges", href: "/expertise/droit-civil" },
    { name: "Droit Commercial & SAM/SARL", href: "/expertise/droit-commercial" },
    { name: "Droit de la Famille & Patrimoine", href: "/expertise/droit-famille" },
    { name: "Référés d'Urgence & Mesures Conservatoires", href: "/expertise/procedures-urgence" },
    { name: "Arbitrage & Résolution de Conflits", href: "/expertise/arbitrage" },
    { name: "Droit Immobilier Monégasque", href: "/expertise/droit-immobilier" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center group py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-md">
            <Image
              src="/images/logo-horizontal.png"
              alt="Cabinet Me Arnaud Cheynut - Avocat-Défenseur Monaco"
              width={240}
              height={48}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
            <Link
              href="/"
              className="text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
            >
              Accueil
            </Link>

            {/* Expertise Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Expertise
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-4">
                  <div className="bg-white rounded-md shadow-lg border border-stone-200 py-2">
                    {expertiseLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50 hover:text-navy-900 border-l-2 border-transparent hover:border-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/a-propos"
              className="text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
            >
              Le Cabinet
            </Link>
            <Link
              href="/honoraires"
              className="text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
            >
              Honoraires
            </Link>
            <Link
              href="/actualites"
              className="text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
            >
              Actualités
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Actions: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-stone-50 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-md shadow-sm active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
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
        <div className="md:hidden border-b border-stone-200 bg-stone-50 px-4 pt-2 pb-6 space-y-3 font-montserrat">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Accueil
            </Link>
            
            <div>
              <button
                type="button"
                onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                Expertise
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpertiseOpen ? "rotate-180" : ""}`} />
              </button>
              
              {mobileExpertiseOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  {expertiseLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-stone-600 hover:text-navy-900 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/a-propos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Le Cabinet
            </Link>
            <Link
              href="/honoraires"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Honoraires
            </Link>
            <Link
              href="/actualites"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Actualités
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-navy-900 text-stone-50 font-semibold text-sm py-3 rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
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
