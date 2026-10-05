"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Scale, ArrowRight, ShieldCheck } from "lucide-react";
import type { Article } from "@/lib/data/articles";
import type { PracticeArea } from "@/lib/data/practice-areas";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  article: Article;
  relatedPractice?: PracticeArea;
}

export function ArticleDetailClient({ article, relatedPractice }: Props) {
  const { lang, t } = useLanguage();

  const title = lang === "en" ? article.titleEn || article.title : article.title;
  const excerpt = lang === "en" ? article.excerptEn || article.excerpt : article.excerpt;
  const content = lang === "en" ? article.contentEn || article.content : article.content;
  const dateLocale = lang === "en" ? "en-US" : "fr-FR";

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-stone-50 pb-16 sm:pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav
          className="flex items-center gap-2 text-xs text-stone-500"
          aria-label="Fil d'Ariane"
        >
          <Link href="/" className="hover:text-navy-900 transition-colors">
            {t.nav.home}
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/actualites" className="hover:text-navy-900 transition-colors">
            {t.actualitesPage.breadcrumb}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-navy-900 font-medium truncate max-w-xs">
            {title}
          </span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Main Article Content */}
          <article className="lg:col-span-2">
            {/* Category badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-navy-900 text-gold-400 font-semibold uppercase tracking-wider text-[11px] mb-4 sm:mb-6">
              {article.categoryName}
            </span>

            <h1 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight mb-4 sm:mb-6">
              {title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-stone-200">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                <time dateTime={article.publishedAt}>{formattedDate}</time>
              </div>
              <span className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                <span>{article.readingTimeMinutes} {lang === "en" ? "min read" : "min de lecture"}</span>
              </div>
              <span className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
                <span>{article.author}</span>
              </div>
            </div>

            {/* Excerpt / Lead */}
            <div className="bg-white border-l-4 border-gold-500 p-4 sm:p-6 rounded-r-xl shadow-xs mb-8">
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                {excerpt}
              </p>
            </div>

            {/* Article Body */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-10 shadow-xs prose prose-stone max-w-none prose-headings:font-montserrat prose-headings:font-bold prose-headings:text-navy-900 prose-h2:text-xl prose-h3:text-lg prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 whitespace-pre-line">
              {content}
            </div>

            {/* Back link */}
            <div className="mt-8 sm:mt-10">
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.actualitesPage.backToNews}</span>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 sm:space-y-8">
            {/* Related Practice Area */}
            {relatedPractice && (
              <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-4 h-4 text-gold-500" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                    {lang === "en" ? "Related Practice Area" : "Domaine Associé"}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-base font-bold text-navy-900 mb-2">
                  {lang === "en" ? relatedPractice.titleEn || relatedPractice.title : relatedPractice.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {lang === "en" ? relatedPractice.summaryEn || relatedPractice.summary : relatedPractice.summary}
                </p>
                <Link
                  href={`/expertise/${relatedPractice.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                >
                  <span>{lang === "en" ? "Discover Practice Area" : "Découvrir la matière"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Consultation Card */}
            <div className="bg-navy-900 text-stone-100 rounded-xl p-6 sm:p-8 space-y-4">
              <h3 className="font-montserrat font-bold text-lg font-bold text-white">
                {lang === "en" ? "Consult on This Matter" : "Consulter sur ce sujet"}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {lang === "en"
                  ? "Me Arnaud Cheynut assists you with strategic counsel and representation before Monegasque courts."
                  : "Me Arnaud Cheynut vous conseille et assure votre défense devant toutes les juridictions monégasques."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-4 py-3 rounded-md text-xs sm:text-sm shadow-xs transition-colors text-center"
              >
                <span>{t.nav.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="pt-2 border-t border-navy-800 text-[11px] text-stone-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t.footer.secrecy}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
