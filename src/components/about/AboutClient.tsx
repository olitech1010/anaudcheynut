"use client";

import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

export function AboutClient() {
  const { t } = useLanguage();

  return (
    <main className="bg-stone-50 pb-16 sm:pb-24">
      <PageHeader
        title={t.aboutPage.title}
        subtitle={t.aboutPage.subtitle}
        backgroundImage="/images/headers/about.jpg"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: t.aboutPage.breadcrumb, href: "/a-propos" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          <div className="relative h-[340px] sm:h-[460px] lg:h-[580px] w-full rounded-xl overflow-hidden shadow-xs">
            <Image
              src="/images/portrait-primary.jpg"
              alt="Me Arnaud Cheynut"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-navy-900 mb-4 sm:mb-6">
              {t.aboutPage.bioTitle}
            </h2>
            <p className="text-stone-600 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
              {t.aboutPage.bioP1}
            </p>
            <p className="text-stone-600 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
              {t.aboutPage.bioP2}
            </p>
          </div>
        </div>

        {/* Recognitions */}
        <div className="mb-16 sm:mb-24">
          <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-navy-900 mb-8 sm:mb-10 text-center">
            {t.aboutPage.awardsTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
            <Image src="/images/awards/chambers-hnw-2026.jpg" alt="Chambers HNW" width={140} height={70} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/legal500-leading.webp" alt="Legal 500" width={140} height={70} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/legal500-nextgen.webp" alt="Legal 500 Nextgen" width={140} height={70} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/leaders-league-ranked.jpg" alt="Leaders League" width={140} height={70} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/leaders-league-label.jpg" alt="Leaders League Label" width={140} height={70} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/chambers-global.jpg" alt="Chambers Global" width={140} height={70} className="object-contain grayscale hover:grayscale-0 transition" />
          </div>
        </div>

        {/* Environment */}
        <div className="mb-16 sm:mb-24">
          <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-10 text-center">
            {t.aboutPage.environmentTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] w-full rounded-xl overflow-hidden shadow-xs">
              <Image src="/images/office-reception.jpg" alt="Cabinet Me Arnaud Cheynut Reception" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] w-full rounded-xl overflow-hidden shadow-xs">
              <Image src="/images/office-lounge.jpg" alt="Cabinet Me Arnaud Cheynut Lounge" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>

        {/* Conferences */}
        <div>
          <h2 className="font-montserrat text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-10 text-center">
            {t.aboutPage.conferencesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] w-full rounded-xl overflow-hidden shadow-xs">
              <Image src="/images/portrait-speaking.jpg" alt="Intervention Me Arnaud Cheynut" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] w-full rounded-xl overflow-hidden shadow-xs">
              <Image src="/images/conference-panel.jpg" alt="Colloque juridique Monaco" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
