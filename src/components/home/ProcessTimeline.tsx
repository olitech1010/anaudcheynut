"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ProcessTimeline() {
  const { t } = useLanguage();

  const steps = t.process.steps.map((step) => ({
    ...step,
    isFilled: step.num === 5,
  }));

  return (
    <section className="bg-[#F8F6F0] py-16 sm:py-24 lg:py-32 border-b border-stone-200" id="methodologie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading, intro, CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-normal text-navy-900 leading-[1.15] tracking-tight mb-6 sm:mb-8">
              {t.process.headingLine1}
              <br />
              {t.process.headingLine2}
              <br />
              {t.process.headingLine3}
              <br />
              {t.process.headingLine4}
            </h2>

            <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md font-montserrat">
              {t.process.sub}
            </p>

            <div className="space-y-3 sm:space-y-4">
              <Link
                href="/contact"
                className="inline-block bg-navy-900 hover:bg-navy-800 text-white font-montserrat text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 shadow-sm"
              >
                {t.process.cta}
              </Link>
              <p className="text-stone-500 text-xs sm:text-sm font-montserrat">
                {t.process.urgency}
              </p>
            </div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div className="lg:col-span-7 lg:pl-6 xl:pl-8">
            <div className="relative">
              {/* Continuous vertical line running through circle centers */}
              <div
                className="absolute left-[23px] sm:left-[27px] top-[24px] bottom-[24px] w-[1.5px] bg-[#C8A850] -z-0"
                aria-hidden="true"
              />

              <div className="space-y-8 sm:space-y-12 relative z-10">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-4 sm:gap-6 lg:gap-8 group">
                    {/* Circle badge */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-serif text-lg sm:text-xl lg:text-2xl transition-transform duration-200 group-hover:scale-105 ${
                        step.isFilled
                          ? "bg-[#B89745] text-white shadow-xs"
                          : "bg-[#F8F6F0] text-navy-900 border-[1.5px] border-[#C8A850]"
                      }`}
                      aria-label={`Étape ${step.num}`}
                    >
                      {step.num}
                    </div>

                    {/* Step Content */}
                    <div className="pt-1.5 sm:pt-2.5">
                      <h3 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold text-navy-900 leading-snug mb-1.5 sm:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-stone-600 text-xs sm:text-sm lg:text-base leading-relaxed font-montserrat max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
