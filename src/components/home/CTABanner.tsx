"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/conference-wide.jpg"
        alt="Conference"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-900/85" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
          {t.ctaBanner.heading}
        </h2>
        <p className="text-stone-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
          {t.ctaBanner.sub}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gold-500 text-navy-900 font-semibold rounded-md hover:bg-gold-400 transition-colors text-sm sm:text-base md:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 shadow-md"
        >
          {t.ctaBanner.cta}
        </Link>
      </div>
    </section>
  );
}
