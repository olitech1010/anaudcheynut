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
  aboutPage: {
    title: string;
    subtitle: string;
    breadcrumb: string;
    bioTitle: string;
    bioP1: string;
    bioP2: string;
    awardsTitle: string;
    environmentTitle: string;
    conferencesTitle: string;
  };
  expertisePage: {
    title: string;
    subtitle: string;
    breadcrumb: string;
    learnMore: string;
    practices: {
      slug: string;
      title: string;
      desc: string;
      image: string;
    }[];
  };
  expertiseDetail: {
    breadcrumbHome: string;
    breadcrumbExpertise: string;
    frameworkTitle: string;
    interventionsTitle: string;
    methodologyTitle: string;
    step: string;
    sidebarTitle: string;
    sidebarText: string;
    sidebarCta: string;
    sidebarUrgencyTitle: string;
    sidebarUrgencyText: string;
  };
  feesPage: {
    title: string;
    subtitle: string;
    breadcrumb: string;
    conventionTitle: string;
    conventionText: string;
    conventionBullets: string[];
    modelsTitle: string;
    modelsSubtitle: string;
    advantagesTitle: string;
    rulesTitle: string;
    rulesText: string;
    ctaTitle: string;
    ctaText: string;
    ctaBtn: string;
    fixedFeeTitle: string;
    fixedFeeDesc: string;
    fixedFeeAdvantages: string[];
    hourlyTitle: string;
    hourlyDesc: string;
    hourlyAdvantages: string[];
    successTitle: string;
    successDesc: string;
    successAdvantages: string[];
  };
  actualitesPage: {
    title: string;
    subtitle: string;
    breadcrumb: string;
    allArticles: string;
    readMore: string;
    minRead: string;
    backToNews: string;
  };
  chatWidget: {
    title: string;
    subtitle: string;
    greeting: string;
    placeholder: string;
    disclaimer: string;
    bookCta: string;
    voiceMode: string;
    send: string;
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
    aboutPage: {
      title: "Le Cabinet",
      subtitle: "Rigueur, Confiance et Excellence à Monaco",
      breadcrumb: "Le Cabinet",
      bioTitle: "Me Arnaud Cheynut",
      bioP1: "Avocat-Défenseur inscrit au Tableau de l'Ordre des Avocats de Monaco, Me Arnaud Cheynut met son expertise au service d'une clientèle locale et internationale.",
      bioP2: "Fort d'une solide expérience devant les juridictions de la Principauté, le cabinet intervient tant en conseil qu'en contentieux, avec une approche pragmatique et personnalisée pour chaque dossier.",
      awardsTitle: "Nos Reconnaissances",
      environmentTitle: "Notre Environnement",
      conferencesTitle: "Conférences et Interventions",
    },
    expertisePage: {
      title: "Domaines d'Expertise",
      subtitle: "Conseil et Contentieux devant les Juridictions Monégasques",
      breadcrumb: "Expertise",
      learnMore: "En savoir plus →",
      practices: [
        { title: "Droit Pénal", slug: "droit-penal", image: "/images/headers/droit-penal.jpg", desc: "Défense pénale d'urgence, assistance en garde à vue et représentation devant les tribunaux répressifs monégasques." },
        { title: "Droit Civil", slug: "droit-civil", image: "/images/headers/droit-civil.jpg", desc: "Responsabilité, contentieux contractuels et réparation des préjudices devant le Tribunal de Première Instance." },
        { title: "Droit Commercial", slug: "droit-commercial", image: "/images/headers/droit-commercial.jpg", desc: "Accompagnement des sociétés (SAM, SARL), contrats d'affaires et résolution des litiges commerciaux." },
        { title: "Droit de la Famille", slug: "droit-famille", image: "/images/headers/droit-famille.jpg", desc: "Divorces, séparations, successions internationales et gestion patrimoniale privée avec rigueur." },
        { title: "Procédures d'Urgence", slug: "procedures-urgence", image: "/images/headers/procedures-urgence.jpg", desc: "Référés d'heure à heure, saisies conservatoires et mesures d'instruction d'urgence." },
        { title: "Arbitrage", slug: "arbitrage", image: "/images/headers/arbitrage.jpg", desc: "Modes alternatifs de règlement des conflits et arbitrage commercial international." },
        { title: "Droit Immobilier", slug: "droit-immobilier", image: "/images/headers/droit-immobilier.jpg", desc: "Baux d'habitation et commerciaux, copropriété, transactions et contentieux de la construction à Monaco." },
      ],
    },
    expertiseDetail: {
      breadcrumbHome: "Accueil",
      breadcrumbExpertise: "Domaines d'Expertise",
      frameworkTitle: "Cadre Juridique & Pratique Monégasque",
      interventionsTitle: "Nos Domaines d'Intervention Clés",
      methodologyTitle: "Notre Démarche Procédurale",
      step: "Étape",
      sidebarTitle: "Confier votre Dossier",
      sidebarText: "Le Cabinet vous assiste avec réactivité, rigueur et stricte confidentialité à chaque étape de votre procédure.",
      sidebarCta: "Prendre Rendez-vous",
      sidebarUrgencyTitle: "Permanence d'Urgence 24/7",
      sidebarUrgencyText: "Garde à vue, perquisition, référé d'urgence en Principauté de Monaco.",
    },
    feesPage: {
      title: "Honoraires",
      subtitle: "Transparence, Prévisibilité et Rigueur Déontologique",
      breadcrumb: "Honoraires",
      conventionTitle: "Convention d'Honoraires Préalable",
      conventionText: "Conformément aux usages de l'Ordre des Avocats de Monaco et aux obligations déontologiques de la profession, Me Arnaud Cheynut remet systématiquement une convention d'honoraires écrite avant toute prise en charge d'un dossier. Ce document précise :",
      conventionBullets: [
        "Le périmètre exact et les objectifs de la mission confiée au Cabinet",
        "Le mode de facturation retenu (forfait, taux horaire ou honoraire de résultat)",
        "Les modalités de règlement et l'estimation prévisionnelle des frais de procédure et débours",
        "L'application des règles de déontologie et du secret professionnel monégasque",
      ],
      modelsTitle: "Nos Modes de Facturation",
      modelsSubtitle: "Trois modalités adaptées à la nature de chaque dossier et aux attentes de nos clients",
      advantagesTitle: "Avantages :",
      rulesTitle: "Cadre Déontologique & Secret Professionnel",
      rulesText: "La fixation des honoraires de l'Avocat-Défenseur à Monaco est régie par la Loi n° 1.047 du 28 juillet 1982 et les règles professionnelles de l'Ordre des Avocats. Les honoraires tiennent compte de la difficulté de l'affaire, du temps consacré, des intérêts en jeu et de la notoriété du Cabinet.",
      ctaTitle: "Besoin d'une estimation pour votre dossier ?",
      ctaText: "Contactez le Cabinet pour un premier échange confidentiel et l'établissement d'une proposition d'honoraires sur mesure.",
      ctaBtn: "Prendre Rendez-vous",
      fixedFeeTitle: "Honoraire Forfaitaire",
      fixedFeeDesc: "Un montant global est convenu avant toute intervention pour les missions dont le périmètre est clairement délimité : rédaction de contrats, constitution de sociétés, consultation juridique ponctuelle, assistance en garde à vue.",
      fixedFeeAdvantages: [
        "Prévisibilité totale des coûts pour le client",
        "Adapté aux missions à périmètre défini",
        "Montant fixé dans la convention d'honoraires préalable",
      ],
      hourlyTitle: "Facturation au Temps Passé",
      hourlyDesc: "Le taux horaire est communiqué préalablement et appliqué au temps effectivement consacré au dossier. Un relevé détaillé des diligences est remis à chaque facturation. Ce mode est privilégié pour les contentieux dont la durée et la complexité sont difficilement prévisibles.",
      hourlyAdvantages: [
        "Transparence grâce au relevé détaillé des diligences",
        "Adapté aux contentieux complexes ou évolutifs",
        "Taux horaire fixé dès la convention initiale",
      ],
      successTitle: "Honoraire Complémentaire de Résultat",
      successDesc: "En complément d'un honoraire de base (forfait ou temps passé), un honoraire additionnel proportionnel au résultat obtenu peut être convenu. Ce mode de rémunération est encadré par les règles déontologiques de l'Ordre des Avocats de Monaco et suppose un résultat effectivement atteint.",
      successAdvantages: [
        "Alignement des intérêts entre le Cabinet et le client",
        "Encadré par les règles déontologiques de l'Ordre",
        "Toujours complémentaire à un honoraire de base",
      ],
    },
    actualitesPage: {
      title: "Actualités",
      subtitle: "Analyses juridiques et veille réglementaire en Principauté de Monaco",
      breadcrumb: "Actualités",
      allArticles: "Tous les Articles",
      readMore: "Lire l'article →",
      minRead: "min de lecture",
      backToNews: "← Retour aux actualités",
    },
    chatWidget: {
      title: "Assistant Virtuel — Cabinet Cheynut",
      subtitle: "Disponible 24h/24 & 7j/7",
      greeting: "Bonjour. Je suis l'assistant du Cabinet de Me Arnaud Cheynut. Comment puis-je vous renseigner aujourd'hui ?",
      placeholder: "Posez votre question juridique...",
      disclaimer: "Les réponses sont fournies à titre indicatif et ne constituent pas un conseil juridique formel.",
      bookCta: "Prendre Rendez-vous",
      voiceMode: "Mode vocal",
      send: "Envoyer",
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
    aboutPage: {
      title: "The Firm",
      subtitle: "Rigor, Trust and Legal Excellence in Monaco",
      breadcrumb: "The Firm",
      bioTitle: "Me Arnaud Cheynut",
      bioP1: "Admitted as an Avocat-Défenseur to the Monaco Bar Association, Me Arnaud Cheynut provides top-tier legal advocacy and counsel to domestic and international clients.",
      bioP2: "With deep-seated courtroom experience before Monegasque jurisdictions, the firm handles both strategic advisory and complex litigation with an exacting, tailored approach to every matter.",
      awardsTitle: "Our Recognitions",
      environmentTitle: "Our Environment",
      conferencesTitle: "Conferences & Public Speaking",
    },
    expertisePage: {
      title: "Practice Areas",
      subtitle: "Strategic Counsel & Courtroom Defense in Monaco",
      breadcrumb: "Practice Areas",
      learnMore: "Learn More →",
      practices: [
        { title: "Criminal Defense", slug: "droit-penal", image: "/images/headers/droit-penal.jpg", desc: "Urgent criminal defense, 24/7 custody assistance, and trial representation before Monegasque penal courts." },
        { title: "Civil Litigation", slug: "droit-civil", image: "/images/headers/droit-civil.jpg", desc: "Contract disputes, tort liability, damages claims, and representation before the Court of First Instance." },
        { title: "Commercial & Corporate", slug: "droit-commercial", image: "/images/headers/droit-commercial.jpg", desc: "Corporate guidance for Monegasque entities (SAM, SARL), commercial contracts, and shareholder dispute resolution." },
        { title: "Family Law & Private Wealth", slug: "droit-famille", image: "/images/headers/droit-famille.jpg", desc: "High-net-worth divorce, international estate succession, child custody, and private family asset protection." },
        { title: "Emergency Injunctions", slug: "procedures-urgence", image: "/images/headers/procedures-urgence.jpg", desc: "Hour-by-hour summary proceedings, conservatory asset freezes, and emergency judicial measures." },
        { title: "Arbitration & ADR", slug: "arbitrage", image: "/images/headers/arbitrage.jpg", desc: "Alternative dispute resolution, domestic and international commercial arbitration proceedings." },
        { title: "Monegasque Real Estate Law", slug: "droit-immobilier", image: "/images/headers/droit-immobilier.jpg", desc: "Commercial & residential leases, co-ownership regulations, acquisitions, and construction litigation in Monaco." },
      ],
    },
    expertiseDetail: {
      breadcrumbHome: "Home",
      breadcrumbExpertise: "Practice Areas",
      frameworkTitle: "Monegasque Legal Framework & Practice",
      interventionsTitle: "Key Areas of Intervention",
      methodologyTitle: "Our Procedural Methodology",
      step: "Step",
      sidebarTitle: "Entrust Your Legal Matter",
      sidebarText: "The firm assists you with responsiveness, rigor, and absolute confidentiality at every stage of your proceeding.",
      sidebarCta: "Book a Consultation",
      sidebarUrgencyTitle: "24/7 Emergency Line",
      sidebarUrgencyText: "Police custody, searches, urgent summary proceedings in the Principality of Monaco.",
    },
    feesPage: {
      title: "Fees & Billing",
      subtitle: "Transparency, Predictability and Strict Professional Ethics",
      breadcrumb: "Fees",
      conventionTitle: "Prior Written Fee Agreement",
      conventionText: "In accordance with the standards of the Monaco Bar Association and professional conduct rules, Me Arnaud Cheynut systematically issues a prior written fee agreement before accepting any engagement. This agreement outlines:",
      conventionBullets: [
        "The precise scope and strategic objectives of the engagement",
        "The chosen billing arrangement (fixed fee, hourly rate, or success fee)",
        "Payment terms, anticipated court costs, disbursements, and registration fees",
        "The application of Monegasque professional secrecy and ethics regulations",
      ],
      modelsTitle: "Our Billing Arrangements",
      modelsSubtitle: "Three billing models tailored to the nature of your case and your specific requirements",
      advantagesTitle: "Key Benefits:",
      rulesTitle: "Ethical Framework & Professional Privilege",
      rulesText: "The determination of legal fees for an Avocat-Défenseur in Monaco is governed by Law no. 1.047 of July 28, 1982, and the rules of the Monaco Bar Association. Fees reflect the complexity of the matter, time invested, the financial stakes, and the firm's specialized expertise.",
      ctaTitle: "Need an Estimate for Your Legal Matter?",
      ctaText: "Contact the firm for a confidential initial review and a customized fee proposal.",
      ctaBtn: "Book a Consultation",
      fixedFeeTitle: "Fixed Fee",
      fixedFeeDesc: "A lump-sum fee agreed in advance for engagements with a clearly defined scope: contract drafting, company formation, targeted legal consultations, and emergency police custody defense.",
      fixedFeeAdvantages: [
        "Total cost predictability for the client",
        "Ideal for engagements with well-defined parameters",
        "Amount explicitly fixed in the prior written fee agreement",
      ],
      hourlyTitle: "Hourly Rate",
      hourlyDesc: "The hourly rate is specified in advance and billed for time actually dedicated to your matter. A detailed breakdown of all actions is provided with every invoice. This method is standard for complex litigation with evolving timelines.",
      hourlyAdvantages: [
        "Full transparency with itemized diligence reports",
        "Well suited for complex or evolving dispute proceedings",
        "Hourly rate agreed in the initial engagement terms",
      ],
      successTitle: "Complementary Success Fee",
      successDesc: "In addition to a base fee (fixed or hourly), an additional fee contingent on achieved results may be agreed upon. This structure adheres strictly to the ethical rules of the Monaco Bar and requires a demonstrable successful outcome.",
      successAdvantages: [
        "Direct alignment of interests between client and firm",
        "Strictly supervised by Monaco Bar Association rules",
        "Always structured as an addition to a base fee",
      ],
    },
    actualitesPage: {
      title: "Legal News & Insights",
      subtitle: "Legal analysis and regulatory updates in the Principality of Monaco",
      breadcrumb: "News",
      allArticles: "All Articles",
      readMore: "Read Article →",
      minRead: "min read",
      backToNews: "← Back to News",
    },
    chatWidget: {
      title: "Virtual Assistant — Cabinet Cheynut",
      subtitle: "Available 24/7",
      greeting: "Hello. I am the virtual assistant of Me Arnaud Cheynut's law firm. How may I assist you today?",
      placeholder: "Ask your legal question...",
      disclaimer: "Information provided for informational purposes only; does not constitute formal legal counsel.",
      bookCta: "Book a Consultation",
      voiceMode: "Voice mode",
      send: "Send",
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
