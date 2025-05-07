import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-6">
        <Skeleton className="h-6 w-32" />
      </div>
      
      <div className="flex flex-col items-center mb-12">
        <Skeleton className="w-48 h-48 md:w-64 md:h-64 mb-6 rounded-full" />
        <Skeleton className="h-9 w-64 mb-4" />
        <div className="max-w-3xl w-full">
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-5 w-5/6 mb-2" />
          <Skeleton className="h-5 w-full mb-6" />
        </div>
      </div>
      
      <Skeleton className="h-8 w-32 mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="flex flex-col">
            <Skeleton className="w-full h-64 mb-4" />
            <div className="flex justify-between">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-5 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 