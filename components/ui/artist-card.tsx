import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Artist {
  slug: string;
  name: string;
  bio: string;
  image_url: string;
}

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artist/${artist.slug}`} className="block h-full">
      <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
        <div className="relative w-full h-64">
          <img 
            src={artist.image_url}
            alt={artist.name}
            className="object-cover w-full h-full"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{artist.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3">{artist.bio}</p>
        </CardContent>
      </Card>
    </Link>
  );
} 