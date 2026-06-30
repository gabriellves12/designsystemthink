import { cn } from "@/lib/cn";

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

/** A shimmering placeholder for content that is still loading. */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden rounded-md bg-fg/[0.07]",
        "after:absolute after:inset-0 after:-translate-x-full after:animate-shimmer",
        "after:bg-gradient-to-r after:from-transparent after:via-fg/[0.06] after:to-transparent",
        className
      )}
      {...props}
    />
  );
}
