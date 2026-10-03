export interface ArticleCategory {
  slug: string;
  name: string;
  nameEn: string;
}

export interface Article {
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  publishedAt: string;
  readingTimeMinutes: number;
  author: string;
  relatedPracticeAreaSlug: string;
}

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  {
    slug: "jurisprudence-monaco",
    name: "Jurisprudence & Procédure",
    nameEn: "Case Law & Procedure",
  },
  {
    slug: "penal-affaires",
    name: "Pénal des Affaires & Conformité",
    nameEn: "White-Collar Crime & AML",
  },
  {
    slug: "immobilier-residence",
    name: "Immobilier & Résidence",
    nameEn: "Real Estate & Residency",
  },
  {
    slug: "affaires-societes",
    name: "Droit des Sociétés",
    nameEn: "Corporate Law",
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "loi-blanchiment-monaco-conformite-2026",
    categorySlug: "penal-affaires",
    categoryName: "Pénal des Affaires & Conformité",
    title: "Évolution des Obligations de Conformité LCB-FT en Principauté de Monaco",
    titleEn: "Evolution of AML-CFT Compliance Requirements in the Principality of Monaco",
    excerpt:
      "Analyse pratique des dernières exigences légales en matière de lutte contre le blanchiment de capitaux pour les professionnels monégasques et les assujettis SICCFIN / AMSF.",
    excerptEn:
      "A practical analysis of the latest anti-money laundering and counter-terrorist financing compliance obligations in Monaco.",
    content: `
La Principauté de Monaco poursuit avec détermination le renforcement continu de son dispositif législatif et réglementaire en matière de lutte contre le blanchiment de capitaux, le financement du terrorisme et la prolifération des armes de destruction massive (LCB-FT).

### Un cadre réglementaire renforcé

Sous l'impulsion des recommandations internationales et des évaluations Moneyval, la législation monégasque impose désormais aux professionnels du chiffre, du droit, de l'immobilier et du secteur bancaire des diligences accrues :
- Identification systématique et vérification rigoureuse des bénéficiaires effectifs finaux.
- Cartographie actualisée des risques et formalisation écrite des procédures de contrôle interne.
- Obligation de déclaration de soupçon sans délai auprès de l'Autorité Monégasque de Sécurité Financière (AMSF).

### Responsabilité pénale et administrative des dirigeants

Les sanctions applicables en cas de manquement ne se limitent plus à des amendes disciplinaires. La juridiction correctionnelle monégasque rappelle avec fermeté que le défaut de vigilance ou la complicité par négligence engage la responsabilité pénale directe des dirigeants sociaux.

Le Cabinet de Me Arnaud Cheynut conseille les entreprises et professionnels assujettis dans l'audit préventif de leur gouvernance et assure leur défense répressive en cas de contrôle ou de poursuites pénales en Principauté.
    `,
    contentEn: `
The Principality of Monaco continues to rigorously update its legal framework regarding anti-money laundering and counter-terrorist financing (AML-CFT).
Entities operating in Monaco must maintain stringent compliance programs, verifiable customer due diligence, and prompt reporting to the AMSF financial intelligence authority.
    `,
    publishedAt: "2026-09-28",
    readingTimeMinutes: 5,
    author: "Me Arnaud Cheynut",
    relatedPracticeAreaSlug: "droit-penal",
  },
  {
    slug: "residence-monaco-criteres-juridiques",
    categorySlug: "immobilier-residence",
    categoryName: "Immobilier & Résidence",
    title: "Acquisition de Résidence et Critères d'Installation Juridique à Monaco",
    titleEn: "Acquiring Residency: Key Legal Criteria for Moving to Monaco",
    excerpt:
      "Synthèse des conditions de séjour, de domiciliation bancaire, de logement et d'enquête de moralité requises pour l'obtention de la carte de résident monégasque.",
    excerptEn:
      "Overview of residency conditions, housing compliance, and banking certificates required for foreign nationals settling in Monaco.",
    content: `
S'établir en Principauté de Monaco constitue un projet d'envergure pour les particuliers fortunés et leurs familles. L'obtention du statut de résident est encadrée par des critères stricts vérifiés par la Direction de la Sûreté Publique.

### Les conditions fondamentales d'admission

Pour solliciter un permis de séjour monégasque, tout demandeur âgé de plus de 16 ans doit justifier de :
1. **Un logement adapté en Principauté :** Être propriétaire d'un bien immobilier, locataire d'un bail d'habitation d'au moins un an conforme à la composition du foyer, ou hébergé par un tiers résident.
2. **Des ressources financières suffisantes :** Attestation de solvabilité délivrée par un établissement bancaire monégasque agréé, ou contrat de travail à Monaco, ou prise en charge par un tiers.
3. **Une honorabilité irréprochable :** Extrait de casier judiciaire vierge du pays d'origine et des pays de résidence des cinq dernières années.

### Sécurisation juridique du dossier

L'accompagnement par un Avocat-Défenseur permet d'anticiper les implications civiles (droit international privé successoral) et fiscales de la résidence monégasque, tout en sécurisant la négociation des baux ou promesses d'achat immobilier.
    `,
    contentEn: `
Relocating to Monaco involves meeting specific statutory conditions verified by the Public Security department: suitable local accommodation, banking solvency, and a clean criminal record.
    `,
    publishedAt: "2026-09-15",
    readingTimeMinutes: 4,
    author: "Me Arnaud Cheynut",
    relatedPracticeAreaSlug: "droit-immobilier",
  },
  {
    slug: "procedures-refere-urgence-tribunal-monaco",
    categorySlug: "jurisprudence-monaco",
    categoryName: "Jurisprudence & Procédure",
    title: "Les Référés d'Urgence Devant le Tribunal de Première Instance de Monaco",
    titleEn: "Emergency Injunctions Before the Court of First Instance of Monaco",
    excerpt:
      "Comment obtenir une mesure conservatoire ou une provision financière immédiate en cas de litige urgent en Principauté.",
    excerptEn:
      "How to obtain an emergency summary injunction or conservatory asset freeze in urgent disputes in Monaco.",
    content: `
En droit judiciaire monégasque, le référé est une procédure rapide permettant d'obtenir d'un magistrat unique (le Président du Tribunal de Première Instance) des mesures provisoires qui ne se heurtent à aucune contestation sérieuse ou que justifie l'existence d'un différend.

### Les cas d'ouverture du référé

Le Code de Procédure Civile monégasque prévoit plusieurs hypothèses :
- **Le référé d'urgence classique :** Pour prévenir un dommage imminent ou faire cesser un trouble manifestement illicite.
- **Le référé-provision :** Pour obtenir le versement immédiat d'une provision sur créance lorsque l'obligation du débiteur n'est pas sérieusement contestable.
- **Le référé d'heure à heure :** En cas d'extrême urgence, sur autorisation spéciale du Président du Tribunal.

### L'exigence de réactivité de l'Avocat-Défenseur

L'Avocat-Défenseur a le monopole de la postulation pour ces actes. La rapidité d'assignation et la clarté probatoire des pièces produites déterminent le succès de la mesure conservatoire obtenue.
    `,
    contentEn: `
Under Monegasque civil procedure, summary injunctions allow parties to obtain immediate protective orders or provisional payments to prevent irreparable harm.
    `,
    publishedAt: "2026-08-30",
    readingTimeMinutes: 4,
    author: "Me Arnaud Cheynut",
    relatedPracticeAreaSlug: "procedures-urgence",
  },
  {
    slug: "reforme-droit-societes-monaco-sam-sarl",
    categorySlug: "affaires-societes",
    categoryName: "Droit des Sociétés",
    title: "Structuration et Gouvernance des SAM et SARL en Droit Monégasque",
    titleEn: "Structuring and Governance of SAM and SARL Companies in Monaco",
    excerpt:
      "Points de vigilance pour les dirigeants et actionnaires étrangers créant une structure commerciale ou holding en Principauté.",
    excerptEn:
      "Essential guidelines for corporate executives and investors establishing commercial companies in the Principality.",
    content: `
L'exercice d'une activité économique à Monaco requiert l'obtention préalable d'une autorisation gouvernementale délivrée par arrêté ministériel, sauf pour les nationaux monégasques soumis à déclaration.

### Choisir entre SAM et SARL

- **La Société Anonyme Monégasque (SAM) :** Capital minimum de 150 000 euros, au moins deux actionnaires, constitution obligatoirement notariée. Adaptée aux projets capitalistiques et aux groupes internationaux.
- **La Société à Responsabilité Limitée (SARL) :** Capital minimum de 15 000 euros, deux associés minimum, souplesse statutaire accrue.

Le Cabinet de Me Arnaud Cheynut intervient à tous les stades de la vie sociale : rédaction des statuts, pactes d'associés protecteurs, cessions de titres et contentieux de la gouvernance d'entreprise.
    `,
    contentEn: `
Operating a business in Monaco requires prior ministerial approval. Choosing between a SAM (minimum capital 150,000 EUR) and a SARL depends on capital requirements, investor profiles, and administrative prerequisites.
    `,
    publishedAt: "2026-08-12",
    readingTimeMinutes: 6,
    author: "Me Arnaud Cheynut",
    relatedPracticeAreaSlug: "droit-commercial",
  },
];
