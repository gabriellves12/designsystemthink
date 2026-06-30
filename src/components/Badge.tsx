import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap border transition-colors duration-fast [&_svg]:size-3",
  {
    variants: {
      variant: {
        solid: "bg-accent text-accent-fg border-transparent",
        soft: "bg-fg/[0.07] text-fg border-transparent",
        outline: "bg-transparent text-fg-muted border-border/20",
        success: "bg-success/12 text-success border-success/20",
        warning: "bg-warning/12 text-warning border-warning/20",
        danger: "bg-danger/12 text-danger border-danger/20",
        info: "bg-info/12 text-info border-info/20",
      },
      size: {
        sm: "h-5 px-2 text-2xs",
        md: "h-6 px-2.5 text-xs",
      },
    },
    defaultVariants: { variant: "soft", size: "md" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Renders a small leading status dot. */
  dot?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, dot, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {dot && <span className="size-1.5 rounded-full bg-current opacity-70" />}
      {children}
    </span>
  )
);
Badge.displayName = "Badge";
