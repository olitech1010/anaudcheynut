import { notFound } from "next/navigation";
import { PRACTICE_AREAS } from "@/lib/data/practice-areas";
import { ExpertiseDetailClient } from "@/components/expertise/ExpertiseDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRACTICE_AREAS.map((practice) => ({
    slug: practice.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const practice = PRACTICE_AREAS.find((p) => p.slug === slug);

  if (!practice) {
    return {
      title: "Domaine non trouvé | Cabinet Me Arnaud Cheynut",
    };
  }

  return {
    title: `${practice.title} à Monaco | Me Arnaud Cheynut Avocat-Défenseur`,
    description: practice.summary,
  };
}

export default async function PracticeDetailPage({ params }: Props) {
  const { slug } = await params;
  const practice = PRACTICE_AREAS.find((p) => p.slug === slug);

  if (!practice) {
    notFound();
  }

  return <ExpertiseDetailClient practice={practice} />;
}
