import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Domaines d'Expertise | Arnaud Cheynut",
  description: "Découvrez les domaines d'expertise du cabinet d'avocat.",
};

const practices = [
  { title: "Droit Pénal", slug: "droit-penal", image: "/images/headers/droit-penal.jpg", desc: "Défense pénale d'urgence, assistance aux victimes." },
  { title: "Droit Civil", slug: "droit-civil", image: "/images/headers/droit-civil.jpg", desc: "Responsabilité, contrats, réparation des préjudices." },
  { title: "Droit Commercial", slug: "droit-commercial", image: "/images/headers/droit-commercial.jpg", desc: "Litiges commerciaux, recouvrement, contrats d'affaires." },
  { title: "Droit de la Famille", slug: "droit-famille", image: "/images/headers/droit-famille.jpg", desc: "Divorces, séparations, successions, filiation." },
  { title: "Procédures d'Urgence", slug: "procedures-urgence", image: "/images/headers/procedures-urgence.jpg", desc: "Référés, saisies, mesures conservatoires." },
  { title: "Arbitrage", slug: "arbitrage", image: "/images/headers/arbitrage.jpg", desc: "Modes alternatifs de règlement des litiges." },
  { title: "Droit Immobilier", slug: "droit-immobilier", image: "/images/headers/droit-immobilier.jpg", desc: "Baux, copropriété, construction." },
];

export default function ExpertisePage() {
  return (
    <main className="bg-white pb-24">
      <PageHeader
        title="Domaines d'Expertise"
        backgroundImage="/images/headers/default.jpg"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Expertise", href: "/expertise" }]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {practices.map((practice, index) => (
          <div key={practice.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`relative h-[400px] w-full rounded-lg overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <Image src={practice.image} alt={practice.title} fill className="object-cover" />
            </div>
            <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
              <h2 className="font-montserrat text-3xl font-bold text-navy-900 mb-6">{practice.title}</h2>
              <p className="text-stone-600 text-lg mb-6">{practice.desc}</p>
              <Link href={`/expertise/${practice.slug}`} className="inline-flex text-navy-900 font-semibold hover:text-gold-500 transition-colors">
                En savoir plus →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
