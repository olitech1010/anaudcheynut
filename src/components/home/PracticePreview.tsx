import Link from "next/link";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
import { 
  Scale, 
  FileText, 
  Building2, 
  Users, 
  Clock, 
  Handshake, 
  Home, 
  ArrowRight 
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  FileText,
  Building2,
  Users,
  Clock,
  Handshake,
  Home,
};

export function PracticePreview() {
  return (
    <section className="py-20 sm:py-24 bg-stone-50" aria-labelledby="practices-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Domaines d&apos;Intervention
          </span>
          <h2 id="practices-heading" className="font-serif text-2xl sm:text-4xl font-bold text-navy-900 mt-2 tracking-tight">
            Compétences &amp; Expertises Juridiques à Monaco
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Une pratique contentieuse et de conseil dédiée aux exigences spécifiques des particuliers et entreprises en Principauté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRACTICE_AREAS.map((practice) => {
            const IconComp = ICON_MAP[practice.icon] || Scale;
            return (
              <div
                key={practice.slug}
                className="group relative bg-white rounded-xl border border-stone-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Gold Top Accent Line revealing on hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  aria-hidden="true"
                />

                <div>
                  <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-900 leading-snug group-hover:text-navy-700 transition-colors">
                    {practice.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                    {practice.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    href={`/expertise/${practice.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 group-hover:text-gold-600 transition-colors tracking-wide uppercase"
                  >
                    <span>Explorer la procédure</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
          >
            <span>Consulter l&apos;ensemble de nos domaines d&apos;intervention</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
