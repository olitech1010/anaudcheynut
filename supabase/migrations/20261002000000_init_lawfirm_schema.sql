-- ==============================================================================
-- Migration: 20261002000000_init_lawfirm_schema.sql
-- Project: Cabinet de Me Arnaud Cheynut (Monaco)
-- Layer 3 Database Safety Gate: Strict RLS on all tables, FK indexes, PKs
-- ==============================================================================

-- 1. Contact Form Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    language TEXT NOT NULL DEFAULT 'fr',
    practice_area_slug TEXT,
    message TEXT NOT NULL,
    is_urgent BOOLEAN NOT NULL DEFAULT false,
    rgpd_consent BOOLEAN NOT NULL DEFAULT true,
    status TEXT NOT NULL DEFAULT 'new',
    attachment_path TEXT,
    ip_hash TEXT
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for contact form with RGPD consent"
    ON contact_submissions
    FOR INSERT
    TO public
    WITH CHECK (rgpd_consent = true);

CREATE POLICY "Allow authenticated staff full access to contact submissions"
    ON contact_submissions
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 2. Newsletter Subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    email TEXT NOT NULL UNIQUE,
    language TEXT NOT NULL DEFAULT 'fr',
    rgpd_consent BOOLEAN NOT NULL DEFAULT true,
    status TEXT NOT NULL DEFAULT 'active'
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for newsletter subscriptions"
    ON newsletter_subscriptions
    FOR INSERT
    TO public
    WITH CHECK (rgpd_consent = true);

CREATE POLICY "Allow authenticated staff full access to newsletter subscriptions"
    ON newsletter_subscriptions
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 3. Practice Areas
CREATE TABLE IF NOT EXISTS practice_areas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    slug TEXT NOT NULL UNIQUE,
    title_fr TEXT NOT NULL,
    title_en TEXT NOT NULL,
    summary_fr TEXT NOT NULL,
    summary_en TEXT NOT NULL,
    content_fr TEXT NOT NULL,
    content_en TEXT NOT NULL,
    icon_name TEXT NOT NULL,
    order_index INT NOT NULL DEFAULT 0,
    is_published BOOLEAN NOT NULL DEFAULT true
);

ALTER TABLE practice_areas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to published practice areas"
    ON practice_areas
    FOR SELECT
    TO public
    USING (is_published = true);

CREATE POLICY "Allow authenticated staff full access to practice areas"
    ON practice_areas
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4. Article Categories
CREATE TABLE IF NOT EXISTS article_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    slug TEXT NOT NULL UNIQUE,
    name_fr TEXT NOT NULL,
    name_en TEXT NOT NULL
);

ALTER TABLE article_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to article categories"
    ON article_categories
    FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Allow authenticated staff full access to article categories"
    ON article_categories
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 5. Legal Articles & Insights (Actualités Juridiques)
CREATE TABLE IF NOT EXISTS articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    slug TEXT NOT NULL UNIQUE,
    category_id UUID REFERENCES article_categories(id) ON DELETE SET NULL,
    title_fr TEXT NOT NULL,
    title_en TEXT NOT NULL,
    excerpt_fr TEXT NOT NULL,
    excerpt_en TEXT NOT NULL,
    content_fr TEXT NOT NULL,
    content_en TEXT NOT NULL,
    published_at TIMESTAMPTZ,
    is_published BOOLEAN NOT NULL DEFAULT false,
    author_name TEXT NOT NULL DEFAULT 'Me Arnaud Cheynut'
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Foreign key index required by Dev-OS Layer 3 safety gate
CREATE INDEX IF NOT EXISTS idx_articles_category_id ON articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(is_published, published_at DESC);

CREATE POLICY "Allow public read access to published articles"
    ON articles
    FOR SELECT
    TO public
    USING (is_published = true);

CREATE POLICY "Allow authenticated staff full access to articles"
    ON articles
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 6. AI Legal Secretary Intake Sessions (ADR-004)
CREATE TABLE IF NOT EXISTS intake_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    session_id TEXT NOT NULL UNIQUE,
    client_locale TEXT NOT NULL DEFAULT 'fr',
    preliminary_topic TEXT,
    summary TEXT,
    status TEXT NOT NULL DEFAULT 'active'
);

ALTER TABLE intake_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for intake sessions"
    ON intake_sessions
    FOR INSERT
    TO public
    WITH CHECK (true);

CREATE POLICY "Allow authenticated staff full access to intake sessions"
    ON intake_sessions
    FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);
