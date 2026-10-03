import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Le Cabinet | Arnaud Cheynut",
  description: "À propos de Me Arnaud Cheynut, Avocat-Défenseur à Monaco.",
};

export default function AboutPage() {
  return (
    <main className="bg-stone-50 pb-24">
      <PageHeader
        title="Le Cabinet"
        subtitle="Rigueur, Confiance et Excellence à Monaco"
        backgroundImage="/images/headers/about.jpg"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Le Cabinet", href: "/a-propos" },
        ]}
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/portrait-primary.jpg"
              alt="Me Arnaud Cheynut"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-montserrat text-3xl font-bold text-navy-900 mb-6">Me Arnaud Cheynut</h2>
            <p className="text-stone-600 mb-4">
              Avocat-Défenseur inscrit au Tableau de l'Ordre des Avocats de Monaco, Me Arnaud Cheynut met son expertise au service d'une clientèle locale et internationale.
            </p>
            <p className="text-stone-600 mb-4">
              Fort d'une solide expérience devant les juridictions de la Principauté, le cabinet intervient tant en conseil qu'en contentieux, avec une approche pragmatique et personnalisée pour chaque dossier.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-montserrat text-3xl font-bold text-navy-900 mb-10 text-center">Nos Reconnaissances</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            <Image src="/images/awards/chambers-hnw-2026.jpg" alt="Chambers" width={150} height={150} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/legal500-leading.webp" alt="Legal 500" width={150} height={150} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/legal500-nextgen.webp" alt="Legal 500 Nextgen" width={150} height={150} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/leaders-league-ranked.jpg" alt="Leaders League" width={150} height={150} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/leaders-league-label.jpg" alt="Leaders League Label" width={150} height={150} className="object-contain grayscale hover:grayscale-0 transition" />
            <Image src="/images/awards/chambers-global.jpg" alt="Chambers Global" width={150} height={150} className="object-contain grayscale hover:grayscale-0 transition" />
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-montserrat text-3xl font-bold text-navy-900 mb-10 text-center">Notre Environnement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/office-reception.jpg" alt="Reception" fill className="object-cover" />
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/office-lounge.jpg" alt="Lounge" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-montserrat text-3xl font-bold text-navy-900 mb-10 text-center">Conférences et Interventions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/portrait-speaking.jpg" alt="Speaking" fill className="object-cover" />
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/conference-panel.jpg" alt="Panel" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
