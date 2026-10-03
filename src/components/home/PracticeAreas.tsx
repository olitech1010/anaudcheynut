import Image from "next/image";
import Link from "next/link";

export function PracticeAreas() {
  const practices = [
    {
      title: "Droit Pénal",
      description: "Assistance et représentation à tous les stades de la procédure pénale, de la garde à vue au jugement.",
      slug: "droit-penal",
      image: "/images/headers/droit-penal.jpg",
    },
    {
      title: "Droit Civil",
      description: "Conseil et contentieux en matière de contrats, responsabilité civile et obligations.",
      slug: "droit-civil",
      image: "/images/headers/droit-civil.jpg",
    },
    {
      title: "Droit Commercial",
      description: "Accompagnement des entreprises dans leurs activités commerciales et résolution des litiges.",
      slug: "droit-commercial",
      image: "/images/headers/droit-commercial.jpg",
    },
    {
      title: "Droit de la Famille",
      description: "Divorce, séparation, garde d'enfants et successions avec une approche humaine et rigoureuse.",
      slug: "droit-famille",
      image: "/images/headers/droit-famille.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {practices.map((practice, index) => (
            <div key={practice.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`relative h-[400px] w-full rounded-lg overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image
                  src={practice.image}
                  alt={practice.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <h3 className="font-montserrat text-3xl font-extrabold text-navy-900 mb-4">{practice.title}</h3>
                <p className="text-stone-600 mb-6 text-lg">{practice.description}</p>
                <Link
                  href={`/expertise/${practice.slug}`}
                  className="inline-flex items-center text-navy-900 font-semibold hover:text-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 text-center">
          <Link
            href="/expertise"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded hover:bg-navy-900 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            Voir tous les domaines d'expertise
          </Link>
        </div>
      </div>
    </section>
  );
}
