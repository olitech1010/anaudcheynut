"use client";

import { useState } from "react";
import { ARTICLE_CATEGORIES, type Article } from "@/lib/data/articles";
import { ArticleCard } from "./ArticleCard";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  initialArticles: Article[];
}

export function CategoryFilter({ initialArticles }: Props) {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArticles =
    selectedCategory === "all"
      ? initialArticles
      : initialArticles.filter((a) => a.categorySlug === selectedCategory);

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Filter Buttons */}
      <div 
        role="group" 
        aria-label={lang === "en" ? "Filter articles by category" : "Filtrer les actualités par catégorie"} 
        className="flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          aria-pressed={selectedCategory === "all"}
          className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer ${
            selectedCategory === "all"
              ? "bg-navy-900 text-stone-50 shadow-xs"
              : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
          }`}
        >
          {t.actualitesPage.allArticles}
        </button>

        {ARTICLE_CATEGORIES.map((cat) => {
          const catName = lang === "en" ? cat.nameEn || cat.name : cat.name;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              aria-pressed={selectedCategory === cat.slug}
              className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer ${
                selectedCategory === cat.slug
                  ? "bg-navy-900 text-stone-50 shadow-xs"
                  : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
              }`}
            >
              {catName}
            </button>
          );
        })}
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
