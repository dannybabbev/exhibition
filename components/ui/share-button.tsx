'use client'

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  text: string;
}

export function ShareButton({ title, text }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full"
      onClick={handleShare}
    >
      <Share2 className="h-5 w-5" />
      <span className="sr-only">Share</span>
    </Button>
  );
} 