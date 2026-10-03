"use client";

import { useState } from "react";

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<"fr" | "en">("fr");

  const handleToggle = (lang: "fr" | "en") => {
    setCurrentLang(lang);
    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${lang};path=/;max-age=31536000;SameSite=Lax`;
    }
  };

  return (
    <div
      role="group"
      aria-label="Sélection de langue"
      className="inline-flex items-center p-0.5 rounded-full bg-stone-200/80 border border-stone-300/80 text-xs font-medium"
    >
      <button
        type="button"
        onClick={() => handleToggle("fr")}
        aria-pressed={currentLang === "fr"}
        className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
          currentLang === "fr"
            ? "bg-navy-900 text-stone-50 font-semibold shadow-sm"
            : "text-stone-600 hover:text-navy-900"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => handleToggle("en")}
        aria-pressed={currentLang === "en"}
        className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
          currentLang === "en"
            ? "bg-navy-900 text-stone-50 font-semibold shadow-sm"
            : "text-stone-600 hover:text-navy-900"
        }`}
      >
        EN
      </button>
    </div>
  );
}
