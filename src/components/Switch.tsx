import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: "sm" | "md";
}

/**
 * An accessible toggle built on a visually-hidden checkbox, so it works with
 * native forms, labels and keyboard out of the box.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, size = "md", disabled, ...props }, ref) => {
    const dims =
      size === "sm"
        ? { track: "h-5 w-9", thumb: "size-4 peer-checked:translate-x-4" }
        : { track: "h-6 w-11", thumb: "size-5 peer-checked:translate-x-5" };

    return (
      <label
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer items-center",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className="peer sr-only"
          disabled={disabled}
          {...props}
        />
        <span
          className={cn(
            "rounded-full bg-fg/15 transition-colors duration-base ease-out-expo",
            "peer-checked:bg-accent",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg",
            dims.track
          )}
        />
        <span
          className={cn(
            "pointer-events-none absolute left-0.5 rounded-full bg-ink-0 shadow-sm",
            "transition-transform duration-base ease-spring",
            "peer-checked:bg-accent-fg",
            dims.thumb
          )}
        />
      </label>
    );
  }
);
Switch.displayName = "Switch";
