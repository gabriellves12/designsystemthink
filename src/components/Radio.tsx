import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
        type="radio"
        className="peer sr-only"
        disabled={disabled}
        {...props}
      />
      <span
        className={cn(
          "size-[18px] rounded-full border border-border/30 bg-surface-sunken",
          "transition-[border-color] duration-fast ease-out-expo",
          "group-hover:border-border/50",
          "peer-checked:border-accent",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg"
        )}
      />
      <span className="pointer-events-none absolute size-2 scale-0 rounded-full bg-accent opacity-0 transition-all duration-fast ease-spring peer-checked:scale-100 peer-checked:opacity-100" />
    </label>
  )
);
Radio.displayName = "Radio";

export interface RadioGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <div
      ref={ref}
      role="radiogroup"
      className={cn(
        "flex gap-3",
        orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
        className
      )}
      {...props}
    />
  )
);
RadioGroup.displayName = "RadioGroup";
