import Hero from "@/components/hero";
import { ArtistCard } from "@/components/ui/artist-card";
import { artists } from "@/mock/artists-data";

export default async function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-8 px-4 pb-16">
        <h2 className="font-medium text-2xl">Featured Artists</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </main>
    </>
  );
}
