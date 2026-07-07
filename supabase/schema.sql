-- Run this in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/<your-project>/sql

CREATE TABLE IF NOT EXISTS user_recipes (
  id           TEXT PRIMARY KEY,
  family_slug  TEXT        NOT NULL,
  title        TEXT        NOT NULL,
  description  TEXT        NOT NULL DEFAULT '',
  category     TEXT        NOT NULL DEFAULT 'Family Additions',
  image_path   TEXT,
  blocks       JSONB       NOT NULL DEFAULT '[]'::jsonb,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE user_recipes
  ADD COLUMN IF NOT EXISTS image_path TEXT;

-- Row Level Security: allow anyone to read/insert/delete
-- (no authentication required for this family-archive site).
ALTER TABLE user_recipes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read" ON user_recipes;
CREATE POLICY "Public read"
  ON user_recipes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public insert" ON user_recipes;
CREATE POLICY "Public insert"
  ON user_recipes FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public delete" ON user_recipes;
CREATE POLICY "Public delete"
  ON user_recipes FOR DELETE USING (true);

-- Public storage bucket for recipe images.
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'recipe-images',
  'recipe-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[]
)
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "Public recipe image read" ON storage.objects;
CREATE POLICY "Public recipe image read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'recipe-images');

DROP POLICY IF EXISTS "Public recipe image upload" ON storage.objects;
CREATE POLICY "Public recipe image upload"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'recipe-images');

DROP POLICY IF EXISTS "Public recipe image delete" ON storage.objects;
CREATE POLICY "Public recipe image delete"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'recipe-images');
