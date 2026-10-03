import { Award, Landmark, MapPin, Globe } from "lucide-react";

export function TrustBar() {
  const credentials = [
    {
      icon: Award,
      title: "Ordre des Avocats de Monaco",
      description: "Inscrit au Tableau · Titre d'Avocat-Défenseur",
    },
    {
      icon: Landmark,
      title: "Cour d'Appel de Monaco",
      description: "Postulation & Plaidoiries devant toutes juridictions",
    },
    {
      icon: MapPin,
      title: "Fontvieille · 98000 Monaco",
      description: "9 rue du Gabian · Cabinet établi en Principauté",
    },
    {
      icon: Globe,
      title: "Français & Anglais",
      description: "Accompagnement bilingue pour clientèle internationale",
    },
  ];

  return (
    <section className="bg-stone-100 border-b border-stone-200 py-8" aria-label="Garanties et Titres">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred) => {
            const IconComponent = cred.icon;
            return (
              <div
                key={cred.title}
                className="flex items-start gap-3.5 p-3 rounded-lg bg-white/70 border border-stone-200/80 shadow-xs"
              >
                <div className="p-2.5 rounded-md bg-navy-900 text-gold-400 flex-shrink-0">
                  <IconComponent className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900 leading-tight">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 leading-normal">
                    {cred.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
