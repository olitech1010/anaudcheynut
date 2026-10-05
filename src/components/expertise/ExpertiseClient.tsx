"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export function ExpertiseClient() {
  const { t } = useLanguage();

  return (
    <main className="bg-white pb-16 sm:pb-24">
      <PageHeader
        title={t.expertisePage.title}
        subtitle={t.expertisePage.subtitle}
        backgroundImage="/images/headers/default.jpg"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: t.expertisePage.breadcrumb, href: "/expertise" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 space-y-16 sm:space-y-24">
        {t.expertisePage.practices.map((practice, index) => (
          <div
            key={practice.slug}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`relative h-[250px] sm:h-[340px] lg:h-[400px] w-full rounded-xl overflow-hidden shadow-xs ${
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
              <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-navy-900 mb-4 sm:mb-6">
                {practice.title}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                {practice.desc}
              </p>
              <Link
                href={`/expertise/${practice.slug}`}
                className="inline-flex items-center text-sm sm:text-base text-navy-900 font-semibold hover:text-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                {t.expertisePage.learnMore}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
