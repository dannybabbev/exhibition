import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-8 py-8">
      {/* Hero section skeleton */}
      <div className="w-full flex flex-col items-center gap-4 mb-6">
        <Skeleton className="h-10 w-3/4 max-w-lg" />
        <Skeleton className="h-6 w-full max-w-2xl" />
      </div>
      
      {/* Featured section skeleton */}
      <div className="w-full px-4">
        <Skeleton className="h-8 w-48 mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col">
              <Skeleton className="w-full aspect-square mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 