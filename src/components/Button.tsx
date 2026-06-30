import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  // base — every button shares these
  [
    "relative inline-flex items-center justify-center gap-2 select-none",
    "font-medium whitespace-nowrap rounded-md",
    "transition-[transform,background-color,border-color,color,box-shadow]",
    "duration-fast ease-out-expo",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    "disabled:pointer-events-none disabled:opacity-45",
    "active:scale-[0.98]",
    "[&_svg]:shrink-0 [&_svg]:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg hover:bg-accent-hover shadow-sm",
        secondary:
          "bg-surface-raised text-fg border border-border/12 hover:border-border/25 hover:bg-surface-raised/70 shadow-xs",
        outline:
          "border border-border/25 text-fg bg-transparent hover:bg-fg/[0.04] hover:border-border/40",
        ghost: "text-fg bg-transparent hover:bg-fg/[0.06]",
        danger:
          "bg-danger text-danger-fg hover:opacity-90 shadow-sm",
        link: "text-fg underline-offset-4 hover:underline px-0 h-auto active:scale-100",
      },
      size: {
        sm: "h-8 px-3 text-xs [&_svg]:size-3.5 rounded-sm",
        md: "h-10 px-4 text-sm [&_svg]:size-4",
        lg: "h-12 px-6 text-base [&_svg]:size-[18px] rounded-lg",
        icon: "h-10 w-10 [&_svg]:size-[18px]",
        "icon-sm": "h-8 w-8 [&_svg]:size-4 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renders a loading spinner and disables interaction. */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <svg
            className="size-4 animate-spin-slow"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeOpacity="0.25"
            />
            <path
              d="M21 12a9 9 0 0 0-9-9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
