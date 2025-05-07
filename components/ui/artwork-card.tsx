import { Card, CardContent } from "@/components/ui/card";
import { Artwork } from "@/mock/artists-data";

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative w-full h-64 overflow-hidden">
        <img 
          src={artwork.image_url}
          alt={artwork.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm">{artwork.title}</h3>
          <span className="text-sm text-muted-foreground">{artwork.created_date}</span>
        </div>
      </CardContent>
    </Card>
  );
} 