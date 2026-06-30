import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  /** Optional centered label, e.g. "or". Horizontal only. */
  label?: React.ReactNode;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (label && orientation === "horizontal") {
      return (
        <div
          ref={ref}
          className={cn("flex items-center gap-4", className)}
          {...props}
        >
          <span className="h-px flex-1 hairline" />
          <span className="text-2xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
            {label}
          </span>
          <span className="h-px flex-1 hairline" />
        </div>
      );
    }
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          "hairline",
          orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
          className
        )}
        {...props}
      />
    );
  }
);
Separator.displayName = "Separator";

/** A keyboard key cap. */
export function Kbd({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-[5px] px-1.5",
        "border border-border/20 bg-surface-sunken text-2xs font-medium text-fg-muted",
        "shadow-xs font-mono",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
