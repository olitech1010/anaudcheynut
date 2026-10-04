export type Locale = "fr" | "en";

export interface TranslationDictionary {
  nav: {
    home: string;
    expertise: string;
    about: string;
    fees: string;
    news: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    expertiseLinks: { name: string; href: string }[];
  };
  emergency: {
    badge: string;
    phone: string;
  };
  hero: {
    badge: string;
    slides: {
      heading: string;
      sub: string;
      alt: string;
    }[];
    ctaBook: string;
    ctaPhone: string;
    prevSlide: string;
    nextSlide: string;
    goToSlide: string;
  };
  awards: {
    title: string;
  };
  aboutSplit: {
    badge: string;
    heading: string;
    paragraph: string;
    stat1: string;
    stat2: string;
    stat3: string;
    cta: string;
  };
  practiceAreas: {
    badge: string;
    title: string;
    learnMore: string;
    viewAll: string;
    items: {
      title: string;
      description: string;
      slug: string;
      image: string;
    }[];
  };
  stats: {
    satisfaction: string;
    cases: string;
    experience: string;
    emergency: string;
  };
  process: {
    heading: string;
    headingLine1: string;
    headingLine2: string;
    headingLine3: string;
    headingLine4: string;
    sub: string;
    cta: string;
    urgency: string;
    steps: {
      num: number;
      title: string;
      description: string;
    }[];
  };
  ctaBanner: {
    heading: string;
    sub: string;
    cta: string;
  };
  contactPage: {
    title: string;
    breadcrumbsHome: string;
    breadcrumbsContact: string;
    formTitle: string;
    detailsTitle: string;
    addressTitle: string;
    addressLine1: string;
    addressLine2: string;
    phoneTitle: string;
    emailTitle: string;
    hoursTitle: string;
    hoursValue: string;
    hoursAppointment: string;
    mapCaption: string;
    mapPinTitle: string;
    mapPinSubtitle: string;
  };
  contactForm: {
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    practiceLabel: string;
    practicePlaceholder: string;
    practiceOther: string;
    messageLabel: string;
    messagePlaceholder: string;
    consentText: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successMessage: string;
    secrecyNotice: string;
  };
  footer: {
    title: string;
    role: string;
    accreditation: string;
    secrecy: string;
    expertiseTitle: string;
    officeTitle: string;
    addressLine1: string;
    addressLine2: string;
    hoursTitle: string;
    hoursWeekdays: string;
    hoursUrgency: string;
    ethicsTitle: string;
    ethicsText: string;
    contactButton: string;
    copyright: string;
    legalNotice: string;
    privacyPolicy: string;
    sitemap: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  fr: {
    nav: {
      home: "Accueil",
      expertise: "Expertise",
      about: "Le Cabinet",
      fees: "Honoraires",
      news: "Actualités",
      contact: "Contact",
      cta: "Prendre Rendez-vous",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      expertiseLinks: [
        { name: "Droit Pénal & Défense", href: "/expertise/droit-penal" },
        { name: "Droit Civil & Litiges", href: "/expertise/droit-civil" },
        { name: "Droit Commercial & SAM/SARL", href: "/expertise/droit-commercial" },
        { name: "Droit de la Famille & Patrimoine", href: "/expertise/droit-famille" },
        { name: "Référés d'Urgence & Mesures Conservatoires", href: "/expertise/procedures-urgence" },
        { name: "Arbitrage & Résolution de Conflits", href: "/expertise/arbitrage" },
        { name: "Droit Immobilier Monégasque", href: "/expertise/droit-immobilier" },
      ],
    },
    emergency: {
      badge: "Permanence Pénale & Référés d'Urgence en Principauté de Monaco",
      phone: "Ligne Directe 24/7 : +33 5 75 28 23 81",
    },
    hero: {
      badge: "Cabinet d'Avocat-Défenseur à Monaco",
      slides: [
        {
          heading: "Votre représentation devant les juridictions de la Principauté",
          sub: "Me Arnaud Cheynut, Avocat-Défenseur inscrit au Tableau de l'Ordre des Avocats de Monaco, assure votre défense et vos intérêts avec rigueur et confidentialité.",
          alt: "Me Arnaud Cheynut intervenant lors d'une conférence juridique à Monaco",
        },
        {
          heading: "Excellence juridique au service de vos intérêts",
          sub: "Reconnu par Leaders League et Legal 500, le cabinet déploie une expertise de premier plan en droit pénal, droit des affaires et contentieux civils monégasques.",
          alt: "Intervention lors d'un colloque à l'Institut Monégasque de Formation aux Professions Judiciaires",
        },
        {
          heading: "Un cabinet à l'image de son engagement",
          sub: "Situé au 9 rue du Gabian, le cabinet allie modernité et rigueur pour offrir un cadre de travail confidentiel et un accueil irréprochable.",
          alt: "Cabinet Arnaud Cheynut — accueil moderne au cœur du quartier du Gabian, Monaco",
        },
      ],
      ctaBook: "Prendre Rendez-vous",
      ctaPhone: "+33 5 75 28 23 81",
      prevSlide: "Diapositive précédente",
      nextSlide: "Diapositive suivante",
      goToSlide: "Aller à la diapositive",
    },
    awards: {
      title: "Reconnaissances Internationales",
    },
    aboutSplit: {
      badge: "LE CABINET",
      heading: "Me Arnaud Cheynut",
      paragraph: "En tant qu'Avocat-Défenseur, je vous assiste et vous représente devant toutes les juridictions de la Principauté de Monaco. Le cabinet s'engage à vous offrir une expertise juridique de haut niveau, alliant rigueur, confidentialité et réactivité.",
      stat1: "15+ Années d'Expérience",
      stat2: "Juridictions Monégasques",
      stat3: "24/7 Urgences Pénales",
      cta: "Découvrir le Cabinet →",
    },
    practiceAreas: {
      badge: "EXPERTISE",
      title: "Domaines d'Intervention",
      learnMore: "En savoir plus →",
      viewAll: "Voir tous les domaines d'expertise",
      items: [
        {
          title: "Droit Pénal",
          description: "Assistance et représentation à tous les stades de la procédure pénale, de la garde à vue au jugement.",
          slug: "droit-penal",
          image: "/images/headers/droit-penal.jpg",
        },
        {
          title: "Droit Civil",
          description: "Conseil et contentieux en matière de contrats, responsabilité civile et obligations.",
          slug: "droit-civil",
          image: "/images/headers/droit-civil.jpg",
        },
        {
          title: "Droit Commercial",
          description: "Accompagnement des entreprises dans leurs activités commerciales et résolution des litiges.",
          slug: "droit-commercial",
          image: "/images/headers/droit-commercial.jpg",
        },
        {
          title: "Droit de la Famille",
          description: "Divorce, séparation, garde d'enfants et successions avec une approche humaine et rigoureuse.",
          slug: "droit-famille",
          image: "/images/headers/droit-famille.jpg",
        },
      ],
    },
    stats: {
      satisfaction: "de clients satisfaits",
      cases: "dossiers traités",
      experience: "années d'expérience",
      emergency: "disponibles en urgence pénale",
    },
    process: {
      heading: "Une méthode claire, de votre premier appel à la décision finale",
      headingLine1: "Une méthode",
      headingLine2: "claire, de votre",
      headingLine3: "premier appel à la",
      headingLine4: "décision finale",
      sub: "Cinq étapes, un seul interlocuteur. Vous savez où en est votre dossier à chaque moment.",
      cta: "Prendre contact",
      urgency: "Urgence pénale : nous répondons 24h/24.",
      steps: [
        {
          num: 1,
          title: "Contact",
          description: "Prise de contact initiale et présentation de votre situation.",
        },
        {
          num: 2,
          title: "Consultation",
          description: "Entretien approfondi pour analyser les enjeux juridiques.",
        },
        {
          num: 3,
          title: "Stratégie",
          description: "Définition de la stratégie de défense ou d'action la plus adaptée.",
        },
        {
          num: 4,
          title: "Action",
          description: "Mise en œuvre des démarches amiables ou judiciaires.",
        },
        {
          num: 5,
          title: "Résolution",
          description: "Suivi jusqu'à la conclusion de l'affaire et exécution.",
        },
      ],
    },
    ctaBanner: {
      heading: "Vous avez besoin d'un Avocat-Défenseur ?",
      sub: "Contactez le Cabinet pour une consultation confidentielle",
      cta: "Prendre Rendez-vous",
    },
    contactPage: {
      title: "Contact",
      breadcrumbsHome: "Accueil",
      breadcrumbsContact: "Contact",
      formTitle: "Envoyer un Message",
      detailsTitle: "Coordonnées du Cabinet",
      addressTitle: "Adresse",
      addressLine1: "9 rue du Gabian, Phase III",
      addressLine2: "98000 Monaco (Fontvieille)",
      phoneTitle: "Téléphone",
      emailTitle: "Email",
      hoursTitle: "Horaires",
      hoursValue: "Lundi – Vendredi : 9h00 – 18h00",
      hoursAppointment: "Sur rendez-vous uniquement",
      mapCaption: "Fontvieille, Principauté de Monaco — Accès parking Phase III",
      mapPinTitle: "Me Arnaud Cheynut",
      mapPinSubtitle: "9 rue du Gabian · Fontvieille",
    },
    contactForm: {
      fullNameLabel: "Nom & Prénom",
      fullNamePlaceholder: "Ex : Jean Dupont",
      emailLabel: "Adresse Email",
      emailPlaceholder: "nom@exemple.com",
      phoneLabel: "Numéro de Téléphone",
      phonePlaceholder: "+377 ... ou +33 ...",
      practiceLabel: "Domaine Juridique Concerné",
      practicePlaceholder: "Sélectionnez un domaine...",
      practiceOther: "Autre / Non déterminé",
      messageLabel: "Description de votre Demande",
      messagePlaceholder: "Précisez brièvement l'objet de votre démarche...",
      consentText: "J'accepte que les informations saisies soient traitées par le Cabinet dans le cadre de ma demande de contact et de la relation client éventuelle.",
      submitButton: "Transmettre la Demande",
      submittingButton: "Transmission en cours...",
      successTitle: "Demande Transmise avec Succès",
      successMessage: "Votre demande a été transmise au cabinet. Me Cheynut ou un collaborateur prendra contact avec vous dans les plus brefs délais.",
      secrecyNotice: "Échanges protégés par le secret professionnel monégasque (Art. 308 CP)",
    },
    footer: {
      title: "Cabinet Me Arnaud Cheynut",
      role: "Avocat-Défenseur près la Cour d'Appel de Monaco",
      accreditation: "Inscrit au Tableau de l'Ordre des Avocats de Monaco. Représentation et conseil juridique de premier ordre pour les particuliers et les entreprises en Principauté.",
      secrecy: "Secret professionnel garanti (Art. 308 Code Pénal)",
      expertiseTitle: "Domaines d'Expertise",
      officeTitle: "Cabinet à Monaco",
      addressLine1: "9 rue du Gabian, Phase III",
      addressLine2: "Fontvieille, 98000 Monaco",
      hoursTitle: "Horaires d'ouverture :",
      hoursWeekdays: "Du lundi au vendredi : 08h30 – 19h00",
      hoursUrgency: "Urgences pénales & référés : 24h/24 – 7j/7",
      ethicsTitle: "Ordre & Déontologie",
      ethicsText: "La profession d'Avocat-Défenseur à Monaco est régie par la Loi n° 1.047 du 28 juillet 1982. Tous les actes sont couverts par le secret professionnel absolu et la responsabilité civile professionnelle obligatoire (RCP).",
      contactButton: "Contacter le Cabinet",
      copyright: "Tous droits réservés.",
      legalNotice: "Mentions Légales",
      privacyPolicy: "Politique de Confidentialité (RGPD)",
      sitemap: "Plan du Site",
    },
  },
  en: {
    nav: {
      home: "Home",
      expertise: "Practice Areas",
      about: "The Firm",
      fees: "Fees",
      news: "News",
      contact: "Contact",
      cta: "Book Consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      expertiseLinks: [
        { name: "Criminal Defense & Penal Law", href: "/expertise/droit-penal" },
        { name: "Civil Law & Litigation", href: "/expertise/droit-civil" },
        { name: "Commercial & Corporate Law", href: "/expertise/droit-commercial" },
        { name: "Family Law & Private Wealth", href: "/expertise/droit-famille" },
        { name: "Emergency Injunctions & Interim Relief", href: "/expertise/procedures-urgence" },
        { name: "Arbitration & Dispute Resolution", href: "/expertise/arbitrage" },
        { name: "Monegasque Real Estate Law", href: "/expertise/droit-immobilier" },
      ],
    },
    emergency: {
      badge: "24/7 Urgent Criminal Defense & Injunctions in Monaco",
      phone: "24/7 Direct Emergency Line: +33 5 75 28 23 81",
    },
    hero: {
      badge: "Law Firm of Avocat-Défenseur in Monaco",
      slides: [
        {
          heading: "Legal Representation Before the Courts of Monaco",
          sub: "Me Arnaud Cheynut, Avocat-Défenseur admitted to the Monaco Bar, defends your rights and interests with rigorous precision and absolute confidentiality.",
          alt: "Me Arnaud Cheynut speaking at a legal symposium in Monaco",
        },
        {
          heading: "Legal Excellence Dedicated to Your Interests",
          sub: "Recognized by Leaders League and Legal 500, the firm delivers premier expertise in criminal defense, corporate law, and Monegasque civil litigation.",
          alt: "Presentation at the Monegasque Institute for Judicial Training",
        },
        {
          heading: "A Law Firm Built on Commitment and Discretion",
          sub: "Located at 9 rue du Gabian, the firm combines modern practice with strict confidentiality and bespoke client service.",
          alt: "Arnaud Cheynut Law Firm — modern reception in Fontvieille, Monaco",
        },
      ],
      ctaBook: "Book a Consultation",
      ctaPhone: "+33 5 75 28 23 81",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      goToSlide: "Go to slide",
    },
    awards: {
      title: "International Recognitions",
    },
    aboutSplit: {
      badge: "THE FIRM",
      heading: "Me Arnaud Cheynut",
      paragraph: "As an Avocat-Défenseur, I advise and represent clients before all courts and authorities of the Principality of Monaco. The firm commits to delivering top-tier legal advocacy, uniting rigor, confidentiality, and prompt responsiveness.",
      stat1: "15+ Years of Experience",
      stat2: "Monegasque Jurisdictions",
      stat3: "24/7 Criminal Emergencies",
      cta: "Discover the Firm →",
    },
    practiceAreas: {
      badge: "EXPERTISE",
      title: "Areas of Practice",
      learnMore: "Learn More →",
      viewAll: "View All Practice Areas",
      items: [
        {
          title: "Criminal Defense",
          description: "Representation at all stages of criminal proceedings, from police custody to courtroom defense.",
          slug: "droit-penal",
          image: "/images/headers/droit-penal.jpg",
        },
        {
          title: "Civil Litigation",
          description: "Strategic counsel and litigation concerning contracts, civil liability, and tort law.",
          slug: "droit-civil",
          image: "/images/headers/droit-civil.jpg",
        },
        {
          title: "Commercial & Corporate",
          description: "Corporate guidance for Monegasque entities (SAM, SARL) and cross-border commercial litigation.",
          slug: "droit-commercial",
          image: "/images/headers/droit-commercial.jpg",
        },
        {
          title: "Family Law & Wealth",
          description: "Divorce, custody, international estate succession, and high-net-worth wealth protection.",
          slug: "droit-famille",
          image: "/images/headers/droit-famille.jpg",
        },
      ],
    },
    stats: {
      satisfaction: "client satisfaction rate",
      cases: "cases handled",
      experience: "years of experience",
      emergency: "available 24/7 in criminal emergencies",
    },
    process: {
      heading: "A Clear Methodology, from Your First Call to Final Resolution",
      headingLine1: "A clear",
      headingLine2: "methodology, from",
      headingLine3: "your first call to",
      headingLine4: "final resolution",
      sub: "Five steps, a single dedicated advocate. Know exactly where your case stands at all times.",
      cta: "Get in Touch",
      urgency: "Criminal emergency: available 24/7.",
      steps: [
        {
          num: 1,
          title: "Contact",
          description: "Initial consultation and comprehensive review of your situation.",
        },
        {
          num: 2,
          title: "Consultation",
          description: "In-depth strategic session to assess Monegasque legal implications.",
        },
        {
          num: 3,
          title: "Strategy",
          description: "Tailored defense strategy and legal roadmap development.",
        },
        {
          num: 4,
          title: "Action",
          description: "Execution of settlement negotiations or litigation before Monaco courts.",
        },
        {
          num: 5,
          title: "Resolution",
          description: "Dedicated follow-through until final judgment execution or settlement.",
        },
      ],
    },
    ctaBanner: {
      heading: "Do You Need an Avocat-Défenseur in Monaco?",
      sub: "Contact the Firm for a Confidential Consultation",
      cta: "Book a Consultation",
    },
    contactPage: {
      title: "Contact",
      breadcrumbsHome: "Home",
      breadcrumbsContact: "Contact",
      formTitle: "Send a Message",
      detailsTitle: "Firm Contact Information",
      addressTitle: "Address",
      addressLine1: "9 rue du Gabian, Phase III",
      addressLine2: "98000 Monaco (Fontvieille)",
      phoneTitle: "Phone",
      emailTitle: "Email",
      hoursTitle: "Office Hours",
      hoursValue: "Monday – Friday: 9:00 AM – 6:00 PM",
      hoursAppointment: "By appointment only",
      mapCaption: "Fontvieille, Principality of Monaco — Phase III Parking Access",
      mapPinTitle: "Me Arnaud Cheynut",
      mapPinSubtitle: "9 rue du Gabian · Fontvieille",
    },
    contactForm: {
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g., John Smith",
      emailLabel: "Email Address",
      emailPlaceholder: "name@example.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+377 ... or +33 ...",
      practiceLabel: "Practice Area Concerned",
      practicePlaceholder: "Select a practice area...",
      practiceOther: "Other / Unspecified",
      messageLabel: "Description of Your Request",
      messagePlaceholder: "Briefly outline your situation and objectives...",
      consentText: "I agree that the submitted information may be processed by the Firm for the purpose of handling my inquiry.",
      submitButton: "Submit Inquiry",
      submittingButton: "Transmitting...",
      successTitle: "Inquiry Sent Successfully",
      successMessage: "Your inquiry has been received by the firm. Me Cheynut or an associate will respond to you shortly.",
      secrecyNotice: "All exchanges protected by Monegasque professional secrecy (Art. 308 CP)",
    },
    footer: {
      title: "Cabinet Me Arnaud Cheynut",
      role: "Avocat-Défenseur before the Court of Appeal of Monaco",
      accreditation: "Admitted to the Monaco Bar Association. Premier legal representation and counsel for individuals and corporations in the Principality.",
      secrecy: "Professional secrecy strictly guaranteed (Art. 308 Criminal Code)",
      expertiseTitle: "Practice Areas",
      officeTitle: "Offices in Monaco",
      addressLine1: "9 rue du Gabian, Phase III",
      addressLine2: "Fontvieille, 98000 Monaco",
      hoursTitle: "Opening hours:",
      hoursWeekdays: "Monday to Friday: 8:30 AM – 7:00 PM",
      hoursUrgency: "Criminal emergencies & injunctions: 24/7",
      ethicsTitle: "Bar & Ethics",
      ethicsText: "The profession of Avocat-Défenseur in Monaco is governed by Law no. 1.047 of July 28, 1982. All counsel is protected by absolute professional privilege and mandatory professional indemnity insurance.",
      contactButton: "Contact the Firm",
      copyright: "All rights reserved.",
      legalNotice: "Legal Notices",
      privacyPolicy: "Privacy Policy (GDPR)",
      sitemap: "Site Map",
    },
  },
};
