import Link from "next/link";

export function ProcessTimeline() {
  const steps = [
    {
      num: 1,
      title: "Contact",
      description: "Prise de contact initiale et présentation de votre situation.",
      isFilled: false,
    },
    {
      num: 2,
      title: "Consultation",
      description: "Entretien approfondi pour analyser les enjeux juridiques.",
      isFilled: false,
    },
    {
      num: 3,
      title: "Stratégie",
      description: "Définition de la stratégie de défense ou d'action la plus adaptée.",
      isFilled: false,
    },
    {
      num: 4,
      title: "Action",
      description: "Mise en œuvre des démarches amiables ou judiciaires.",
      isFilled: false,
    },
    {
      num: 5,
      title: "Résolution",
      description: "Suivi jusqu'à la conclusion de l'affaire et exécution.",
      isFilled: true,
    },
  ];

  return (
    <section className="bg-[#F8F6F0] py-24 lg:py-32 border-b border-stone-200" id="methodologie">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, intro, CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-normal text-navy-900 leading-[1.12] tracking-tight mb-8">
              Une méthode
              <br />
              claire, de votre
              <br />
              premier appel à la
              <br />
              décision finale
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-10 max-w-md font-montserrat">
              Cinq étapes, un seul interlocuteur. Vous savez où en est votre dossier à chaque moment.
            </p>

            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block bg-navy-900 hover:bg-navy-800 text-white font-montserrat text-sm font-semibold px-8 py-3.5 rounded-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 shadow-sm"
              >
                Prendre contact
              </Link>
              <p className="text-stone-500 text-sm font-montserrat">
                Urgence pénale : nous répondons 24h/24.
              </p>
            </div>
          </div>

          {/* Right Column: Vertical Timeline matching reference image */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="relative">
              {/* Continuous vertical line running through circle centers */}
              <div
                className="absolute left-[27px] top-[28px] bottom-[28px] w-[1.5px] bg-[#C8A850] -z-0"
                aria-hidden="true"
              />

              <div className="space-y-12 sm:space-y-14 relative z-10">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-6 sm:gap-8 group">
                    {/* Circle badge */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-serif text-xl sm:text-2xl transition-transform duration-200 group-hover:scale-105 ${
                        step.isFilled
                          ? "bg-[#B89745] text-white shadow-xs"
                          : "bg-[#F8F6F0] text-navy-900 border-[1.5px] border-[#C8A850]"
                      }`}
                      aria-label={`Étape ${step.num}`}
                    >
                      {step.num}
                    </div>

                    {/* Step Content */}
                    <div className="pt-2 sm:pt-2.5">
                      <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-navy-900 leading-snug mb-2">
                        {step.title}
                      </h3>
                      <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-montserrat max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
