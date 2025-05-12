import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      {/* Hero skeleton */}
      <div className="flex flex-col gap-8 items-center py-12">
        <Skeleton className="h-12 w-3/4 max-w-xl" />
        <Skeleton className="h-6 w-full max-w-xl text-center" />
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      </div>
      
      {/* Main content skeleton */}
      <main className="flex-1 flex flex-col gap-8 px-4 pb-16">
        <Skeleton className="h-8 w-48" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="block h-full">
              <div className="overflow-hidden h-full flex flex-col border rounded-lg shadow-sm">
                <Skeleton className="w-full h-64" />
                <div className="flex flex-col space-y-1.5 p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                </div>
                <div className="p-6 pt-0">
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
} 