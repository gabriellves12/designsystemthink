/**
 * Think Design System — design tokens (typed source of truth).
 *
 * These mirror the CSS custom properties in `styles/globals.css`. Import them
 * when you need token values in TypeScript (charts, canvas, animation configs,
 * theming logic) rather than in class names. Visual values live in CSS; this
 * file is the programmatic reflection so the two never drift.
 */

// ── Color — the monochrome "ink" ramp, from Think's brand anchors ─────────
export const ink = {
  0: "#FFFFFF",
  50: "#F8F8F8",
  100: "#F0F0F0",
  200: "#E1E1E1", // brand light
  300: "#C8C8C8",
  400: "#A0A0A0",
  500: "#787878",
  600: "#525252",
  700: "#333333",
  800: "#181818", // brand surface
  900: "#0C0C0C", // brand ink
  950: "#050505",
} as const;

export const brand = {
  light: ink[200], // #E1E1E1 — wordmark on dark
  surface: ink[800], // #181818
  ink: ink[900], // #0C0C0C — wordmark on light
} as const;

/** Functional status hues — desaturated to live inside a mono system. */
export const status = {
  success: { light: "#226644", dark: "#78C89E" },
  warning: { light: "#8A600C", dark: "#E0B860" },
  danger: { light: "#9E2C2C", dark: "#E88A8A" },
  info: { light: "#284878", dark: "#96B8E8" },
} as const;

// ── Typography ────────────────────────────────────────────────────────────
export const fontFamily = {
  sans: '"Google Sans Flex", ui-sans-serif, system-ui, sans-serif',
  display: '"Google Sans Flex", ui-sans-serif, system-ui, sans-serif',
  mono: 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, monospace',
} as const;

export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

/** Type scale — values in rem. Ratio ≈ 1.25 (major third). */
export const fontSize = {
  "2xs": "0.6875rem",
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.375rem",
  "2xl": "1.75rem",
  "3xl": "2.25rem",
  "4xl": "3rem",
  "5xl": "4rem",
  "6xl": "5.5rem",
  "7xl": "7.5rem",
} as const;

// ── Spacing — 4px base grid ───────────────────────────────────────────────
export const spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
} as const;

// ── Radii ─────────────────────────────────────────────────────────────────
export const radius = {
  xs: "4px",
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "20px",
  "2xl": "28px",
  full: "9999px",
} as const;

// ── Motion ────────────────────────────────────────────────────────────────
export const easing = {
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOutCirc: "cubic-bezier(0.85, 0, 0.15, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

export const duration = {
  instant: 80,
  fast: 150,
  base: 220,
  slow: 400,
  slower: 650,
} as const;

// ── Elevation (z-index scale) ─────────────────────────────────────────────
export const zIndex = {
  base: 0,
  raised: 10,
  sticky: 100,
  overlay: 1000,
  modal: 1100,
  popover: 1200,
  toast: 1300,
  tooltip: 1400,
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const tokens = {
  ink,
  brand,
  status,
  fontFamily,
  fontWeight,
  fontSize,
  spacing,
  radius,
  easing,
  duration,
  zIndex,
  breakpoints,
} as const;

export type Tokens = typeof tokens;
export default tokens;
