-- ==============================================================================
-- Seed Data Fixture — Cabinet de Me Arnaud Cheynut (Monaco)
-- Layer 3 Database Safety Gate: Authentic domain entities, universal test password devos123
-- ==============================================================================

-- 1. Practice Areas Seed
INSERT INTO practice_areas (slug, title_fr, title_en, summary_fr, summary_en, content_fr, content_en, icon_name, order_index, is_published)
VALUES
(
    'droit-penal',
    'Droit Pénal & Défense Répressive',
    'Criminal Defense & Regulatory Enforcement',
    'Défense pénale à tous les stades de la procédure devant les juridictions monégasques.',
    'Comprehensive criminal defense and representation across all Monegasque judicial jurisdictions.',
    'Intervention en garde à vue, assistance devant le Juge d''instruction, le Tribunal Correctionnel et la Cour d''Appel de Monaco. Spécialité en droit pénal financier, blanchiment et droit pénal général.',
    'Assistance during police custody, investigation phases, and representation before the Criminal Court and Monaco Court of Appeal. Focus on financial crime, anti-money laundering, and general criminal defense.',
    'Scale',
    1,
    true
),
(
    'droit-civil',
    'Droit Civil & Responsabilité',
    'Civil Law & Dispute Resolution',
    'Contentieux civil, droit des obligations et réparation du préjudice corporel et matériel.',
    'Civil litigation, contractual obligations, and compensation for financial and physical damages.',
    'Représentation devant le Tribunal de Première Instance de Monaco. Conseil en responsabilité civile contractuelle et délictuelle, voies d''exécution et mesures conservatoires.',
    'Representation before the Court of First Instance of Monaco. Advisory on contractual and tort liability, enforcement proceedings, and conservatory measures.',
    'FileText',
    2,
    true
),
(
    'droit-commercial',
    'Droit Commercial & Sociétés',
    'Corporate & Commercial Law',
    'Création, structuration et accompagnement des SAM, SARL et activités professionnelles en Principauté.',
    'Corporate structuring, registration, and ongoing advisory for Monegasque corporations (SAM, SARL).',
    'Accompagnement juridique des dirigeants et actionnaires : constitution de sociétés, cessions de fonds de commerce, baux commerciaux et contentieux entre associés.',
    'Legal counsel for directors and shareholders: incorporation, asset transfers, commercial leases, and shareholder litigation under Monaco corporate statutes.',
    'Building2',
    3,
    true
),
(
    'droit-famille',
    'Droit de la Famille & Patrimoine Privé',
    'Family Law & Private Wealth Structuring',
    'Divorces internationaux, successions transfrontalières et protection du patrimoine familial.',
    'Cross-border divorces, international estate planning, and private family wealth administration.',
    'Gestion rigoureuse et confidentielle des dossiers familiaux à haute intensité patrimoniale en droit international privé monégasque.',
    'Confidential and strategic management of high-net-worth cross-border family matters under Monegasque private international law.',
    'Users',
    4,
    true
),
(
    'procedures-urgence',
    'Procédures d''Urgence & Référés',
    'Emergency Injunctions & Summary Proceedings',
    'Mesures conservatoires immédiates, référés d''heure à heure et saisies conservatoires.',
    'Immediate protective orders, urgent summary injunctions, and asset freezes in Monaco.',
    'Mobilisation immédiate 24/7 pour requêtes unilatérales, référés urgents devant le Président du Tribunal de Première Instance et blocage conservatoire d''actifs.',
    '24/7 rapid deployment for ex parte applications, emergency injunctions, and conservatory asset freezing under Monegasque procedural urgency.',
    'Clock',
    5,
    true
),
(
    'arbitrage',
    'Arbitrage & Médiation',
    'Arbitration & Alternative Dispute Resolution',
    'Résolution alternative des litiges commerciaux complexes et arbitrage international.',
    'Alternative dispute resolution for complex commercial disagreements and international arbitration.',
    'Assistance et représentation dans les procédures arbitrales ad hoc et institutionnelles avec stricte préservation de la confidentialité des affaires.',
    'Counsel and representation in ad hoc and institutional arbitration proceedings, strictly upholding corporate confidentiality.',
    'Handshake',
    6,
    true
),
(
    'droit-immobilier',
    'Droit Immobilier Monégasque',
    'Monegasque Real Estate Law',
    'Transactions de prestige, baux civils, copropriété et contentieux de la construction à Monaco.',
    'High-end real estate transactions, residential leases, co-ownership, and construction litigation in Monaco.',
    'Sécurisation des acquisitions de prestige, baux d''habitation soumis ou non au secteur protégé, et contentieux de l''urbanisme.',
    'Securing luxury residential acquisitions, residential lease structuring, and construction disputes in the Principality.',
    'Home',
    7,
    true
)
ON CONFLICT (slug) DO NOTHING;

-- 2. Article Categories Seed
INSERT INTO article_categories (slug, name_fr, name_en)
VALUES
('jurisprudence-monaco', 'Jurisprudence & Actualités Monégasques', 'Monegasque Jurisprudence & Case Law'),
('penal-affaires', 'Droit Pénal des Affaires & Conformité', 'White Collar Defense & Compliance'),
('immobilier-residence', 'Immobilier & Installation en Principauté', 'Real Estate & Monegasque Residency')
ON CONFLICT (slug) DO NOTHING;

-- 3. Initial Legal Articles Seed (Actualités Juridiques)
INSERT INTO articles (slug, category_id, title_fr, title_en, excerpt_fr, excerpt_en, content_fr, content_en, published_at, is_published, author_name)
SELECT 
    'loi-blanchiment-monaco-conformite-2026',
    id,
    'Évolution des obligations de conformité LCB-FT en Principauté de Monaco',
    'Evolution of AML-CFT Compliance Requirements in the Principality of Monaco',
    'Analyse pratique des dernières exigences légales en matière de lutte contre le blanchiment de capitaux pour les professionnels monégasques.',
    'A practical analysis of recent regulatory requirements concerning anti-money laundering for Monegasque enterprises.',
    'La Principauté de Monaco poursuit le renforcement continu de son cadre juridique en matière de prévention et de répression du blanchiment de capitaux...',
    'The Principality of Monaco continues to rigorously strengthen its legislative framework regarding anti-money laundering and financial compliance...',
    now() - interval '2 days',
    true,
    'Me Arnaud Cheynut'
FROM article_categories WHERE slug = 'penal-affaires'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO articles (slug, category_id, title_fr, title_en, excerpt_fr, excerpt_en, content_fr, content_en, published_at, is_published, author_name)
SELECT 
    'residence-monaco-criteres-juridiques',
    id,
    'Acquisition de résidence et critères d''installation juridique à Monaco',
    'Acquiring Residency: Key Legal Criteria for Moving to Monaco',
    'Synthèse des conditions de séjour, de domiciliation et d''attestation bancaire requises pour les ressortissants étrangers.',
    'Overview of residency conditions, housing compliance, and banking certificates required for foreign nationals.',
    'S''installer à Monaco nécessite le respect rigoureux de plusieurs critères fixés par la Direction de la Sûreté Publique...',
    'Relocating to Monaco entails meeting specific statutory requirements verified by the Monegasque Public Security department...',
    now() - interval '7 days',
    true,
    'Me Arnaud Cheynut'
FROM article_categories WHERE slug = 'immobilier-residence'
ON CONFLICT (slug) DO NOTHING;
