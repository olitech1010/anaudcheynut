import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { PRACTICE_AREAS, type PracticeArea } from "@/lib/data/practice-areas";
import { 
  Scale, 
  FileText, 
  Building2, 
  Users, 
  Clock, 
  Handshake, 
  Home, 
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import type { Metadata } from "next";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  FileText,
  Building2,
  Users,
  Clock,
  Handshake,
  Home,
};

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

  const IconComp = ICON_MAP[practice.icon] || Scale;

  return (
    <div className="py-12 sm:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-xs sm:text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-navy-900 transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/expertise" className="hover:text-navy-900 transition-colors">
            Domaines d&apos;Expertise
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-navy-900 font-semibold truncate">
            {practice.title}
          </span>
        </nav>

        {/* Hero Header */}
        <PageHeader
        title={practice.title}
        backgroundImage={`/images/headers/${slug}.jpg`}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Expertise", href: "/expertise" }, { label: practice.title, href: `/expertise/${slug}` }]}
      />

        {/* Two-column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Section */}
            <section className="bg-white rounded-xl p-8 border border-stone-200 shadow-xs space-y-4">
              <h2 className="font-montserrat font-bold text-2xl font-bold text-navy-900">
                Cadre Juridique &amp; Pratique Monégasque
              </h2>
              <p className="text-stone-700 leading-relaxed text-base">
                {practice.description}
              </p>
            </section>

            {/* Key Interventions */}
            <section className="bg-white rounded-xl p-8 border border-stone-200 shadow-xs space-y-6">
              <h2 className="font-montserrat font-bold text-2xl font-bold text-navy-900">
                Périmètre d&apos;Intervention du Cabinet
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {practice.keyInterventions.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-stone-50 border border-stone-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-stone-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Procedural Timeline */}
            <section className="bg-white rounded-xl p-8 border border-stone-200 shadow-xs space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                  Étapes Clés
                </span>
                <h2 className="font-montserrat font-bold text-2xl font-bold text-navy-900 mt-1">
                  Déroulement de la Procédure
                </h2>
                <p className="text-sm text-stone-600 mt-1">
                  Chaque dossier fait l&apos;objet d&apos;un phasage rigoureux adapté aux spécificités de la juridiction saisie.
                </p>
              </div>

              <div className="space-y-6">
                {practice.procedureSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 sm:gap-6 items-start">
                    <PageHeader
        title={practice.title}
        backgroundImage={`/images/headers/${slug}.jpg`}
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Expertise", href: "/expertise" }, { label: practice.title, href: `/expertise/${slug}` }]}
      />
                    <div className="pt-1 space-y-1">
                      <h3 className="font-montserrat font-bold text-base sm:text-lg font-bold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs sticky top-28 space-y-6">
              <h3 className="font-montserrat font-bold text-xl font-bold text-navy-900">
                Consulter sur ce dossier
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Prenez rendez-vous directement avec Me Arnaud Cheynut pour une analyse préliminaire et confidentielle de votre situation.
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-4 py-3 rounded-md text-sm shadow-sm transition-colors text-center"
                >
                  <span>Prendre Rendez-vous</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="tel:+33575282381"
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-navy-900 font-medium px-4 py-2.5 rounded-md text-xs transition-colors text-center border border-stone-300"
                >
                  <span>Appeler : +33 5 75 28 23 81</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Secret professionnel (Art. 308 CP)</span>
                </div>
                <p>Cabinet situé au 9 rue du Gabian, Fontvieille, Monaco.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
