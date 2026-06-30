import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: "sm" | "md";
  /** Renders an indeterminate sweeping bar when value is omitted. */
  indeterminate?: boolean;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    { className, value = 0, max = 100, size = "md", indeterminate, ...props },
    ref
  ) => {
    const pct = Math.min(100, Math.max(0, (value / max) * 100));
    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : value}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-fg/10",
          size === "sm" ? "h-1.5" : "h-2.5",
          className
        )}
        {...props}
      >
        {indeterminate ? (
          <div className="absolute inset-y-0 w-1/3 animate-marquee rounded-full bg-accent" />
        ) : (
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-slow ease-out-expo"
            style={{ width: `${pct}%` }}
          />
        )}
      </div>
    );
  }
);
Progress.displayName = "Progress";
