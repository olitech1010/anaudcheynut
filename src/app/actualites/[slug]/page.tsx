import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Scale,
  ArrowRight,
} from "lucide-react";
import { ARTICLES } from "@/lib/data/articles";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Cabinet Me Arnaud Cheynut`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedPractice = PRACTICE_AREAS.find(
    (p) => p.slug === article.relatedPracticeAreaSlug
  );

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "fr-FR",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="bg-stone-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav
          className="flex items-center gap-2 text-xs text-stone-500"
          aria-label="Fil d'Ariane"
        >
          <Link
            href="/"
            className="hover:text-navy-900 transition-colors"
          >
            Accueil
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/actualites"
            className="hover:text-navy-900 transition-colors"
          >
            Actualités
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-navy-900 font-medium truncate max-w-xs">
            {article.title}
          </span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Article Content */}
          <article className="lg:col-span-2">
            {/* Category badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-navy-900 text-gold-400 font-semibold uppercase tracking-wider text-[11px] mb-6">
              {article.categoryName}
            </span>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 mb-8 pb-6 border-b border-stone-200">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <time dateTime={article.publishedAt}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{article.readingTimeMinutes} min de lecture</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-medium italic border-l-4 border-gold-500 pl-4 mb-8">
              {article.excerpt}
            </p>

            {/* Body */}
            <div className="prose prose-stone prose-headings:font-serif prose-headings:text-navy-900 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:text-navy-900 max-w-none whitespace-pre-line text-sm sm:text-base">
              {article.content.trim()}
            </div>

            {/* Related practice area */}
            {relatedPractice && (
              <div className="mt-12 p-6 bg-stone-100 rounded-xl border border-stone-200">
                <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
                  Domaine d&apos;expertise lié
                </p>
                <Link
                  href={`/expertise/${relatedPractice.slug}`}
                  className="inline-flex items-center gap-2 font-serif text-lg font-bold text-navy-900 hover:text-gold-600 transition-colors group"
                >
                  <Scale
                    className="w-5 h-5 text-gold-500"
                    aria-hidden="true"
                  />
                  <span>{relatedPractice.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  {relatedPractice.summary}
                </p>
              </div>
            )}

            {/* Back link */}
            <div className="mt-10">
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux actualités
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* CTA Box */}
              <div className="bg-navy-900 text-stone-100 rounded-xl p-6 sm:p-8 shadow-sm">
                <h2 className="font-serif text-lg font-bold mb-3">
                  Besoin d&apos;un Avocat-Défenseur ?
                </h2>
                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  Me Arnaud Cheynut se tient à votre disposition pour une
                  consultation confidentielle relative à votre situation
                  juridique en Principauté de Monaco.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm px-5 py-3 rounded-md transition-colors shadow-sm"
                >
                  Prendre Rendez-vous
                </Link>
              </div>

              {/* Other articles */}
              <div>
                <h3 className="font-serif text-base font-semibold text-navy-900 mb-4 border-b border-stone-200 pb-2">
                  Autres Analyses
                </h3>
                <ul className="space-y-3">
                  {ARTICLES.filter((a) => a.slug !== slug)
                    .slice(0, 3)
                    .map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/actualites/${a.slug}`}
                          className="group block"
                        >
                          <span className="text-sm font-medium text-stone-700 group-hover:text-navy-900 transition-colors leading-snug block">
                            {a.title}
                          </span>
                          <span className="text-xs text-stone-400 mt-0.5 block">
                            {new Date(a.publishedAt).toLocaleDateString(
                              "fr-FR",
                              {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
