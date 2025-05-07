import { notFound } from "next/navigation";
import Link from "next/link";
import { artworks, artists } from "@/mock/artists-data";
import { Button } from "@/components/ui/button";
import { AlertCircle, Phone, Mail } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShareButton } from "@/components/ui/share-button";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const artwork = artworks.find((artwork) => artwork.id === params.id);
  
  if (!artwork) {
    return {
      title: 'Artwork Not Found',
    };
  }
  
  const artist = artists.find((artist) => artist.id === artwork.artist_id);
  
  return {
    title: `${artwork.title} by ${artist?.name || 'Unknown Artist'} | Exhibition Gallery`,
    description: artwork.description,
    openGraph: {
      images: [artwork.image_url],
    },
  };
}

export default async function ArtworkPage({ params }: { params: { id: string } }) {
  const artwork = artworks.find((artwork) => artwork.id === params.id);

  if (!artwork) {
    notFound();
  }

  const artist = artists.find((artist) => artist.id === artwork.artist_id);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-6">
        <Link 
          href={artist ? `/artist/${artist.id}` : "/"}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          ← Back to {artist ? artist.name : "Home"}
        </Link>
      </div>
      
      {/* Artwork display - large and centered */}
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <div className="w-full max-w-3xl mb-4 md:mb-8 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={artwork.image_url} 
            alt={artwork.title} 
            className="object-contain w-full max-h-[50vh] md:max-h-[70vh]"
          />
        </div>
        
        {/* Artwork information */}
        <div className="w-full max-w-3xl px-2 md:px-0">
          <div className="relative text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{artwork.title}</h1>
            <p className="text-base md:text-lg text-muted-foreground mb-2">
              {artist?.name}, {artwork.created_date}
            </p>
            
            {/* Social share button */}
            <div className="absolute top-0 right-0">
              <ShareButton 
                title={`${artwork.title} by ${artist?.name}`} 
                text={artwork.description || ''}
              />
            </div>
            
            <p className="text-base md:text-lg mt-4 md:mt-6 leading-relaxed">
              {artwork.description}
            </p>
          </div>
          
          {/* Purchase notice */}
          <div className="mt-6 md:mt-10">
            <Alert className="bg-primary/10 border-primary">
              <AlertCircle className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-medium">Available for Purchase</AlertTitle>
              <AlertDescription className="mt-2">
                Interested in acquiring this artwork? Please contact us at <span className="font-medium">+1 (555) 123-4567</span> or email us at <span className="font-medium">sales@exhibition.gallery</span> for inquiries.
              </AlertDescription>
              <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <a href="tel:+15551234567" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button className="w-full sm:w-auto" asChild>
                  <a href="mailto:sales@exhibition.gallery" className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
} 