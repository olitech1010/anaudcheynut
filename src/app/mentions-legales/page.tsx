import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { Scale, FileText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | Cabinet Me Arnaud Cheynut Monaco",
  description:
    "Mentions légales obligatoires du site du Cabinet Me Arnaud Cheynut, Avocat-Défenseur inscrit au Tableau de l'Ordre des Avocats de Monaco.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-stone-50">
      {/* Header */}
      <PageHeader
        title="Mentions Légales"
        backgroundImage="/images/headers/default.jpg"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions Légales", href: "#" }]}
      />

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="space-y-12 text-sm sm:text-base text-stone-600 leading-relaxed">
          {/* Éditeur */}
          <div>
            <h2 className="font-montserrat font-bold text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <Scale
                className="w-5 h-5 text-gold-500"
                aria-hidden="true"
              />
              Éditeur du Site
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-3">
              <p>
                <strong className="text-navy-900">Cabinet :</strong>{" "}
                Me&nbsp;Arnaud Cheynut, Avocat-Défenseur
              </p>
              <p>
                <strong className="text-navy-900">Qualité :</strong>{" "}
                Avocat-Défenseur près la Cour d&apos;Appel de Monaco,
                inscrit au Tableau de l&apos;Ordre des Avocats-Défenseurs
                et Avocats de la Principauté de Monaco
              </p>
              <p>
                <strong className="text-navy-900">Adresse :</strong> 9
                rue du Gabian, Phase III, Fontvieille, 98000 Monaco
              </p>
              <p>
                <strong className="text-navy-900">Téléphone :</strong>{" "}
                <Link
                  href="tel:+37797980680"
                  className="text-navy-900 hover:text-gold-600 transition-colors"
                >
                  +377 97 98 06 80
                </Link>
              </p>
              <p>
                <strong className="text-navy-900">E-mail :</strong>{" "}
                <Link
                  href="mailto:contact@anaudcheynut.com"
                  className="text-navy-900 hover:text-gold-600 transition-colors"
                >
                  contact@anaudcheynut.com
                </Link>
              </p>
              <p>
                <strong className="text-navy-900">Directeur de la publication :</strong>{" "}
                Me&nbsp;Arnaud Cheynut
              </p>
            </div>
          </div>

          {/* Réglementation Professionnelle */}
          <div>
            <h2 className="font-montserrat font-bold text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
              <ShieldCheck
                className="w-5 h-5 text-gold-500"
                aria-hidden="true"
              />
              Réglementation Professionnelle
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <p>
                La profession d&apos;Avocat-Défenseur à Monaco est
                réglementée par la{" "}
                <strong className="text-navy-900">
                  Loi n° 1.047 du 28 juillet 1982
                </strong>{" "}
                relative à l&apos;exercice des professions
                d&apos;Avocat-Défenseur et d&apos;Avocat.
              </p>
              <p>
                <strong className="text-navy-900">
                  Ordre de rattachement :
                </strong>{" "}
                Ordre des Avocats-Défenseurs et Avocats près la Cour
                d&apos;Appel de Monaco, Palais de Justice, 5 rue Colonel
                Bellando de Castro, 98000 Monaco.
              </p>
              <p>
                <strong className="text-navy-900">
                  Titre professionnel :
                </strong>{" "}
                Avocat-Défenseur, obtenu en Principauté de Monaco.
              </p>
              <p>
                Me&nbsp;Arnaud Cheynut est soumis aux règles
                déontologiques de la profession, incluant le secret
                professionnel absolu (article 308 du Code Pénal
                monégasque), l&apos;indépendance, la loyauté envers les
                juridictions et le devoir de probité.
              </p>
            </div>
          </div>

          {/* Assurance RCP */}
          <div>
            <h2 className="font-montserrat font-bold text-xl font-bold text-navy-900 mb-4">
              Responsabilité Civile Professionnelle
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-3">
              <p>
                Me&nbsp;Arnaud Cheynut bénéficie d&apos;une assurance de
                responsabilité civile professionnelle (RCP) conforme aux
                obligations imposées par l&apos;Ordre des Avocats de
                Monaco. Cette couverture garantit la réparation de tout
                préjudice consécutif à une faute professionnelle dans
                l&apos;exercice de ses fonctions.
              </p>
            </div>
          </div>

          {/* Conformité LCB-FT */}
          <div>
            <h2 className="font-montserrat font-bold text-xl font-bold text-navy-900 mb-4">
              Conformité LCB-FT
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-3">
              <p>
                En sa qualité de professionnel du droit assujetti, le
                Cabinet est soumis aux obligations de lutte contre le
                blanchiment de capitaux et le financement du terrorisme
                (LCB-FT) sous la supervision de l&apos;Autorité
                Monégasque de Sécurité Financière (AMSF), anciennement
                SICCFIN.
              </p>
              <p>
                Le Cabinet applique les procédures d&apos;identification
                et de vérification de l&apos;identité des clients et
                bénéficiaires effectifs conformément à la législation
                monégasque en vigueur.
              </p>
            </div>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="font-montserrat font-bold text-xl font-bold text-navy-900 mb-4">
              Hébergement du Site
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-3">
              <p>
                <strong className="text-navy-900">Hébergeur :</strong>{" "}
                Vercel Inc.
              </p>
              <p>
                <strong className="text-navy-900">Adresse :</strong> 340
                S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              </p>
              <p>
                <strong className="text-navy-900">Site :</strong>{" "}
                <Link
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 hover:text-gold-600 transition-colors underline underline-offset-2"
                >
                  vercel.com
                </Link>
              </p>
            </div>
          </div>

          {/* Propriété Intellectuelle */}
          <div>
            <h2 className="font-montserrat font-bold text-xl font-bold text-navy-900 mb-4">
              Propriété Intellectuelle
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
              <p>
                L&apos;ensemble du contenu de ce site (textes, analyses
                juridiques, mise en page, graphismes, logos) est protégé
                par le droit de la propriété intellectuelle applicable en
                Principauté de Monaco. Toute reproduction, représentation
                ou diffusion, même partielle, est interdite sans
                autorisation écrite préalable de Me&nbsp;Arnaud Cheynut.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="font-montserrat font-bold text-xl font-bold text-navy-900 mb-4">
              Limitation de Responsabilité
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
              <p>
                Les informations publiées sur ce site sont fournies à
                titre informatif et ne constituent en aucun cas une
                consultation juridique personnalisée. Elles ne sauraient
                engager la responsabilité du Cabinet. Seule une
                consultation individuelle permet d&apos;analyser une
                situation juridique particulière et de formuler un avis
                adapté.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
