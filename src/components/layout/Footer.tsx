"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-stone-300 border-t border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Identity & Bar Accreditation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-stone-100">
              <Image
                src="/images/logo-horizontal-white.png"
                alt="Cabinet Me Arnaud Cheynut - Avocat-Défenseur Monaco"
                width={220}
                height={46}
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold mt-4">
              {t.footer.role}
            </p>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {t.footer.accreditation}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
              <span>{t.footer.secrecy}</span>
            </div>
          </div>

          {/* Column 2: Domaines d'Expertise */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-sm sm:text-base text-stone-100 border-b border-navy-700 pb-2">
              {t.footer.expertiseTitle}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {t.nav.expertiseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-gold-400 transition-colors block py-0.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Coordonnées */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-sm sm:text-base text-stone-100 border-b border-navy-700 pb-2">
              {t.footer.officeTitle}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>
                  {t.footer.addressLine1}
                  <br />
                  {t.footer.addressLine2}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" aria-hidden="true" />
                <Link
                  href="tel:+33575282381"
                  className="hover:text-gold-400 transition-colors font-medium text-stone-200"
                >
                  +33 5 75 28 23 81
                </Link>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <div className="flex flex-col space-y-0.5">
                  <Link
                    href="mailto:contact@arnaudcheynut.com"
                    className="hover:text-gold-400 transition-colors text-stone-200"
                  >
                    contact@arnaudcheynut.com
                  </Link>
                  <Link
                    href="mailto:arnaud@arnaudcheynut.com"
                    className="hover:text-gold-400 transition-colors text-stone-300"
                  >
                    arnaud@arnaudcheynut.com
                  </Link>
                </div>
              </div>
              <div className="pt-2 text-[11px] sm:text-xs text-stone-400 border-t border-navy-800">
                <p className="font-medium text-stone-300">{t.footer.hoursTitle}</p>
                <p>{t.footer.hoursWeekdays}</p>
                <p className="text-gold-400 mt-1">{t.footer.hoursUrgency}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Déontologie & Informations Légales */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-sm sm:text-base text-stone-100 border-b border-navy-700 pb-2">
              {t.footer.ethicsTitle}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.footer.ethicsText}
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-block text-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-4 py-2.5 rounded-md transition-colors shadow-xs"
              >
                {t.footer.contactButton}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 text-center sm:text-left">
          <p>© {currentYear} Cabinet Me Arnaud Cheynut. {t.footer.copyright}</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Link href="/mentions-legales" className="hover:text-stone-300 transition-colors py-1">
              {t.footer.legalNotice}
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-stone-300 transition-colors py-1">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/plan-du-site" className="hover:text-stone-300 transition-colors py-1">
              {t.footer.sitemap}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
