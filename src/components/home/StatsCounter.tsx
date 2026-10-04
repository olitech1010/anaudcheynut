"use client";

import { useLanguage } from "@/context/LanguageContext";

export function StatsCounter() {
  const { t } = useLanguage();

  const stats = [
    { value: "98 %", label: t.stats.satisfaction },
    { value: "500+", label: t.stats.cases },
    { value: "15+", label: t.stats.experience },
    { value: "24/7", label: t.stats.emergency },
  ];

  return (
    <section className="bg-navy-900 border-y border-gold-500/20 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group flex flex-col items-center"
            >
              <div className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-500 tracking-tight mb-2 transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-stone-300 max-w-[170px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
