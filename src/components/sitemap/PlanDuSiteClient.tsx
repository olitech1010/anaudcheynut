"use client";

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Scale, BookOpen, FileText, ArrowRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
import { ARTICLES } from "@/lib/data/articles";
import { useLanguage } from "@/context/LanguageContext";

export function PlanDuSiteClient() {
  const { lang, t } = useLanguage();

  const mainPages = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.expertise, href: "/expertise" },
    { name: t.nav.about, href: "/a-propos" },
    { name: t.nav.fees, href: "/honoraires" },
    { name: t.nav.news, href: "/actualites" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const legalPages = [
    { name: t.footer.legalNotice, href: "/mentions-legales" },
    { name: t.footer.privacyPolicy, href: "/politique-confidentialite" },
    { name: t.footer.sitemap, href: "/plan-du-site" },
  ];

  return (
    <div className="bg-stone-50 pb-16 sm:pb-24">
      {/* Header */}
      <PageHeader
        title={t.footer.sitemap}
        backgroundImage="/images/headers/default.jpg"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: t.footer.sitemap, href: "/plan-du-site" },
        ]}
      />

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Main Pages */}
          <div>
            <h2 className="font-montserrat font-bold text-base sm:text-lg font-bold text-navy-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
              <Scale className="w-5 h-5 text-gold-500" aria-hidden="true" />
              {lang === "en" ? "Main Navigation" : "Pages Principales"}
            </h2>
            <ul className="space-y-2">
              {mainPages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-xs sm:text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-gold-500 transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h2 className="font-montserrat font-bold text-base sm:text-lg font-bold text-navy-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
              <Scale className="w-5 h-5 text-gold-500" aria-hidden="true" />
              {t.nav.expertise}
            </h2>
            <ul className="space-y-2">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-gold-500 transition-colors" />
                    <span>{lang === "en" ? area.titleEn || area.title : area.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Articles */}
          <div>
            <h2 className="font-montserrat font-bold text-base sm:text-lg font-bold text-navy-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
              <BookOpen className="w-5 h-5 text-gold-500" aria-hidden="true" />
              {t.nav.news}
            </h2>
            <ul className="space-y-2">
              {ARTICLES.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/actualites/${article.slug}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-gold-500 transition-colors" />
                    <span className="truncate">{lang === "en" ? article.titleEn || article.title : article.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h2 className="font-montserrat font-bold text-base sm:text-lg font-bold text-navy-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
              <FileText className="w-5 h-5 text-gold-500" aria-hidden="true" />
              {lang === "en" ? "Legal Notices & Privacy" : "Informations Légales"}
            </h2>
            <ul className="space-y-2">
              {legalPages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-xs sm:text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-gold-500 transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
