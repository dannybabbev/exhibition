import Link from "next/link";

export default function ArtistNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h2 className="text-3xl font-bold mb-4">Artist Not Found</h2>
      <p className="text-muted-foreground text-center mb-8">
        We couldn't find the artist you're looking for.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Back to Home
      </Link>
    </div>
  );
} 