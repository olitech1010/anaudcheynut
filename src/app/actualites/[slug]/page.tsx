import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/lib/data/articles";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
import { ArticleDetailClient } from "@/components/blog/ArticleDetailClient";

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

  return <ArticleDetailClient article={article} relatedPractice={relatedPractice} />;
}
