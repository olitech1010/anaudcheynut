import Image from "next/image";

export function AwardsBar() {
  const awards = [
    { src: "/images/awards/chambers-hnw-2026.jpg", alt: "Chambers HNW" },
    { src: "/images/awards/legal500-leading.webp", alt: "Legal 500 Leading" },
    { src: "/images/awards/legal500-nextgen.webp", alt: "Legal 500 Nextgen" },
    { src: "/images/awards/leaders-league-ranked.jpg", alt: "Leaders League Ranked" },
    { src: "/images/awards/leaders-league-label.jpg", alt: "Leaders League Label" },
    { src: "/images/awards/chambers-global.jpg", alt: "Chambers Global" },
  ];

  return (
    <section className="bg-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gold-500 text-center uppercase tracking-widest text-sm font-semibold mb-8">
          Reconnaissances Internationales
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {awards.map((award, index) => (
            <div key={index} className="relative h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={award.src}
                alt={award.alt}
                width={150}
                height={80}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
