import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Artist {
  id: string;
  name: string;
  bio: string;
  image_url: string;
}

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
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
  );
} 