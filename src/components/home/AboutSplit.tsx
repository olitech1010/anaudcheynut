import Image from "next/image";
import Link from "next/link";

export function AboutSplit() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/portrait-primary.jpg"
              alt="Me Arnaud Cheynut"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
              LE CABINET
            </span>
            <h2 className="font-montserrat text-3xl sm:text-4xl font-extrabold text-navy-900 mb-6">
              Me Arnaud Cheynut
            </h2>
            <p className="text-stone-600 mb-6 text-lg">
              En tant qu'Avocat-Défenseur, je vous assiste et vous représente devant toutes les juridictions de la Principauté de Monaco. Le cabinet s'engage à vous offrir une expertise juridique de haut niveau, alliant rigueur, confidentialité et réactivité.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8 text-navy-900 font-semibold">
              <div className="flex-1 border-l-2 border-gold-500 pl-4">
                15+ Années d'Expérience
              </div>
              <div className="flex-1 border-l-2 border-gold-500 pl-4">
                Juridictions Monégasques
              </div>
              <div className="flex-1 border-l-2 border-gold-500 pl-4">
                24/7 Urgences Pénales
              </div>
            </div>
            <Link
              href="/a-propos"
              className="inline-flex items-center text-navy-900 font-semibold hover:text-gold-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Découvrir le Cabinet →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
