type SkeletonProps = {
  className?: string;
};

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={["animate-pulse rounded-md bg-code-bg", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export { Skeleton };
