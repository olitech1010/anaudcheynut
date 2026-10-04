import Link from "next/link";
import { PhoneCall, ShieldAlert } from "lucide-react";

export function EmergencyBanner() {
  return (
    <aside
      aria-label="Permanence d'urgence"
      className="bg-navy-900 border-b border-navy-700 text-stone-100 text-xs sm:text-sm py-2 px-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-gold-500 flex-shrink-0" aria-hidden="true" />
          <span className="font-medium text-stone-200">
            Permanence Pénale &amp; Référés d&apos;Urgence en Principauté de Monaco
          </span>
        </div>

        <Link
          href="tel:+33575282381"
          className="inline-flex items-center gap-1.5 font-semibold text-gold-400 hover:text-gold-300 transition-colors tracking-wide underline-offset-4 hover:underline"
        >
          <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Ligne Directe 24/7 : +33 5 75 28 23 81</span>
        </Link>
      </div>
    </aside>
  );
}
