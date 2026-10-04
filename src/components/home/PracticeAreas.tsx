"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function PracticeAreas() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 sm:space-y-24">
          {t.practiceAreas.items.map((practice, index) => (
            <div
              key={practice.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative h-[250px] sm:h-[340px] lg:h-[400px] w-full rounded-lg overflow-hidden shadow-xs ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={practice.image}
                  alt={practice.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <h3 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3 sm:mb-4">
                  {practice.title}
                </h3>
                <p className="text-stone-600 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {practice.description}
                </p>
                <Link
                  href={`/expertise/${practice.slug}`}
                  className="inline-flex items-center text-navy-900 font-semibold hover:text-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                >
                  {t.practiceAreas.learnMore}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 sm:mt-24 text-center">
          <Link
            href="/expertise"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-navy-900 text-navy-900 font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-md hover:bg-navy-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            {t.practiceAreas.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
