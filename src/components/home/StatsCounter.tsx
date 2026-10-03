export function StatsCounter() {
  const stats = [
    { value: "98 %", label: "de clients satisfaits" },
    { value: "500+", label: "dossiers traités" },
    { value: "15+", label: "années d'expérience" },
    { value: "24/7", label: "disponibles en urgence pénale" },
  ];

  return (
    <section className="bg-navy-900 border-y border-gold-500/20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group flex flex-col items-center"
            >
              <div className="font-montserrat text-4xl sm:text-5xl font-extrabold text-gold-500 tracking-tight mb-2.5 transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-stone-300 max-w-[180px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
