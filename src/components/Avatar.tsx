import { forwardRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-sunken text-fg-muted font-medium select-none border border-border/10",
  {
    variants: {
      size: {
        xs: "size-6 text-2xs",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  /** Fallback shown when there is no image — usually initials. */
  fallback?: string;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, src, alt, fallback, children, ...props }, ref) => {
    const [errored, setErrored] = useState(false);
    const showImage = src && !errored;
    return (
      <span
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt ?? ""}
            className="size-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          (children ?? fallback ?? "")
        )}
      </span>
    );
  }
);
Avatar.displayName = "Avatar";

export const AvatarGroup = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center [&>*]:ring-2 [&>*]:ring-bg [&>*:not(:first-child)]:-ml-2.5",
      className
    )}
    {...props}
  />
));
AvatarGroup.displayName = "AvatarGroup";
