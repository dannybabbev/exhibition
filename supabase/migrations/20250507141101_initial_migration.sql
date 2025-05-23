-- Create artists table
CREATE TABLE public.artists (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  bio TEXT NOT NULL,
  image_url TEXT NOT NULL,
  extended_bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

CREATE UNIQUE INDEX idx_artists_slug ON public.artists(slug);

-- Create artworks table
CREATE TABLE public.artworks (
  id SERIAL PRIMARY KEY,
  artist_id INTEGER NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_date TEXT,
  description TEXT,
  purchased BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create indices for performance
CREATE INDEX idx_artworks_artist_slug ON public.artworks(artist_id);

-- Enable Row Level Security on tables
ALTER TABLE public.artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artworks ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on artists" 
  ON public.artists FOR SELECT USING (true);

CREATE POLICY "Allow public read access on artworks" 
  ON public.artworks FOR SELECT USING (true);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_artists_updated_at
  BEFORE UPDATE ON public.artists
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_artworks_updated_at
  BEFORE UPDATE ON public.artworks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
