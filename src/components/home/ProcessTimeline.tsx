export function ProcessTimeline() {
  const steps = [
    { title: "Contact", description: "Prise de contact initiale et présentation de votre situation." },
    { title: "Consultation", description: "Entretien approfondi pour analyser les enjeux juridiques." },
    { title: "Stratégie", description: "Définition de la stratégie de défense ou d'action la plus adaptée." },
    { title: "Action", description: "Mise en œuvre des démarches amiables ou judiciaires." },
    { title: "Résolution", description: "Suivi jusqu'à la conclusion de l'affaire et exécution." },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat text-3xl font-extrabold text-navy-900 mb-16 text-center">
          Notre Méthodologie
        </h2>
        <div className="flex flex-col lg:flex-row justify-between relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-stone-200 -z-10" />
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/5 text-center relative group">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-stone-200 -z-10" />
              <div className="w-16 h-16 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center font-montserrat font-bold text-xl mb-4 shadow-lg">
                {index + 1}
              </div>
              <h3 className="font-montserrat font-bold text-navy-900 mb-2">{step.title}</h3>
              <p className="text-stone-600 text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
