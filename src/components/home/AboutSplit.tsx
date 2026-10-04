"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSplit() {
  const { t } = useLanguage();

  return (
    <section className="bg-stone-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative h-[340px] sm:h-[460px] lg:h-[580px] w-full rounded-lg overflow-hidden shadow-xs">
            <Image
              src="/images/portrait-primary.jpg"
              alt="Me Arnaud Cheynut"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-gold-500 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3 sm:mb-4 block">
              {t.aboutSplit.badge}
            </span>
            <h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mb-4 sm:mb-6">
              {t.aboutSplit.heading}
            </h2>
            <p className="text-stone-600 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
              {t.aboutSplit.paragraph}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 text-navy-900 font-semibold text-xs sm:text-sm">
              <div className="border-l-2 border-gold-500 pl-3 sm:pl-4">
                {t.aboutSplit.stat1}
              </div>
              <div className="border-l-2 border-gold-500 pl-3 sm:pl-4">
                {t.aboutSplit.stat2}
              </div>
              <div className="border-l-2 border-gold-500 pl-3 sm:pl-4">
                {t.aboutSplit.stat3}
              </div>
            </div>
            <Link
              href="/a-propos"
              className="inline-flex items-center text-navy-900 font-semibold text-sm sm:text-base hover:text-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {t.aboutSplit.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
