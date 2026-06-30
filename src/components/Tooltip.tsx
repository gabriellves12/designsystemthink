import { cn } from "@/lib/cn";

export interface TooltipProps {
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  className?: string;
}

const sideStyles: Record<NonNullable<TooltipProps["side"]>, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2 origin-bottom",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2 origin-top",
  left: "right-full top-1/2 -translate-y-1/2 mr-2 origin-right",
  right: "left-full top-1/2 -translate-y-1/2 ml-2 origin-left",
};

/**
 * A lightweight CSS-driven tooltip. Appears on hover and keyboard focus,
 * no JS state required. For rich/interactive content reach for a popover.
 */
export function Tooltip({
  content,
  side = "top",
  children,
  className,
}: TooltipProps) {
  return (
    <span className="group/tt relative inline-flex">
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-tooltip whitespace-nowrap rounded-md",
          "bg-ink-900 px-2.5 py-1.5 text-xs font-medium text-ink-50 shadow-lg",
          "border border-border/10",
          "scale-95 opacity-0 transition-all duration-fast ease-out-expo",
          "group-hover/tt:scale-100 group-hover/tt:opacity-100",
          "group-focus-within/tt:scale-100 group-focus-within/tt:opacity-100",
          sideStyles[side],
          className
        )}
      >
        {content}
      </span>
    </span>
  );
}
