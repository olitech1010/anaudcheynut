import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Clock,
  Target,
  Handshake,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Honoraires et Modes de Facturation | Cabinet Me Arnaud Cheynut Monaco",
  description:
    "Transparence des honoraires du Cabinet Me Arnaud Cheynut. Forfait, facturation au temps passé et honoraires de résultat. Convention d'honoraires préalable obligatoire.",
  openGraph: {
    title: "Honoraires | Cabinet Me Arnaud Cheynut Monaco",
    description:
      "Modes de facturation transparents et convention d'honoraires systématique pour chaque mandat confié au Cabinet.",
  },
};

const BILLING_MODELS = [
  {
    icon: FileText,
    title: "Honoraire Forfaitaire",
    titleEn: "Fixed Fee",
    description:
      "Un montant global est convenu avant toute intervention pour les missions dont le périmètre est clairement délimité : rédaction de contrats, constitution de sociétés, consultation juridique ponctuelle, assistance en garde à vue.",
    advantages: [
      "Prévisibilité totale des coûts pour le client",
      "Adapté aux missions à périmètre défini",
      "Montant fixé dans la convention d'honoraires préalable",
    ],
  },
  {
    icon: Clock,
    title: "Facturation au Temps Passé",
    titleEn: "Hourly Rate",
    description:
      "Le taux horaire est communiqué préalablement et appliqué au temps effectivement consacré au dossier. Un relevé détaillé des diligences est remis à chaque facturation. Ce mode est privilégié pour les contentieux dont la durée et la complexité sont difficilement prévisibles.",
    advantages: [
      "Transparence grâce au relevé détaillé des diligences",
      "Adapté aux contentieux complexes ou évolutifs",
      "Taux horaire fixé dès la convention initiale",
    ],
  },
  {
    icon: Target,
    title: "Honoraire Complémentaire de Résultat",
    titleEn: "Success Fee",
    description:
      "En complément d'un honoraire de base (forfait ou temps passé), un honoraire additionnel proportionnel au résultat obtenu peut être convenu. Ce mode de rémunération est encadré par les règles déontologiques de l'Ordre des Avocats de Monaco et suppose un résultat effectivement atteint.",
    advantages: [
      "Alignement des intérêts entre le Cabinet et le client",
      "Encadré par les règles déontologiques de l'Ordre",
      "Toujours complémentaire à un honoraire de base",
    ],
  },
];

export default function HonorairesPage() {
  return (
    <div className="bg-stone-50">
      {/* Header */}
      <section className="bg-navy-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center gap-3 mb-4">
            <Handshake
              className="w-6 h-6 text-gold-500"
              aria-hidden="true"
            />
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Transparence
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Honoraires et Facturation
          </h1>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
            Le Cabinet de Me&nbsp;Arnaud Cheynut s&apos;engage à une
            transparence totale sur ses modalités de facturation.
            Chaque mandat fait l&apos;objet d&apos;une convention
            d&apos;honoraires écrite signée préalablement à toute
            intervention.
          </p>
        </div>
      </section>

      {/* Convention d'honoraires explanation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-10 shadow-xs mb-16">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center">
              <ShieldCheck
                className="w-6 h-6 text-gold-400"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                Convention d&apos;Honoraires Préalable
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
                Conformément aux usages de l&apos;Ordre des Avocats de
                Monaco et aux obligations déontologiques de la profession,
                Me&nbsp;Arnaud Cheynut remet systématiquement une
                convention d&apos;honoraires écrite avant toute prise en
                charge d&apos;un dossier. Ce document précise :
              </p>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Le périmètre exact de la mission confiée
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Le mode de facturation retenu (forfait, temps passé ou
                  honoraire de résultat)
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Les conditions de règlement et les modalités de
                  provision éventuelle
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Les frais et débours prévisibles (expertises,
                  huissiers, traductions)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Billing Models Grid */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-10">
          Modes de Facturation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BILLING_MODELS.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.title}
                className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-900 flex items-center justify-center mb-5">
                  <Icon
                    className="w-5 h-5 text-gold-400"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">
                  {model.title}
                </h3>
                <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold mb-4">
                  {model.titleEn}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-grow">
                  {model.description}
                </p>
                <ul className="space-y-2 text-xs text-stone-600 border-t border-stone-100 pt-4">
                  {model.advantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-2">
                      <span
                        className="w-1 h-1 rounded-full bg-gold-500 mt-1.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Droit Pénal / Urgences note */}
        <div className="mt-12 bg-navy-900/5 border border-navy-900/10 rounded-xl p-6 sm:p-8">
          <h3 className="font-serif text-lg font-bold text-navy-900 mb-3">
            Urgences Pénales et Garde à Vue
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            En matière pénale, l&apos;intervention de
            l&apos;Avocat-Défenseur en garde à vue est un droit
            fondamental. Me&nbsp;Arnaud Cheynut intervient immédiatement,
            24 heures sur 24 et 7 jours sur 7, pour assister toute
            personne placée en garde à vue en Principauté de Monaco. Les
            conditions d&apos;honoraires sont discutées dès que les
            circonstances le permettent.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-stone-500 mb-4">
            Pour une estimation personnalisée adaptée à votre situation :
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-stone-50 font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-md shadow-sm active:scale-[0.98] transition-all"
          >
            <span>Demander un Devis</span>
            <ArrowRight
              className="w-4 h-4 text-gold-400"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
