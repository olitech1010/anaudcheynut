import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";

export function AboutBrief() {
  return (
    <section className="py-20 bg-stone-50 overflow-hidden" aria-labelledby="about-brief-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
              Le Cabinet
            </span>
            <h2 id="about-brief-heading" className="font-serif text-2xl sm:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
              Une Pratique Singulière au Barreau de Monaco
            </h2>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              En Principauté de Monaco, le titre d&apos;<strong>Avocat-Défenseur</strong> confère une compétence plénière : celle de postuler et de plaider devant l&apos;ensemble des juridictions monégasques, y compris le Tribunal de Première Instance, la Cour d&apos;Appel et la Cour de Révision.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Titulaire de cette charge, Me Arnaud Cheynut traite personnellement chaque dossier, garantissant ainsi à ses clients une écoute immédiate, une analyse doctrinale pointue et une détermination sans faille dans la défense de leurs droits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white border border-stone-200">
                <Scale className="w-5 h-5 text-gold-500 mb-2" />
                <h4 className="font-serif text-sm font-bold text-navy-900">
                  Pratique Contentieuse Directe
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Pas de délégation anonyme : une prise en charge personnelle par votre Avocat-Défenseur.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-stone-200">
                <Award className="w-5 h-5 text-gold-500 mb-2" />
                <h4 className="font-serif text-sm font-bold text-navy-900">
                  Réseau International
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Correspondants réguliers à Paris, Genève, Londres et Milan pour les litiges transfrontaliers.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
              >
                <span>Découvrir le parcours et les engagements de Me Arnaud Cheynut</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Decorative Callout Card */}
          <div className="lg:col-span-5">
            <div className="bg-navy-900 text-stone-100 rounded-2xl p-8 sm:p-10 border border-navy-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />

              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-3">
                Engagement Déontologique
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4">
                « Le secret professionnel n&apos;est pas un privilège pour l&apos;avocat, mais un droit fondamental pour le justiciable. »
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-6">
                Chaque consultation, échange écrit ou pièce communiquée au Cabinet demeure protégé par le secret absolu instauré par la loi monégasque.
              </p>

              <div className="pt-6 border-t border-navy-800 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm font-bold text-white">Me Arnaud Cheynut</p>
                  <p className="text-xs text-stone-400">Ordre des Avocats de Monaco</p>
                </div>
                <ShieldCheck className="w-8 h-8 text-gold-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
