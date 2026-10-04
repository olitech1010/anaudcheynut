"use client";

import Link from "next/link";
import { PhoneCall, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function EmergencyBanner() {
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Permanence d'urgence"
      className="bg-navy-900 border-b border-navy-700 text-stone-100 text-xs sm:text-sm py-2 px-3 sm:px-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-500 flex-shrink-0" aria-hidden="true" />
          <span className="font-medium text-stone-200 text-[11px] sm:text-xs md:text-sm">
            {t.emergency.badge}
          </span>
        </div>

        <Link
          href="tel:+33575282381"
          className="inline-flex items-center gap-1.5 font-semibold text-gold-400 hover:text-gold-300 transition-colors tracking-wide underline-offset-4 hover:underline text-[11px] sm:text-xs md:text-sm py-0.5"
        >
          <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" aria-hidden="true" />
          <span>{t.emergency.phone}</span>
        </Link>
      </div>
    </aside>
  );
}
