export interface ProcedureStep {
  step: number;
  title: string;
  description: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  order: number;
  keyInterventions: string[];
  procedureSteps: ProcedureStep[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "droit-penal",
    title: "Droit Pénal & Défense Répressive",
    titleEn: "Criminal Defense & Regulatory Enforcement",
    summary:
      "Assistance immédiate en garde à vue, instruction correctionnelle et criminelle, plaidoiries devant les juridictions monégasques.",
    summaryEn:
      "Immediate assistance in police custody, judicial investigations, and representation before Monegasque criminal courts.",
    description:
      "Le Cabinet de Me Arnaud Cheynut intervient à chaque étape de la procédure répressive en Principauté de Monaco. De la première heure de garde à vue auprès de la Direction de la Sûreté Publique jusqu'aux débats devant le Tribunal Correctionnel, la Cour d'Appel et la Cour de Révision, le Cabinet déploie une stratégie rigoureuse fondée sur le respect scrupuleux des droits de la défense.",
    descriptionEn:
      "The Cabinet provides comprehensive criminal defense at every stage of proceedings in the Principality of Monaco, from police custody through trials before the Court of First Instance, the Court of Appeal, and the Revision Court.",
    icon: "Scale",
    order: 1,
    keyInterventions: [
      "Assistance en garde à vue 24h/24 et auditions de police",
      "Instruction criminelle et financière devant le Juge d'instruction",
      "Défense devant le Tribunal de Première Instance et Correctionnel",
      "Infractions économiques, abus de confiance et blanchiment (LCB-FT)",
      "Procédures d'extradition et mandats d'arrêt internationaux",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Intervention Immédiate",
        description:
          "Mobilisation sous 1 heure en cas de garde à vue ou de notification d'ouverture d'information judiciaire.",
      },
      {
        step: 2,
        title: "Audit Procédural du Dossier",
        description:
          "Examen méticuleux des procès-verbaux, vérification de la régularité des actes et nullités de procédure.",
      },
      {
        step: 3,
        title: "Stratégie de Défense Dédiée",
        description:
          "Élaboration d'une argumentation sur mesure adaptée aux spécificités de la jurisprudence monégasque.",
      },
      {
        step: 4,
        title: "Plaidoirie & Représentation",
        description:
          "Assistance personnelle et plaidoiries orales devant les magistrats de la Principauté.",
      },
      {
        step: 5,
        title: "Recours & Exécution",
        description:
          "Suivi des délais d'appel, pourvois en révision et aménagements de peine.",
      },
    ],
  },
  {
    slug: "droit-civil",
    title: "Droit Civil & Contentieux Judiciaire",
    titleEn: "Civil Law & Judicial Litigation",
    summary:
      "Règlement des litiges contractuels, responsabilité civile, voies d'exécution et réparation du préjudice.",
    summaryEn:
      "Contractual disputes, civil liability, debt recovery, and enforcement of foreign judgments.",
    description:
      "Le droit civil monégasque, bien que d'inspiration napoléonienne, possède des spécificités substantielles et procédurales propres. Me Arnaud Cheynut vous conseille et vous représente dans la gestion des litiges complexes, l'inexécution contractuelle, et l'exequatur des décisions judiciaires étrangères en Principauté.",
    descriptionEn:
      "Advisory and representation in contractual breach, tort liability, complex civil litigation, and exequatur of foreign court decisions in Monaco.",
    icon: "FileText",
    order: 2,
    keyInterventions: [
      "Contentieux de la responsabilité contractuelle et délictuelle",
      "Exequatur de jugements étrangers en Principauté",
      "Mesures d'exécution forcée et saisies conservatoires",
      "Litiges bancaires et financiers",
      "Recouvrement de créances complexes",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Analyse Contractuelle",
        description: "Évaluation de la solidité des engagements et identification des risques de contentieux.",
      },
      {
        step: 2,
        title: "Phase Pré-Contentieuse",
        description: "Mise en demeure formelle et négociation confidentielle pour privilégier un accord amiable.",
      },
      {
        step: 3,
        title: "Assignation en Justice",
        description: "Rédaction des écritures et saisine formelle du Tribunal de Première Instance.",
      },
      {
        step: 4,
        title: "Instruction Civile",
        description: "Échange des conclusions et production des pièces justificatives devant la juridiction.",
      },
      {
        step: 5,
        title: "Exécution du Jugement",
        description: "Coordination avec les Huissiers de Justice monégasques pour exécution rapide.",
      },
    ],
  },
  {
    slug: "droit-commercial",
    title: "Droit Commercial & Sociétés (SAM / SARL)",
    titleEn: "Corporate & Commercial Law",
    summary:
      "Constitution de sociétés, restructurations, cessions de fonds de commerce et gouvernance en Principauté.",
    summaryEn:
      "Company formation (SAM/SARL), governance, acquisitions, and commercial litigation in Monaco.",
    description:
      "L'exercice d'une activité économique en Principauté est soumis à des agréments gouvernementaux stricts. Me Arnaud Cheynut accompagne les entrepreneurs, groupes internationaux et family offices dans la constitution de sociétés monégasques (SAM, SARL, SCS), l'obtention des autorisations administratives et la résolution des conflits entre actionnaires.",
    descriptionEn:
      "Comprehensive corporate counsel: government authorizations, corporate structuring (SAM, SARL), shareholder agreements, and M&A in Monaco.",
    icon: "Building2",
    order: 3,
    keyInterventions: [
      "Constitution de SAM, SARL et succursales en Principauté",
      "Dossiers d'agrément auprès de la Direction de l'Expansion Économique",
      "Pactes d'actionnaires et gouvernance d'entreprise",
      "Cessions de fonds de commerce et baux commerciaux",
      "Contentieux entre associés et responsabilité des dirigeants",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Cadrage Stratégique",
        description: "Choix de la forme sociale et analyse de faisabilité réglementaire monégasque.",
      },
      {
        step: 2,
        title: "Instruction Administrative",
        description: "Constitution du dossier et dépôt auprès du Département des Finances et de l'Économie.",
      },
      {
        step: 3,
        title: "Formalités Notariées",
        description: "Coordination avec les études notariales monégasques pour la signature des statuts.",
      },
      {
        step: 4,
        title: "Immatriculation au RCI",
        description: "Publication au Journal de Monaco et inscription au Répertoire du Commerce et de l'Industrie.",
      },
      {
        step: 5,
        title: "Suivi Annuel & Gouvernance",
        description: "Assemblées générales, conformité continue et conseil stratégique.",
      },
    ],
  },
  {
    slug: "droit-famille",
    title: "Droit de la Famille & Patrimoine Privé",
    titleEn: "Family Law & Private Wealth",
    summary:
      "Divorces internationaux, successions transfrontalières, régimes matrimoniaux et protection des personnes vulnérables.",
    summaryEn:
      "International divorce, cross-border estates, marital regimes, and private asset structuring.",
    description:
      "En raison du caractère cosmopolite de la Principauté, les dossiers familiaux impliquent fréquemment plusieurs ordres juridiques nationaux. Me Arnaud Cheynut assure une prise en charge sur mesure, combinant discrétion absolue, négociation patrimoniale de haut niveau et défense pugnace de vos intérêts personnels et patrimoniaux.",
    descriptionEn:
      "Discreet and strategic counsel for high-net-worth families, cross-border divorces, and international estate succession under Monaco private international law.",
    icon: "Users",
    order: 4,
    keyInterventions: [
      "Divorces contentieux et par consentement mutuel",
      "Liquidation et partage de régimes matrimoniaux complexes",
      "Successions internationales et planification successorale",
      "Protection des majeurs protégés (tutelle, curatelle)",
      "Fixation et révision des pensions alimentaires et prestations compensatoires",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Entretien Confidentiel",
        description: "Écoute attentive des enjeux humains et cartographie patrimoniale détaillée.",
      },
      {
        step: 2,
        title: "Détermination de la Compétence",
        description: "Vérification des critères de rattachement du droit international privé monégasque.",
      },
      {
        step: 3,
        title: "Mesures Provisoires",
        description: "Organisation de la résidence séparée, garde des enfants et fixation des avances financières.",
      },
      {
        step: 4,
        title: "Négociation Patrimoniale",
        description: "Élaboration d'une convention financière ou plaidoirie au fond sur la liquidation.",
      },
      {
        step: 5,
        title: "Jugement Définitif",
        description: "Homologation ou décision au fond avec transcription à l'état civil monégasque.",
      },
    ],
  },
  {
    slug: "procedures-urgence",
    title: "Procédures d'Urgence & Référés",
    titleEn: "Emergency Injunctions & Summary Proceedings",
    summary:
      "Intervention en référé d'heure à heure, saisies conservatoires d'actifs et requêtes unilatérales.",
    summaryEn:
      "Urgent judicial injunctions, emergency asset freezing orders, and ex parte applications.",
    description:
      "Lorsque le temps est un facteur critique pour éviter un préjudice irréparable, le Cabinet Me Arnaud Cheynut active les procédures d'urgence prévues par le Code de Procédure Civile monégasque. Référé provision, suspension de mesures conservatoires, ou ordonnances sur requête sans débat contradictoire initial pour geler des actifs à risque.",
    descriptionEn:
      "Immediate action to prevent irreparable damage: emergency freeze orders, provisional summary injunctions, and urgent petitions before the President of the Monaco Court.",
    icon: "Clock",
    order: 5,
    keyInterventions: [
      "Référés d'heure à heure devant le Président du Tribunal",
      "Saisies conservatoires de comptes bancaires et biens mobiliers",
      "Requêtes unilatérales en constat d'urgence",
      "Mesures d'instruction in futurum (préservation des preuves)",
      "Opposition à commandement et suspension des poursuites",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Alerte & Diagnostic 24/7",
        description: "Évaluation en urgence de l'imminence du péril ou de la gravité du préjudice.",
      },
      {
        step: 2,
        title: "Rédaction Immédiate",
        description: "Élaboration sous 12h de la requête ou de l'assignation en référé.",
      },
      {
        step: 3,
        title: "Signification par Huissier",
        description: "Délivrance de l'acte d'urgence par voie d'Huissier de Justice territorialement compétent.",
      },
      {
        step: 4,
        title: "Audience de Référé",
        description: "Plaidoirie immédiate devant le juge de l'urgence.",
      },
      {
        step: 5,
        title: "Exécution Immédiate",
        description: "Application exécutoire à titre provisoire de l'ordonnance obtenue.",
      },
    ],
  },
  {
    slug: "arbitrage",
    title: "Arbitrage & Mode Alternatif de Règlement des Conflits",
    titleEn: "Arbitration & Alternative Dispute Resolution",
    summary:
      "Médiation commerciale, arbitrage ad hoc ou institutionnel, sentences arbitrales et recours en annulation.",
    summaryEn:
      "Commercial mediation, domestic and international arbitration, enforcement and annulment proceedings.",
    description:
      "Pour les litiges commerciaux internationaux nécessitant confidentialité absolue et rapidité de décision, Me Arnaud Cheynut intervient en qualité de conseil devant les tribunaux arbitraux. Le Cabinet maîtrise l'ensemble du cycle arbitral, de la rédaction de la clause compromissoire à l'exequatur ou au recours contre la sentence.",
    descriptionEn:
      "Strategic counsel for institutional and ad hoc arbitration, ensuring absolute business confidentiality and rapid resolution.",
    icon: "Handshake",
    order: 6,
    keyInterventions: [
      "Rédaction de clauses compromissoires et clauses de médiation",
      "Représentation dans les arbitrages ad hoc et institutionnels (CCI, etc.)",
      "Recours en annulation contre les sentences arbitrales à Monaco",
      "Procédures d'exequatur de sentences étrangères",
      "Médiation conventionnelle et judiciaire",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Examen de la Clause",
        description: "Vérification de la validité de la convention d'arbitrage et du périmètre du litige.",
      },
      {
        step: 2,
        title: "Constitution du Tribunal",
        description: "Sélection et récusation éventuelle des arbitres.",
      },
      {
        step: 3,
        title: "Mémoires Arbitraux",
        description: "Rédaction des mémoires en demande et en défense avec soumission des pièces probatoires.",
      },
      {
        step: 4,
        title: "Audience Finale",
        description: "Plaidoirie et interrogatoire des témoins et experts devant les arbitres.",
      },
      {
        step: 5,
        title: "Homologation de la Sentence",
        description: "Obtention de l'ordonnance d'exequatur pour exécution matérielle.",
      },
    ],
  },
  {
    slug: "droit-immobilier",
    title: "Droit Immobilier & Baux Monégasques",
    titleEn: "Monegasque Real Estate & Leaseholds",
    summary:
      "Transactions immobilières de prestige, baux d'habitation et commerciaux, copropriété et contentieux de la construction.",
    summaryEn:
      "Prime residential acquisitions, lease structuring (protected vs free sector), co-ownership, and construction disputes.",
    description:
      "Le marché immobilier monégasque présente un encadrement législatif singulier, distinguant notamment le secteur libre du secteur protégé (loi n° 1.235). Me Arnaud Cheynut conseille acquéreurs, propriétaires et investisseurs institutionnels pour sécuriser leurs transactions et défendre leurs droits en matière de copropriété et de baux.",
    descriptionEn:
      "Specialized legal counsel for high-value Monaco residential purchases, leasehold compliance, and co-ownership litigation.",
    icon: "Home",
    order: 7,
    keyInterventions: [
      "Sécurisation des promesses d'achat et actes d'acquisition",
      "Rédaction et contentieux des baux en secteur libre et secteur protégé",
      "Contentieux de la copropriété et assemblées générales de copropriétaires",
      "Responsabilité des constructeurs, architectes et garanties décennales",
      "Conseil juridique pour l'obtention de la résidence par voie d'acquisition",
    ],
    procedureSteps: [
      {
        step: 1,
        title: "Audit Juridique Préliminaire",
        description: "Vérification des titres de propriété, servitudes et règles de copropriété.",
      },
      {
        step: 2,
        title: "Négociation & Avant-Contrat",
        description: "Rédaction des conditions suspensives sur mesure et assistance à la signature de la promesse.",
      },
      {
        step: 3,
        title: "Accompagnement Notarié",
        description: "Supervision des formalités auprès de l'Office Notarial monégasque désigné.",
      },
      {
        step: 4,
        title: "Gestion Locative Sécurisée",
        description: "Mise en place de baux conformes aux lois n° 1.235 ou secteur libre.",
      },
      {
        step: 5,
        title: "Défense Contentieuse",
        description: "Représentation devant la Commission Arbitrale des Loyers et le Tribunal.",
      },
    ],
  },
];
