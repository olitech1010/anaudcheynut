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
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domaines d'Expertise | Cabinet Me Arnaud Cheynut Monaco",
  description:
    "Expertises contentieuses et de conseil : Droit pénal, Droit civil, Droit commercial SAM/SARL, Droit de la famille, Référés d'urgence, Arbitrage, Droit immobilier à Monaco.",
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  FileText,
  Building2,
  Users,
  Clock,
  Handshake,
  Home,
};

export default function ExpertiseIndexPage() {
  return (
    <div className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Compétences Judiciaires
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-900 mt-2 tracking-tight">
            Domaines d&apos;Expertise &amp; Contentieux
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Me Arnaud Cheynut intervient à la fois en qualité de conseil stratégique et d&apos;avocat plaidant devant toutes les juridictions de la Principauté de Monaco. Découvrez le détail de chaque pratique et les étapes de procédure associées.
          </p>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((practice) => {
            const IconComp = ICON_MAP[practice.icon] || Scale;
            return (
              <article
                key={practice.slug}
                className="group relative bg-white rounded-xl border border-stone-200/90 p-8 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  aria-hidden="true"
                />

                <div>
                  <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h2 className="font-serif text-xl font-bold text-navy-900 leading-snug group-hover:text-navy-700 transition-colors">
                    {practice.title}
                  </h2>

                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    {practice.summary}
                  </p>

                  <div className="mt-6 pt-4 border-t border-stone-100 space-y-2">
                    <p className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                      Interventions clés :
                    </p>
                    <ul className="text-xs text-stone-600 space-y-1.5">
                      {practice.keyInterventions.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <span className="text-gold-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    href={`/expertise/${practice.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors tracking-wide uppercase"
                  >
                    <span>Consulter le détail &amp; la procédure</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-navy-900 text-stone-100 rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif text-xl font-bold text-white">
              Une question juridique spécifique à Monaco ?
            </h3>
            <p className="text-sm text-stone-300">
              Le Cabinet évalue immédiatement la faisabilité de votre action et les règles de compétence applicables.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-6 py-3 rounded-md text-sm shadow-sm transition-colors"
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </div>
    </div>
  );
}
