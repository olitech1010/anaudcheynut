import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceLinks = [
    { name: "Droit Pénal & Défense", href: "/expertise/droit-penal" },
    { name: "Droit Civil & Litiges", href: "/expertise/droit-civil" },
    { name: "Droit Commercial & SAM/SARL", href: "/expertise/droit-commercial" },
    { name: "Droit de la Famille & Patrimoine", href: "/expertise/droit-famille" },
    { name: "Référés d'Urgence & Mesures Conservatoires", href: "/expertise/procedures-urgence" },
    { name: "Arbitrage & Résolution de Conflits", href: "/expertise/arbitrage" },
    { name: "Droit Immobilier Monégasque", href: "/expertise/droit-immobilier" },
  ];

  return (
    <footer className="bg-navy-900 text-stone-300 border-t border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Identity & Bar Accreditation */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-stone-100">
              <Image
                src="/images/logo-horizontal-white.png"
                alt="Cabinet Me Arnaud Cheynut - Avocat-Défenseur Monaco"
                width={220}
                height={46}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold mt-4">
              Avocat-Défenseur près la Cour d&apos;Appel de Monaco
            </p>
            <p className="text-sm text-stone-400 leading-relaxed">
              Inscrit au Tableau de l&apos;Ordre des Avocats de Monaco. Représentation et conseil juridique de premier ordre pour les particuliers et les entreprises en Principauté.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
              <span>Secret professionnel garanti (Art. 308 Code Pénal)</span>
            </div>
          </div>

          {/* Column 2: Domaines d'Expertise */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-base font-semibold text-stone-100 border-b border-navy-700 pb-2">
              Domaines d&apos;Expertise
            </h3>
            <ul className="space-y-2.5 text-sm">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-gold-400 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Coordonnées */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-base font-semibold text-stone-100 border-b border-navy-700 pb-2">
              Cabinet à Monaco
            </h3>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>
                  9 rue du Gabian, Phase III<br />
                  Fontvieille, 98000 Monaco
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" aria-hidden="true" />
                <Link
                  href="tel:+37797980680"
                  className="hover:text-gold-400 transition-colors font-medium text-stone-200"
                >
                  +377 97 98 06 80
                </Link>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" aria-hidden="true" />
                <Link
                  href="mailto:contact@anaudcheynut.com"
                  className="hover:text-gold-400 transition-colors text-stone-200"
                >
                  contact@anaudcheynut.com
                </Link>
              </div>
              <div className="pt-2 text-xs text-stone-400 border-t border-navy-800">
                <p className="font-medium text-stone-300">Horaires d&apos;ouverture :</p>
                <p>Du lundi au vendredi : 08h30 – 19h00</p>
                <p className="text-gold-400 mt-1">Urgences pénales &amp; référés : 24h/24 – 7j/7</p>
              </div>
            </div>
          </div>

          {/* Column 4: Déontologie & Informations Légales */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-base font-semibold text-stone-100 border-b border-navy-700 pb-2">
              Ordre &amp; Déontologie
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              La profession d&apos;Avocat-Défenseur à Monaco est régie par la Loi n° 1.047 du 28 juillet 1982. Tous les actes sont couverts par le secret professionnel absolu et la responsabilité civile professionnelle obligatoire (RCP).
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-block text-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-4 py-2.5 rounded-md transition-colors shadow-sm"
              >
                Contacter le Cabinet
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} Cabinet Me Arnaud Cheynut. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-stone-300 transition-colors">
              Mentions Légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-stone-300 transition-colors">
              Politique de Confidentialité (RGPD)
            </Link>
            <Link href="/plan-du-site" className="hover:text-stone-300 transition-colors">
              Plan du Site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
