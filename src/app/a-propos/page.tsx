import Link from "next/link";
import { Award, ShieldCheck, Scale, Globe, ArrowRight, Building, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Cabinet | Me Arnaud Cheynut Avocat-Défenseur Monaco",
  description:
    "Découvrez le Cabinet de Me Arnaud Cheynut, Avocat-Défenseur près la Cour d'Appel de Monaco : parcours, titres, philosophie contentieuse et réseau international.",
};

export default function AboutPage() {
  const commitments = [
    {
      title: "Prise en charge personnelle",
      desc: "Chaque dossier est directement instruit et plaidé par Me Arnaud Cheynut. Aucun intermédiaire anonyme.",
    },
    {
      title: "Secret professionnel absolu",
      desc: "Sanctuarisation de vos échanges et de vos données sous la protection stricte de l'article 308 du Code Pénal monégasque.",
    },
    {
      title: "Transparence financière",
      desc: "Convention d'honoraires écrite préalablement à toute intervention. Forfait ou temps passé sans mauvaise surprise.",
    },
    {
      title: "Haute réactivité",
      desc: "Disponibilité immédiate 24/7 pour les situations d'urgence (gardes à vue, référés d'heure à heure, saisies conservatoires).",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Le Cabinet
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-900 mt-2 tracking-tight">
            Excellence, Rigueur &amp; Défense Singulière à Monaco
          </h1>
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Établi au cœur du quartier de Fontvieille, le Cabinet de Me Arnaud Cheynut offre à ses clients institutionnels, dirigeants et particuliers une pratique juridique alliant autorité locale et ouverture internationale.
          </p>
        </div>

        {/* Profile Card & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-12 border border-stone-200 shadow-xs space-y-6">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Me Arnaud Cheynut — Avocat-Défenseur
            </h2>

            <div className="prose text-stone-700 space-y-4 text-base leading-relaxed">
              <p>
                Inscrit au Tableau de l&apos;<strong>Ordre des Avocats de Monaco</strong>, Me Arnaud Cheynut a été investi des fonctions d&apos;<strong>Avocat-Défenseur</strong>. En Principauté, ce titre correspond au plus haut degré de la profession juridique et confère le monopole de la postulation devant toutes les cours souveraines monégasques.
              </p>
              <p>
                Fort d&apos;une expérience approfondie du contentieux complexe, Me Cheynut intervient régulièrement devant le Tribunal de Première Instance, le Tribunal Correctionnel, la Cour d&apos;Appel et la Cour de Révision de Monaco.
              </p>
              <p>
                Le Cabinet se distingue par son approche pragmatique et sur mesure des problématiques monégasques et transfrontalières : droit pénal des affaires, litiges civils et commerciaux de haute intensité, restructuration de sociétés monégasques (SAM, SARL), gestion patrimoniale familiale internationale et référés d&apos;urgence.
              </p>
            </div>

            {/* Accreditations */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-stone-50 border border-stone-200">
                <Award className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Ordre des Avocats</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Tableau des Avocats-Défenseurs de Monaco</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-stone-50 border border-stone-200">
                <Scale className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-900">Cour d&apos;Appel de Monaco</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Postulation &amp; représentation plénière</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Facts */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-navy-900 text-stone-100 rounded-2xl p-8 border border-navy-800 shadow-md space-y-6">
              <h3 className="font-serif text-lg font-bold text-white border-b border-navy-700 pb-3">
                Informations du Cabinet
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-stone-400 block">Titulaire :</span>
                  <span className="font-semibold text-stone-100">Me Arnaud Cheynut</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Barreau de rattachement :</span>
                  <span className="font-semibold text-stone-100">Ordre des Avocats de Monaco</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Adresse :</span>
                  <span className="font-semibold text-stone-100">
                    9 rue du Gabian, Phase III, Fontvieille, 98000 Monaco
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block">Langues de travail :</span>
                  <span className="font-semibold text-stone-100">Français, Anglais</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Régime professionnel :</span>
                  <span className="font-semibold text-stone-100">Loi n° 1.047 du 28 juillet 1982</span>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-800">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold px-4 py-3 rounded-md text-xs transition-colors"
                >
                  <span>Prendre Contact</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Commitments Section */}
        <section className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
              Nos Principes Directeurs
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mt-1">
              Les Engagements du Cabinet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-2"
              >
                <div className="w-8 h-8 rounded-md bg-gold-100 text-gold-600 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600" />
                </div>
                <h3 className="font-serif text-base font-bold text-navy-900">{c.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
