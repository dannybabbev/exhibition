import { Card, CardContent } from "@/components/ui/card";
import { Artwork } from "@/mock/artists-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArtworkCardProps {
  artwork: Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  const isPurchased = artwork.purchased === true;

  return (
    <Link href={`/artwork/${artwork.id}`} className="block h-full">
      <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
        <div className="relative w-full h-64 overflow-hidden">
          <img 
            src={artwork.image_url}
            alt={artwork.title}
            className={cn(
              "object-cover w-full h-full transition-transform duration-300 hover:scale-105",
              isPurchased && "opacity-75 filter"
            )}
          />
          {isPurchased && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-red-500 hover:bg-red-600 text-xs text-white">
                Sold
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="pt-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-sm">{artwork.title}</h3>
            <span className="text-sm text-muted-foreground">{artwork.created_date}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 