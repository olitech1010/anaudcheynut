export function StatsCounter() {
  const stats = [
    { value: "98%", label: "Taux de Satisfaction" },
    { value: "500+", label: "Dossiers Traités" },
    { value: "15+", label: "Années d'Expérience" },
    { value: "24/7", label: "Urgences Pénales" },
  ];

  return (
    <section className="bg-navy-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-montserrat text-4xl font-extrabold text-gold-500 mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-stone-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
