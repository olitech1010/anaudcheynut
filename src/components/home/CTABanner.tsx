import Image from "next/image";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="relative py-32 flex items-center justify-center text-center">
      <Image
        src="/images/conference-wide.jpg"
        alt="Conference"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-900/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
          Vous avez besoin d'un Avocat-Défenseur ?
        </h2>
        <p className="text-stone-300 text-xl mb-10">
          Contactez le Cabinet pour une consultation confidentielle
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded hover:bg-gold-400 transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          Prendre Rendez-vous
        </Link>
      </div>
    </section>
  );
}
