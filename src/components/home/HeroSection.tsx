"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/slider/slide-1.jpg",
    alt: "Me Arnaud Cheynut intervenant lors d'une conférence juridique à Monaco",
    heading: "Votre représentation devant les juridictions de la Principauté",
    sub: "Me Arnaud Cheynut, Avocat-Défenseur inscrit au Tableau de l'Ordre des Avocats de Monaco, assure votre défense et vos intérêts avec rigueur et confidentialité.",
  },
  {
    src: "/images/slider/slide-2.jpg",
    alt: "Intervention lors d'un colloque à l'Institut Monégasque de Formation aux Professions Judiciaires",
    heading: "Excellence juridique au service de vos intérêts",
    sub: "Reconnu par Leaders League et Legal 500, le cabinet déploie une expertise de premier plan en droit pénal, droit des affaires et contentieux civils monégasques.",
  },
  {
    src: "/images/slider/slide-3.jpg",
    alt: "Cabinet Arnaud Cheynut — accueil moderne au cœur du quartier du Gabian, Monaco",
    heading: "Un cabinet à l'image de son engagement",
    sub: "Situé au 9 rue du Gabian, le cabinet allie modernité et rigueur pour offrir un cadre de travail confidentiel et un accueil irréprochable.",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance every 3.8 seconds for dynamic, brisk pacing
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3800);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/50 to-navy-900/20" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="text-gold-500 uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-4 block">
            Cabinet d&apos;Avocat-Défenseur à Monaco
          </span>

          {/* Crossfade text for each slide */}
          <div className="relative min-h-[180px] sm:min-h-[160px]">
            {slides.map((slide, i) => (
              <div
                key={`text-${i}`}
                className={`transition-all duration-500 ease-in-out ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0"
                }`}
              >
                <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
                  {slide.heading}
                </h1>
                <p className="text-stone-200 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                  {slide.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded hover:bg-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Prendre Rendez-vous
            </Link>
            <a
              href="tel:+37797980680"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/80 text-white font-semibold rounded hover:bg-white hover:text-navy-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              +377 97 98 06 80
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-navy-900/40 backdrop-blur-sm border border-white/15 text-white/80 hover:bg-navy-900/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        aria-label="Diapositive précédente"
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
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-navy-900/40 backdrop-blur-sm border border-white/15 text-white/80 hover:bg-navy-900/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        aria-label="Diapositive suivante"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              i === current
                ? "w-8 h-2.5 bg-gold-500"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Aller à la diapositive ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
