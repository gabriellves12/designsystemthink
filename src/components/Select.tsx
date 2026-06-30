import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

/** A styled native <select> — zero dependencies, full keyboard support. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid, children, ...props }, ref) => (
    <div className="relative inline-flex w-full items-center">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "h-10 w-full appearance-none rounded-md bg-surface-sunken pl-3.5 pr-9 text-sm text-fg",
          "border border-border/12 shadow-inner-line cursor-pointer",
          "transition-[border-color,box-shadow] duration-fast ease-out-expo",
          "hover:border-border/25",
          "focus:outline-none focus:border-border/40 focus:ring-2 focus:ring-ring/70",
          "disabled:cursor-not-allowed disabled:opacity-50",
          invalid && "border-danger/60 focus:ring-danger/40",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="pointer-events-none absolute right-3 size-4 text-fg-subtle"
        aria-hidden="true"
      >
        <path
          d="M4 6l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
);
Select.displayName = "Select";
