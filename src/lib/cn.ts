import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` merges class names intelligently: clsx resolves conditionals and
 * tailwind-merge dedupes conflicting Tailwind utilities (so a later
 * `px-6` correctly overrides an earlier `px-4`). Used by every component.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
