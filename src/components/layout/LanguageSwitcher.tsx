"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label={lang === "fr" ? "Sélection de langue" : "Language selection"}
      className="inline-flex items-center p-0.5 rounded-full bg-stone-200/80 border border-stone-300/80 text-xs font-medium"
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={`px-2.5 py-1 rounded-full transition-all duration-150 cursor-pointer ${
          lang === "fr"
            ? "bg-navy-900 text-stone-50 font-semibold shadow-xs"
            : "text-stone-600 hover:text-navy-900"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 rounded-full transition-all duration-150 cursor-pointer ${
          lang === "en"
            ? "bg-navy-900 text-stone-50 font-semibold shadow-xs"
            : "text-stone-600 hover:text-navy-900"
        }`}
      >
        EN
      </button>
    </div>
  );
}
