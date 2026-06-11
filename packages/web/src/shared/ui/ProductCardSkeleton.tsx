import { Skeleton } from "./Skeleton";

function ProductCardSkeleton() {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-bg text-left shadow-[var(--shadow)]">
      <Skeleton className="aspect-square w-full rounded-none" />

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-5 w-20" />

        <div className="mt-auto flex flex-col gap-2">
          <Skeleton className="h-10 w-full rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
    </article>
  );
}

export { ProductCardSkeleton };
