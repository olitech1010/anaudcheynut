"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type Locale, type TranslationDictionary } from "@/lib/i18n/translations";

interface LanguageContextType {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>("fr");

  useEffect(() => {
    // Detect stored locale from cookie or localStorage
    try {
      const match = document.cookie.match(/(?:^|;\s*)NEXT_LOCALE=([^;]*)/);
      const cookieLang = match ? (decodeURIComponent(match[1]) as Locale) : null;
      const stored = (localStorage.getItem("NEXT_LOCALE") as Locale) || cookieLang;

      if (stored === "fr" || stored === "en") {
        setLangState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const setLang = (newLang: Locale) => {
    setLangState(newLang);
    try {
      localStorage.setItem("NEXT_LOCALE", newLang);
      document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=31536000;SameSite=Lax`;
      document.documentElement.lang = newLang;
    } catch {
      // Ignore in restricted environments
    }
  };

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback to default 'fr' if used outside provider
    return {
      lang: "fr",
      setLang: () => {},
      t: translations.fr,
    };
  }
  return context;
}
