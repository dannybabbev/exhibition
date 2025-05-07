import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ArtworkModalProps {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  isPurchased?: boolean;
}

export function ArtworkModal({
  imageUrl,
  title,
  children,
  className,
  isPurchased = false,
}: ArtworkModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("cursor-pointer", className)}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[95vw] max-h-[95vh] overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className={cn(
              "object-contain max-w-full max-h-[90vh]",
              isPurchased && "opacity-75 filter"
            )}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
} 