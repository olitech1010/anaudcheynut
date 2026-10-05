"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { ARTICLES } from "@/lib/data/articles";
import { useLanguage } from "@/context/LanguageContext";

export function ActualitesClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-stone-50 pb-16 sm:pb-24">
      {/* Page Header */}
      <PageHeader
        title={t.actualitesPage.title}
        subtitle={t.actualitesPage.subtitle}
        backgroundImage="/images/headers/blog.jpg"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: t.actualitesPage.breadcrumb, href: "/actualites" },
        ]}
      />

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <CategoryFilter initialArticles={ARTICLES} />
      </section>
    </div>
  );
}
