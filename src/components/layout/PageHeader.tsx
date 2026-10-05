"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage: string;
}

export function PageHeader({ title, subtitle, breadcrumbs, backgroundImage }: PageHeaderProps) {
  const { lang, t } = useLanguage();

  const formatBreadcrumb = (label: string) => {
    if (label.toLowerCase() === "accueil") return t.nav.home;
    if (label.toLowerCase() === "le cabinet") return t.nav.about;
    if (label.toLowerCase() === "expertise" || label.toLowerCase() === "domaines d'expertise") return t.nav.expertise;
    if (label.toLowerCase() === "honoraires") return t.nav.fees;
    if (label.toLowerCase() === "actualités") return t.nav.news;
    if (label.toLowerCase() === "contact") return t.nav.contact;
    return label;
  };

  return (
    <section className="relative h-[260px] sm:h-[320px] md:h-[360px] flex items-end overflow-hidden">
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/65 to-navy-900/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12 w-full">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-stone-300/80 mb-2.5 sm:mb-3" aria-label="Fil d'Ariane">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    {formatBreadcrumb(crumb.label)}
                  </Link>
                ) : (
                  <span className="text-stone-100 font-medium">{formatBreadcrumb(crumb.label)}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-stone-200/90 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
