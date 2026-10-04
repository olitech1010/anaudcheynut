"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const slideImages = [
  "/images/slider/slide-1.jpg",
  "/images/slider/slide-2.jpg",
  "/images/slider/slide-3.jpg",
];

export function HeroSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = t.hero.slides.map((slide, i) => ({
    ...slide,
    src: slideImages[i] || slideImages[0],
  }));

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance every 4.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4200);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative min-h-[78vh] sm:min-h-[85vh] flex items-center overflow-hidden py-16 sm:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Présentation du Cabinet"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`Diapositive ${i + 1} sur ${slides.length}`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/60 to-navy-900/30" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="text-gold-500 uppercase tracking-[0.2em] text-[11px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4 block">
            {t.hero.badge}
          </span>

          {/* Crossfade text for each slide */}
          <div className="relative min-h-[220px] sm:min-h-[200px] md:min-h-[170px]">
            {slides.map((slide, i) => (
              <div
                key={`text-${i}`}
                className={`transition-all duration-500 ease-in-out ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <h1 className="font-montserrat text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight sm:leading-tight mb-4 sm:mb-6">
                  {slide.heading}
                </h1>
                <p className="text-stone-200 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed">
                  {slide.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-gold-500 text-navy-900 font-semibold text-sm sm:text-base rounded-md hover:bg-gold-400 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 shadow-sm"
            >
              {t.hero.ctaBook}
            </Link>
            <a
              href="tel:+33575282381"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white/80 text-white font-semibold text-sm sm:text-base rounded-md hover:bg-white hover:text-navy-900 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {t.hero.ctaPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows (hidden on small mobile screens to prevent text overlap) */}
      <button
        onClick={prev}
        className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-navy-900/40 backdrop-blur-sm border border-white/15 text-white/80 hover:bg-navy-900/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer"
        aria-label={t.hero.prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-navy-900/40 backdrop-blur-sm border border-white/15 text-white/80 hover:bg-navy-900/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer"
        aria-label={t.hero.nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-3">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer ${
              i === current
                ? "w-8 h-2 sm:h-2.5 bg-gold-500"
                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`${t.hero.goToSlide} ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
