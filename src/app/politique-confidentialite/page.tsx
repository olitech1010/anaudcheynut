import type { Metadata } from "next";
import Link from "next/link";
import { Lock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Politique de Confidentialité (RGPD) | Cabinet Me Arnaud Cheynut Monaco",
  description:
    "Protection des données personnelles conformément au RGPD et à la législation monégasque (CCIN). Droits d'accès, rectification, suppression et portabilité.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="bg-navy-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-3 mb-4">
            <Lock
              className="w-6 h-6 text-gold-500"
              aria-hidden="true"
            />
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              RGPD &amp; CCIN
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Protection de vos données personnelles conformément au
            Règlement Général sur la Protection des Données (RGPD) et à
            la Loi monégasque n° 1.165 du 23 décembre 1993 relative à la
            protection des informations nominatives.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="space-y-10 text-sm sm:text-base text-stone-600 leading-relaxed">
          {/* Responsable */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              1. Responsable du Traitement
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-2">
              <p>
                Le responsable du traitement des données personnelles
                collectées sur ce site est :
              </p>
              <p className="font-medium text-navy-900">
                Me&nbsp;Arnaud Cheynut, Avocat-Défenseur
              </p>
              <p>
                9 rue du Gabian, Phase III, Fontvieille, 98000 Monaco
              </p>
              <p>
                E-mail :{" "}
                <Link
                  href="mailto:contact@zabaldano.com"
                  className="text-navy-900 hover:text-gold-600 transition-colors"
                >
                  contact@zabaldano.com
                </Link>
              </p>
              <p>
                Téléphone :{" "}
                <Link
                  href="tel:+37797980680"
                  className="text-navy-900 hover:text-gold-600 transition-colors"
                >
                  +377 97 98 06 80
                </Link>
              </p>
            </div>
          </div>

          {/* Données Collectées */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              2. Données Personnelles Collectées
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <p>
                Les données personnelles collectées par le biais de ce
                site sont limitées au strict nécessaire :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-900">
                      Formulaire de contact :
                    </strong>{" "}
                    nom, prénom, adresse e-mail, numéro de téléphone,
                    objet de la demande et message
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-900">
                      Données de navigation :
                    </strong>{" "}
                    adresse IP, type de navigateur, pages consultées
                    (collectées uniquement via des cookies techniques
                    indispensables)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Finalités */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              3. Finalités du Traitement
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <p>
                Les données personnelles sont traitées pour les finalités
                suivantes :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Répondre aux demandes de contact et de prise de
                  rendez-vous
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Gestion de la relation entre le Cabinet et ses clients
                  potentiels
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Assurer le bon fonctionnement technique du site
                </li>
              </ul>
              <p>
                Aucune donnée n&apos;est utilisée à des fins de
                prospection commerciale, de profilage ou de revente à des
                tiers.
              </p>
            </div>
          </div>

          {/* Base Juridique */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              4. Base Juridique du Traitement
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
              <p>
                Le traitement des données repose sur le{" "}
                <strong className="text-navy-900">
                  consentement explicite
                </strong>{" "}
                de la personne concernée, recueilli via la case de
                consentement RGPD du formulaire de contact, ainsi que sur
                l&apos;intérêt légitime du Cabinet à répondre aux
                sollicitations.
              </p>
            </div>
          </div>

          {/* Durée de Conservation */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              5. Durée de Conservation
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-3">
              <p>
                Les données issues du formulaire de contact sont
                conservées pendant une durée maximale de{" "}
                <strong className="text-navy-900">36 mois</strong> à
                compter de la dernière interaction, sauf obligation légale
                ou réglementaire imposant une durée différente.
              </p>
              <p>
                Les données de navigation (cookies techniques) sont
                conservées pendant la durée de la session de navigation.
              </p>
            </div>
          </div>

          {/* Droits */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              6. Droits des Personnes Concernées
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-4">
              <p>
                Conformément au RGPD et à la Loi monégasque n° 1.165,
                vous disposez des droits suivants sur vos données
                personnelles :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-900">
                      Droit d&apos;accès :
                    </strong>{" "}
                    obtenir la communication de l&apos;intégralité de vos
                    données
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-900">
                      Droit de rectification :
                    </strong>{" "}
                    corriger ou compléter des données inexactes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-900">
                      Droit à l&apos;effacement :
                    </strong>{" "}
                    demander la suppression de vos données
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-900">
                      Droit à la portabilité :
                    </strong>{" "}
                    recevoir vos données dans un format structuré
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="text-navy-900">
                      Droit d&apos;opposition :
                    </strong>{" "}
                    s&apos;opposer au traitement pour des motifs légitimes
                  </span>
                </li>
              </ul>
              <p>
                Pour exercer vos droits, adressez votre demande à{" "}
                <Link
                  href="mailto:contact@zabaldano.com"
                  className="text-navy-900 hover:text-gold-600 transition-colors"
                >
                  contact@zabaldano.com
                </Link>{" "}
                accompagnée d&apos;un justificatif d&apos;identité.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              7. Cookies
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-3">
              <p>
                Ce site utilise exclusivement des{" "}
                <strong className="text-navy-900">
                  cookies strictement nécessaires
                </strong>{" "}
                au fonctionnement technique (préférence de langue). Aucun
                cookie de mesure d&apos;audience, de publicité ciblée ou
                de suivi comportemental n&apos;est déposé.
              </p>
            </div>
          </div>

          {/* Sécurité */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              8. Sécurité des Données
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
              <p>
                Le Cabinet met en place les mesures techniques et
                organisationnelles appropriées pour protéger les données
                personnelles contre tout accès non autorisé, altération,
                divulgation ou destruction. Les transmissions sont
                chiffrées via le protocole HTTPS/TLS.
              </p>
            </div>
          </div>

          {/* CCIN */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              9. Autorité de Contrôle
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-3">
              <p>
                En cas de réclamation relative au traitement de vos
                données, vous pouvez saisir la Commission de Contrôle des
                Informations Nominatives (CCIN) de la Principauté de
                Monaco :
              </p>
              <p className="text-navy-900 font-medium">
                CCIN — Commission de Contrôle des Informations
                Nominatives
              </p>
              <p>
                Principauté de Monaco — 98000 Monaco
              </p>
              <p>
                Site :{" "}
                <Link
                  href="https://www.ccin.mc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-900 hover:text-gold-600 transition-colors underline underline-offset-2"
                >
                  www.ccin.mc
                </Link>
              </p>
            </div>
          </div>

          {/* Mise à jour */}
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">
              10. Modification de la Politique
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8">
              <p>
                Le Cabinet se réserve le droit de modifier la présente
                politique de confidentialité à tout moment. Toute
                modification substantielle sera indiquée sur cette page
                avec la date de mise à jour.
              </p>
              <p className="mt-3 text-xs text-stone-400">
                Dernière mise à jour : octobre 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
