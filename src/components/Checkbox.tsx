import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, disabled, ...props }, ref) => (
    <label
      className={cn(
        "group relative inline-flex size-[18px] shrink-0 cursor-pointer items-center justify-center",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        className="peer sr-only"
        disabled={disabled}
        {...props}
      />
      <span
        className={cn(
          "size-[18px] rounded-[5px] border border-border/30 bg-surface-sunken",
          "transition-[background-color,border-color] duration-fast ease-out-expo",
          "group-hover:border-border/50",
          "peer-checked:border-accent peer-checked:bg-accent",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg"
        )}
      />
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="pointer-events-none absolute size-3 scale-50 text-accent-fg opacity-0 transition-all duration-fast ease-spring peer-checked:scale-100 peer-checked:opacity-100"
        aria-hidden="true"
      >
        <path
          d="M3 8.5l3.2 3.2L13 5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  )
);
Checkbox.displayName = "Checkbox";
