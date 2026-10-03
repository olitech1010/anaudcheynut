import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { ARTICLES } from "@/lib/data/articles";
import { CategoryFilter } from "@/components/blog/CategoryFilter";

export const metadata: Metadata = {
  title:
    "Actualités Juridiques Monaco | Cabinet Me Arnaud Cheynut",
  description:
    "Analyses et veille juridique en droit monégasque : jurisprudence, conformité LCB-FT, droit des sociétés, immobilier et résidence en Principauté de Monaco.",
  openGraph: {
    title: "Actualités Juridiques Monaco | Cabinet Me Arnaud Cheynut",
    description:
      "Veille juridique et analyses par Me Arnaud Cheynut, Avocat-Défenseur inscrit à l'Ordre des Avocats de Monaco.",
  },
};

export default function ActualitesPage() {
  return (
    <div className="bg-stone-50">
      {/* Page Header */}
      <section className="bg-navy-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen
              className="w-6 h-6 text-gold-500"
              aria-hidden="true"
            />
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Veille Juridique
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Actualités et Analyses
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Points de droit, évolutions législatives et analyses
            jurisprudentielles en droit monégasque, publiés par le Cabinet
            de Me&nbsp;Arnaud Cheynut.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <CategoryFilter initialArticles={ARTICLES} />
      </section>
    </div>
  );
}
