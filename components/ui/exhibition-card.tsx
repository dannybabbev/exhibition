import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Exhibition {
  id: string;
  title: string;
  description: string;
  dates?: string;
  location?: string;
  image_url?: string;
}

interface ExhibitionCardProps {
  exhibition: Exhibition;
}

export function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      {exhibition.image_url && (
        <div className="relative w-full h-48">
          <img 
            src={exhibition.image_url}
            alt={exhibition.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{exhibition.title}</CardTitle>
        <CardDescription>{exhibition.dates || 'Ongoing'}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-3">{exhibition.description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <p className="text-sm text-muted-foreground">{exhibition.location}</p>
      </CardFooter>
    </Card>
  );
} 