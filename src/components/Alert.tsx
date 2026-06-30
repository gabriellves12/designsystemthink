import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const alertVariants = cva(
  "relative flex gap-3 rounded-lg border p-4 text-sm",
  {
    variants: {
      variant: {
        neutral: "bg-surface-sunken border-border/12 text-fg",
        info: "bg-info/8 border-info/20 text-fg [&_.alert-icon]:text-info",
        success:
          "bg-success/8 border-success/20 text-fg [&_.alert-icon]:text-success",
        warning:
          "bg-warning/8 border-warning/20 text-fg [&_.alert-icon]:text-warning",
        danger:
          "bg-danger/8 border-danger/20 text-fg [&_.alert-icon]:text-danger",
      },
    },
    defaultVariants: { variant: "neutral" },
  }
);

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, icon, title, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon && (
        <span className="alert-icon mt-0.5 shrink-0 text-fg-muted [&_svg]:size-[18px]">
          {icon}
        </span>
      )}
      <div className="flex flex-col gap-0.5">
        {title && <p className="font-semibold leading-snug">{title}</p>}
        {children && (
          <div className="leading-relaxed text-fg-muted">{children}</div>
        )}
      </div>
    </div>
  )
);
Alert.displayName = "Alert";
