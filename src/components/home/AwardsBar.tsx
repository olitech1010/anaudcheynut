"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function AwardsBar() {
  const { t } = useLanguage();

  const awards = [
    { src: "/images/awards/chambers-hnw-2026.jpg", alt: "Chambers HNW" },
    { src: "/images/awards/legal500-leading.webp", alt: "Legal 500 Leading" },
    { src: "/images/awards/legal500-nextgen.webp", alt: "Legal 500 Nextgen" },
    { src: "/images/awards/leaders-league-ranked.jpg", alt: "Leaders League Ranked" },
    { src: "/images/awards/leaders-league-label.jpg", alt: "Leaders League Label" },
    { src: "/images/awards/chambers-global.jpg", alt: "Chambers Global" },
  ];

  return (
    <section className="bg-navy-900 py-10 sm:py-12 border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gold-500 text-center uppercase tracking-widest text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
          {t.awards.title}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-14">
          {awards.map((award, index) => (
            <div key={index} className="relative h-12 sm:h-14 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
              <Image
                src={award.src}
                alt={award.alt}
                width={150}
                height={80}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
