import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Prise de Contact & Confidentialité",
      description:
        "Premier échange direct couvert par le secret professionnel absolu (Art. 308 CP). Diagnostic préliminaire de votre situation sous 24h.",
    },
    {
      number: "02",
      title: "Cadrage Stratégique & Honoraires",
      description:
        "Définition claire des objectifs juridiques et signature préalable d'une convention d'honoraires transparente (forfait ou temps passé).",
    },
    {
      number: "03",
      title: "Instruction & Rédaction des Actes",
      description:
        "Analyse rigoureuse des pièces, examen des nullités procédurales et rédaction sur mesure des assignations, requêtes ou conclusions.",
    },
    {
      number: "04",
      title: "Plaidoirie & Représentation",
      description:
        "Assistance personnelle et plaidoiries engagées par Me Arnaud Cheynut devant les cours et tribunaux de la Principauté de Monaco.",
    },
    {
      number: "05",
      title: "Dénouement & Exécution Forcée",
      description:
        "Notification du jugement, exercice des voies de recours si nécessaire et coordination immédiate avec les Huissiers pour exécution.",
    },
  ];

  return (
    <section className="py-20 bg-stone-100/70 border-y border-stone-200" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-bold">
            Méthodologie &amp; Engagement
          </span>
          <h2 id="process-heading" className="font-serif text-2xl sm:text-4xl font-bold text-navy-900 mt-2 tracking-tight">
            Les 5 Étapes de Votre Accompagnement
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            De la première consultation jusqu&apos;à l&apos;exécution de la décision, chaque phase de votre dossier est menée avec clarté et rigueur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={item.number}
              className="bg-white rounded-lg p-6 border border-stone-200/90 shadow-xs flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-gold-500">
                    {item.number}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-navy-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-stone-50 font-semibold px-6 py-3 rounded-md text-sm shadow-sm active:scale-[0.98] transition-all"
          >
            <span>Initier une Consultation Confidentielle</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
