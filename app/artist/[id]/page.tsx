import { notFound } from "next/navigation";
import Link from "next/link";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { artists, artworks } from "@/mock/artists-data";
import { Metadata } from "next";

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const artist = artists.find((artist) => artist.id === params.id);

  if (!artist) {
    return {
      title: "Artist Not Found",
    };
  }

  return {
    title: artist.name,
    description: artist.bio,
    openGraph: {
      title: artist.name,
      description: artist.bio,
      images: [{ url: artist.image_url }],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: artist.name,
      description: artist.bio,
      images: [artist.image_url],
    }
  };
}

export default async function ArtistPage(props: { params: Promise<{ id: string }> }) {
  // Await params to prevent "params should be awaited before using its properties" error
  const params = await props.params;
  const artist = artists.find((artist) => artist.id === params.id);

  if (!artist) {
    notFound();
  }

  const artistArtworks = artworks.filter((artwork) => artwork.artist_id === artist.id);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          ← Back to Artists
        </Link>
      </div>
      
      <div className="flex flex-col items-center mb-12">
        <div className="w-48 h-48 md:w-64 md:h-64 mb-6 overflow-hidden rounded-full">
          <img 
            src={artist.image_url} 
            alt={artist.name} 
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{artist.name}</h1>
        <div className="max-w-3xl text-center">
          <p className="text-lg text-muted-foreground mb-6">
            {artist.extended_bio || artist.bio}
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {artistArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
} 