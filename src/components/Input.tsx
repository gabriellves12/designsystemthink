import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visual error state — pairs with a helper message in <Field>. */
  invalid?: boolean;
  /** Optional decorative node rendered at the start (e.g. an icon). */
  leading?: React.ReactNode;
  /** Optional node rendered at the end. */
  trailing?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, leading, trailing, ...props }, ref) => {
    const field = (
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "h-10 w-full rounded-md bg-surface-sunken px-3.5 text-sm text-fg",
          "border border-border/12 shadow-inner-line",
          "placeholder:text-fg-subtle",
          "transition-[border-color,box-shadow] duration-fast ease-out-expo",
          "hover:border-border/25",
          "focus:outline-none focus:border-border/40 focus:ring-2 focus:ring-ring/70",
          "disabled:cursor-not-allowed disabled:opacity-50",
          invalid &&
            "border-danger/60 focus:border-danger focus:ring-danger/40",
          (leading || trailing) && "px-0",
          className
        )}
        {...props}
      />
    );

    if (!leading && !trailing) return field;

    return (
      <div
        className={cn(
          "group flex h-10 w-full items-center gap-2 rounded-md bg-surface-sunken px-3.5 text-sm",
          "border border-border/12 shadow-inner-line",
          "transition-[border-color,box-shadow] duration-fast",
          "focus-within:border-border/40 focus-within:ring-2 focus-within:ring-ring/70",
          invalid && "border-danger/60 focus-within:ring-danger/40"
        )}
      >
        {leading && (
          <span className="text-fg-subtle [&_svg]:size-4">{leading}</span>
        )}
        <input
          ref={ref}
          aria-invalid={invalid || undefined}
          className="h-full w-full bg-transparent text-fg placeholder:text-fg-subtle focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />
        {trailing && (
          <span className="text-fg-subtle [&_svg]:size-4">{trailing}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
