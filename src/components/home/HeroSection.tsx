import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <Image
        src="/images/office-lounge.jpg"
        alt="Office Lounge"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4 block">
            CABINET D'AVOCAT-DÉFENSEUR À MONACO
          </span>
          <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Votre représentation devant les juridictions de la Principauté
          </h1>
          <p className="text-stone-200 text-lg max-w-xl mb-8">
            Me Arnaud Cheynut, Avocat-Défenseur inscrit au Tableau de l'Ordre des Avocats de Monaco, assure votre défense et vos intérêts avec rigueur et confidentialité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-500 text-navy-900 font-semibold rounded hover:bg-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Prendre Rendez-vous
            </Link>
            <a
              href="tel:+37700000000"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-navy-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Appeler le Cabinet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
