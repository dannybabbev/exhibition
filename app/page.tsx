import Hero from "@/components/hero";
import { ArtistCard } from "@/components/ui/artist-card";

// Mock data for artists
const artists = [
  {
    id: "1",
    name: "Maya Johnson",
    bio: "Contemporary sculptor working with sustainable materials. Her work explores the relationship between human consumption and environmental impact.",
    image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&h=1288&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Alejandro Reyes",
    bio: "Specializing in large-scale murals that blend traditional techniques with modern street art aesthetics. His work often addresses cultural identity and social justice.",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&h=1288&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Sarah Chen",
    bio: "Digital artist and photographer creating immersive installations that blend physical and virtual reality. Her work examines technology's impact on human connection.",
    image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1290&h=1288&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "James Okonkwo",
    bio: "Abstract painter whose colorful compositions are influenced by his Nigerian heritage and jazz music. His work has been exhibited internationally.",
    image_url: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1289&h=1288&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Emma Blackwood",
    bio: "Textile artist combining traditional weaving techniques with experimental materials. Her installations explore themes of memory, time, and domestic spaces.",
    image_url: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1286&h=1288&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Hiroshi Tanaka",
    bio: "Conceptual artist working across mediums including sculpture, performance, and video. His minimalist approach questions materiality and perception.",
    image_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&h=1288&auto=format&fit=crop"
  }
];

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
