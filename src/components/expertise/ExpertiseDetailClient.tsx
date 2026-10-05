"use client";

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { type PracticeArea } from "@/lib/data/practice-areas";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";

interface Props {
  practice: PracticeArea;
}

export function ExpertiseDetailClient({ practice }: Props) {
  const { lang, t } = useLanguage();

  const title = lang === "en" ? practice.titleEn || practice.title : practice.title;
  const description = lang === "en" ? practice.descriptionEn || practice.description : practice.description;

  return (
    <div className="py-10 sm:py-16 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 sm:mb-12">
          <PageHeader
            title={title}
            backgroundImage={`/images/headers/${practice.slug}.jpg`}
            breadcrumbs={[
              { label: "Accueil", href: "/" },
              { label: t.expertiseDetail.breadcrumbExpertise, href: "/expertise" },
              { label: title, href: `/expertise/${practice.slug}` },
            ]}
          />
        </div>

        {/* Two-column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            {/* Overview Section */}
            <section className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl font-bold text-navy-900">
                {t.expertiseDetail.frameworkTitle}
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {description}
              </p>
            </section>

            {/* Key Interventions */}
            <section className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl font-bold text-navy-900">
                {t.expertiseDetail.interventionsTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {practice.keyInterventions.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3.5 rounded-lg bg-stone-50 border border-stone-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-stone-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Procedural Timeline */}
            <section className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6 sm:space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                  {lang === "en" ? "Key Stages" : "Étapes Clés"}
                </span>
                <h2 className="font-montserrat font-bold text-xl sm:text-2xl font-bold text-navy-900 mt-1">
                  {t.expertiseDetail.methodologyTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {lang === "en"
                    ? "Each case follows a rigorous legal progression adapted to the specific court or jurisdiction."
                    : "Chaque dossier fait l'objet d'un phasage rigoureux adapté aux spécificités de la juridiction saisie."}
                </p>
              </div>

              <div className="space-y-6">
                {practice.procedureSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 sm:gap-5 items-start">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gold-500/20 text-navy-900 font-bold flex items-center justify-center text-xs sm:text-sm border border-gold-500/40">
                      {step.step}
                    </div>
                    <div className="pt-0.5 space-y-1">
                      <h3 className="font-montserrat font-bold text-base sm:text-lg text-navy-900">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs lg:sticky lg:top-28 space-y-6">
              <h3 className="font-montserrat font-bold text-lg sm:text-xl font-bold text-navy-900">
                {t.expertiseDetail.sidebarTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.expertiseDetail.sidebarText}
              </p>

              <div className="space-y-3 pt-1">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-4 py-3 rounded-md text-xs sm:text-sm shadow-xs transition-colors text-center"
                >
                  <span>{t.expertiseDetail.sidebarCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="tel:+33575282381"
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-navy-900 font-medium px-4 py-2.5 rounded-md text-xs transition-colors text-center border border-stone-300"
                >
                  <Phone className="w-3.5 h-3.5 text-navy-900" />
                  <span>+33 5 75 28 23 81</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Secret professionnel (Art. 308 CP)</span>
                </div>
                <p>Cabinet situé au 9 rue du Gabian, Fontvieille, Monaco.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
