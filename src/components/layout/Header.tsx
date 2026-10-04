"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link
            href="/"
            className="flex items-center group py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-md flex-shrink-0"
          >
            <Image
              src="/images/logo-horizontal.png"
              alt="Cabinet Me Arnaud Cheynut - Avocat-Défenseur Monaco"
              width={240}
              height={48}
              className="h-9 sm:h-11 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation (large screens >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navigation principale">
            <Link
              href="/"
              className="text-xs xl:text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-xs"
            >
              {t.nav.home}
            </Link>

            {/* Expertise Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-xs xl:text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-xs cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                {t.nav.expertise}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-3">
                  <div className="bg-white rounded-md shadow-lg border border-stone-200 py-2">
                    {t.nav.expertiseLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-xs xl:text-sm text-stone-700 hover:bg-stone-50 hover:text-navy-900 border-l-2 border-transparent hover:border-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
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
              className="text-xs xl:text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-xs"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/honoraires"
              className="text-xs xl:text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-xs"
            >
              {t.nav.fees}
            </Link>
            <Link
              href="/actualites"
              className="text-xs xl:text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-xs"
            >
              {t.nav.news}
            </Link>
            <Link
              href="/contact"
              className="text-xs xl:text-sm font-medium uppercase tracking-wider text-stone-700 hover:text-navy-900 transition-colors font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-xs"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Actions on Desktop: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-stone-50 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-md shadow-xs active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile & Tablet controls (screens < 1024px) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            {/* Compact CTA on tablet / landscape mobile */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-navy-900 hover:bg-navy-800 text-stone-50 text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded-md shadow-xs transition-colors"
            >
              <span>{t.nav.cta}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-700 hover:text-navy-900 hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
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

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-stone-50 px-4 pt-3 pb-6 space-y-3 font-montserrat shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm sm:text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {t.nav.home}
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setMobileExpertiseOpen(!mobileExpertiseOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm sm:text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <span>{t.nav.expertise}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpertiseOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileExpertiseOpen && (
                <div className="pl-4 sm:pl-6 space-y-1 mt-1 border-l-2 border-gold-500/30 ml-3">
                  {t.nav.expertiseLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs sm:text-sm text-stone-600 hover:text-navy-900 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
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
              className="px-3 py-2.5 text-sm sm:text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/honoraires"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm sm:text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {t.nav.fees}
            </Link>
            <Link
              href="/actualites"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm sm:text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {t.nav.news}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm sm:text-base font-medium uppercase tracking-wider text-stone-700 hover:bg-stone-100 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {t.nav.contact}
            </Link>
          </nav>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-stone-50 font-semibold text-sm py-3 rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
