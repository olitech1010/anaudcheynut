import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader
        title="Actualités"
        backgroundImage="/images/headers/blog.jpg"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Actualités", href: "#" }]}
      />

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <CategoryFilter initialArticles={ARTICLES} />
      </section>
    </div>
  );
}
