import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "min-h-[96px] w-full resize-y rounded-md bg-surface-sunken px-3.5 py-2.5 text-sm text-fg",
          "border border-border/12 shadow-inner-line",
          "placeholder:text-fg-subtle leading-relaxed",
          "transition-[border-color,box-shadow] duration-fast ease-out-expo",
          "hover:border-border/25",
          "focus:outline-none focus:border-border/40 focus:ring-2 focus:ring-ring/70",
          "disabled:cursor-not-allowed disabled:opacity-50",
          invalid && "border-danger/60 focus:border-danger focus:ring-danger/40",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
