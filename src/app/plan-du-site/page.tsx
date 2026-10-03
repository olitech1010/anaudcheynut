import type { Metadata } from "next";
import Link from "next/link";
import { Map, Scale, BookOpen, FileText, ArrowRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
import { ARTICLES } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Plan du Site | Cabinet Me Arnaud Cheynut Monaco",
  description:
    "Plan du site du Cabinet Me Arnaud Cheynut, Avocat-Défenseur à Monaco. Accès rapide à toutes les pages du site.",
};

const SITE_SECTIONS = [
  {
    title: "Pages Principales",
    icon: Scale,
    links: [
      { name: "Accueil", href: "/" },
      { name: "Domaines d'Expertise", href: "/expertise" },
      { name: "Le Cabinet", href: "/a-propos" },
      { name: "Honoraires et Facturation", href: "/honoraires" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="bg-navy-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-3 mb-4">
            <Map
              className="w-6 h-6 text-gold-500"
              aria-hidden="true"
            />
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Navigation
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            Plan du Site
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Main Pages */}
          {SITE_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title}>
                <h2 className="font-serif text-lg font-bold text-navy-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
                  <Icon
                    className="w-5 h-5 text-gold-500"
                    aria-hidden="true"
                  />
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                      >
                        <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-gold-500 transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Practice Areas */}
          <div>
            <h2 className="font-serif text-lg font-bold text-navy-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
              <Scale
                className="w-5 h-5 text-gold-500"
                aria-hidden="true"
              />
              Domaines d&apos;Expertise
            </h2>
            <ul className="space-y-2">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/expertise/${area.slug}`}
                    className="flex items-center gap-2 text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-gold-500 transition-colors" />
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Articles */}
          <div>
            <h2 className="font-serif text-lg font-bold text-navy-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
              <BookOpen
                className="w-5 h-5 text-gold-500"
                aria-hidden="true"
              />
              Actualités Juridiques
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/actualites"
                  className="flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600 transition-colors group"
                >
                  <ArrowRight className="w-3 h-3 text-gold-500" />
                  Toutes les actualités
                </Link>
              </li>
              {ARTICLES.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/actualites/${article.slug}`}
                    className="flex items-center gap-2 text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-gold-500 transition-colors" />
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h2 className="font-serif text-lg font-bold text-navy-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
              <FileText
                className="w-5 h-5 text-gold-500"
                aria-hidden="true"
              />
              Informations Légales
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                >
                  <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-gold-500 transition-colors" />
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                >
                  <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-gold-500 transition-colors" />
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-du-site"
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-navy-900 transition-colors group"
                >
                  <ArrowRight className="w-3 h-3 text-stone-400 group-hover:text-gold-500 transition-colors" />
                  Plan du Site
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
