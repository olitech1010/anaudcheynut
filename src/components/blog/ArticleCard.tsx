"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Article } from "@/lib/data/articles";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  article: Article;
}

export function ArticleCard({ article }: Props) {
  const { lang } = useLanguage();

  const title = lang === "en" ? article.titleEn || article.title : article.title;
  const excerpt = lang === "en" ? article.excerptEn || article.excerpt : article.excerpt;
  const dateLocale = lang === "en" ? "en-US" : "fr-FR";

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group relative bg-white rounded-xl border border-stone-200/90 p-5 sm:p-8 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div 
        className="absolute top-0 left-0 right-0 h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        aria-hidden="true"
      />

      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-navy-900 text-gold-400 font-semibold uppercase tracking-wider text-[11px]">
            {article.categoryName}
          </span>
          <span className="text-stone-400">·</span>
          <div className="flex items-center gap-1 text-stone-500 text-xs">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {article.readingTimeMinutes} {lang === "en" ? "min read" : "min de lecture"}
            </span>
          </div>
        </div>

        <h3 className="font-montserrat font-bold text-lg sm:text-xl font-bold text-navy-900 leading-snug group-hover:text-navy-700 transition-colors">
          <Link href={`/actualites/${article.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded">
            {title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-stone-600 mt-2.5 sm:mt-3 leading-relaxed">
          {excerpt}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
          <time dateTime={article.publishedAt}>{formattedDate}</time>
        </div>

        <Link
          href={`/actualites/${article.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-navy-900 group-hover:text-gold-600 transition-colors uppercase tracking-wider text-[11px]"
        >
          <span>{lang === "en" ? "Read Analysis" : "Lire l'analyse"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
