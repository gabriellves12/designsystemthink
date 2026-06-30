import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

/** A label with the system's quiet, uppercase-tracked treatment. */
export const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }
>(({ className, children, required, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-xs font-medium text-fg-muted",
      "inline-flex items-center gap-1",
      className
    )}
    {...props}
  >
    {children}
    {required && <span className="text-danger">*</span>}
  </label>
));
Label.displayName = "Label";

export interface FieldProps {
  label?: React.ReactNode;
  /** Helper text shown below the control. */
  hint?: React.ReactNode;
  /** Error message — when present, overrides hint and marks the field invalid. */
  error?: React.ReactNode;
  required?: boolean;
  className?: string;
  /**
   * Render-prop receiving the generated id so the control can wire up
   * `id` / `aria-describedby` for accessibility.
   */
  children: (props: {
    id: string;
    "aria-describedby"?: string;
    invalid?: boolean;
  }) => React.ReactNode;
}

/**
 * Field composes a label, a control, and helper/error text with correct
 * accessibility wiring. Pass the control via the render-prop child.
 */
export function Field({
  label,
  hint,
  error,
  required,
  className,
  children,
}: FieldProps) {
  const id = useId();
  const messageId = `${id}-message`;
  const message = error ?? hint;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      {children({
        id,
        "aria-describedby": message ? messageId : undefined,
        invalid: Boolean(error),
      })}
      {message && (
        <p
          id={messageId}
          className={cn(
            "text-xs leading-snug",
            error ? "text-danger" : "text-fg-subtle"
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}
