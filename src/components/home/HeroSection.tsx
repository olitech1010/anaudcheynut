import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Scale } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-stone-100 py-20 sm:py-28 lg:py-32">
      {/* Subtle architectural background gradient */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#c8a850_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-800 border border-navy-700 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-6">
            <Scale className="w-3.5 h-3.5 text-gold-500" aria-hidden="true" />
            <span>Barreau de Monaco · Avocat-Défenseur</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
            Rigueur Procédurale &amp; Défense d&apos;Excellence en Principauté
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Le Cabinet de Me Arnaud Cheynut accompagne particuliers fortunés, dirigeants et entreprises internationales devant l&apos;ensemble des juridictions monégasques. Une défense engagée, réactive et strictement confidentielle.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-6 py-3.5 rounded-md shadow-gold hover:shadow-gold-hover text-sm tracking-wide active:scale-[0.98] transition-all"
            >
              <span>Consulter le Cabinet</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <Link
              href="tel:+37797980680"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-navy-800 text-stone-200 hover:text-white border border-stone-600 hover:border-gold-400 font-medium px-5 py-3.5 rounded-md text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" aria-hidden="true" />
              <span>Permanence Urgences : +377 97 98 06 80</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-wrap items-center gap-6 text-xs text-stone-400 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-500" aria-hidden="true" />
              <span>Secret Professionnel (Art. 308 CP)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-500" aria-hidden="true" />
              <span>Cour d&apos;Appel &amp; Tribunal de Monaco</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-500" aria-hidden="true" />
              <span>Langues : Français &amp; Anglais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
