import { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { Button } from "./Button";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** Max width of the panel. */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl" } as const;

/**
 * An accessible modal dialog rendered through a portal. Closes on Escape and
 * backdrop click, locks body scroll while open, and traps initial focus on
 * the panel. Built dependency-free.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-modal flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-overlay/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "relative w-full animate-scale-in rounded-2xl bg-surface shadow-xl",
          "border border-border/12",
          sizes[size],
          className
        )}
        // Focus the panel on mount for keyboard users.
        ref={(el) => el?.focus()}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-md text-fg-subtle transition-colors hover:bg-fg/[0.06] hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg viewBox="0 0 16 16" fill="none" className="size-4">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {(title || description) && (
          <div className="flex flex-col gap-1.5 p-6 pb-0 pr-12">
            {title && (
              <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            )}
            {description && (
              <p className="text-sm leading-relaxed text-fg-muted">
                {description}
              </p>
            )}
          </div>
        )}

        {children && <div className="p-6 text-sm leading-relaxed">{children}</div>}

        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-border/10 p-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

/** Convenience footer pairing a cancel + confirm action. */
export function ModalActions({
  onCancel,
  onConfirm,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  confirmVariant = "primary",
}: {
  onCancel: () => void;
  onConfirm: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
  confirmVariant?: "primary" | "danger";
}) {
  return (
    <>
      <Button variant="ghost" onClick={onCancel}>
        {cancelLabel}
      </Button>
      <Button variant={confirmVariant} onClick={onConfirm}>
        {confirmLabel}
      </Button>
    </>
  );
}
