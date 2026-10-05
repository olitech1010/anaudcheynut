"use client";

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import {
  FileText,
  Clock,
  Target,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Handshake,
} from "lucide-react";

export function FeesClient() {
  const { t } = useLanguage();

  const billingCards = [
    {
      icon: FileText,
      title: t.feesPage.fixedFeeTitle,
      description: t.feesPage.fixedFeeDesc,
      advantages: t.feesPage.fixedFeeAdvantages,
    },
    {
      icon: Clock,
      title: t.feesPage.hourlyTitle,
      description: t.feesPage.hourlyDesc,
      advantages: t.feesPage.hourlyAdvantages,
    },
    {
      icon: Target,
      title: t.feesPage.successTitle,
      description: t.feesPage.successDesc,
      advantages: t.feesPage.successAdvantages,
    },
  ];

  return (
    <div className="bg-stone-50 pb-16 sm:pb-24">
      {/* Header */}
      <PageHeader
        title={t.feesPage.title}
        subtitle={t.feesPage.subtitle}
        backgroundImage="/images/headers/honoraires.jpg"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: t.feesPage.breadcrumb, href: "/honoraires" },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Convention d'honoraires explanation */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-10 shadow-xs mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-gold-400" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                {t.feesPage.conventionTitle}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
                {t.feesPage.conventionText}
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                {t.feesPage.conventionBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Billing Models */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
              {t.feesPage.modelsTitle}
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              {t.feesPage.modelsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {billingCards.map((model, index) => {
              const IconComp = model.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-gold-500/10 text-gold-600 flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-montserrat font-bold text-lg sm:text-xl font-bold text-navy-900 mb-3">
                      {model.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                      {model.description}
                    </p>
                  </div>

                  <div className="border-t border-stone-100 pt-4 mt-auto">
                    <p className="text-xs uppercase tracking-wider font-semibold text-navy-900 mb-3">
                      {t.feesPage.advantagesTitle}
                    </p>
                    <ul className="space-y-2 text-xs text-stone-600">
                      {model.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ethical Framework */}
        <div className="bg-navy-900 text-stone-100 rounded-xl p-6 sm:p-10 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-500/20 flex items-center justify-center">
              <Handshake className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-xl sm:text-2xl font-bold text-white mb-3">
                {t.feesPage.rulesTitle}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed">
                {t.feesPage.rulesText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-xl border border-stone-200 p-8 sm:p-12 shadow-xs">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl font-bold text-navy-900 mb-3">
            {t.feesPage.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mb-6">
            {t.feesPage.ctaText}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-stone-50 font-semibold px-6 sm:px-8 py-3.5 rounded-md text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-colors"
          >
            <span>{t.feesPage.ctaBtn}</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}
