import type { Config } from "tailwindcss";

/**
 * Think Design System — Tailwind configuration.
 *
 * Every value here is wired to a CSS custom property defined in
 * `src/styles/globals.css`. The variables are stored as space-separated RGB
 * channels so Tailwind's `<alpha-value>` opacity modifiers keep working
 * (e.g. `bg-surface/60`). This keeps a single source of truth for tokens
 * and lets the whole system retheme by swapping the variables.
 */

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  // Docs build a few class names dynamically (color/shadow specimens); the
  // JIT can't see those, so we list them explicitly here.
  safelist: [
    "bg-bg",
    "bg-surface",
    "bg-surface-raised",
    "bg-surface-sunken",
    "bg-fg",
    "bg-fg-muted",
    "bg-fg-subtle",
    "bg-accent",
    "shadow-xs",
    "shadow-sm",
    "shadow-md",
    "shadow-lg",
    "shadow-xl",
    ...["success", "warning", "danger", "info"].flatMap((c) => [
      `bg-${c}`,
      `bg-${c}/15`,
      `border-${c}/25`,
    ]),
  ],
  theme: {
    // ── Spacing — 4px base grid ────────────────────────────────────────────
    extend: {
      colors: {
        // Raw monochrome ramp (the "ink" scale) — the spine of the system.
        ink: {
          0: withAlpha("--ink-0"),
          50: withAlpha("--ink-50"),
          100: withAlpha("--ink-100"),
          200: withAlpha("--ink-200"),
          300: withAlpha("--ink-300"),
          400: withAlpha("--ink-400"),
          500: withAlpha("--ink-500"),
          600: withAlpha("--ink-600"),
          700: withAlpha("--ink-700"),
          800: withAlpha("--ink-800"),
          900: withAlpha("--ink-900"),
          950: withAlpha("--ink-950"),
        },

        // Semantic surfaces & text — these flip between themes.
        bg: withAlpha("--bg"),
        surface: {
          DEFAULT: withAlpha("--surface"),
          raised: withAlpha("--surface-raised"),
          sunken: withAlpha("--surface-sunken"),
        },
        overlay: withAlpha("--overlay"),

        fg: {
          DEFAULT: withAlpha("--fg"),
          muted: withAlpha("--fg-muted"),
          subtle: withAlpha("--fg-subtle"),
          onAccent: withAlpha("--fg-on-accent"),
        },

        border: {
          DEFAULT: withAlpha("--border"),
          strong: withAlpha("--border-strong"),
          subtle: withAlpha("--border-subtle"),
        },

        // Accent = the high-contrast inversion used for primary actions.
        accent: {
          DEFAULT: withAlpha("--accent"),
          hover: withAlpha("--accent-hover"),
          fg: withAlpha("--accent-fg"),
        },

        // Functional status colors — desaturated to sit inside a mono system.
        success: { DEFAULT: withAlpha("--success"), fg: withAlpha("--success-fg") },
        warning: { DEFAULT: withAlpha("--warning"), fg: withAlpha("--warning-fg") },
        danger: { DEFAULT: withAlpha("--danger"), fg: withAlpha("--danger-fg") },
        info: { DEFAULT: withAlpha("--info"), fg: withAlpha("--info-fg") },

        ring: withAlpha("--ring"),
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },

      fontSize: {
        // type scale — 1.250 (major third) tuned for a refined feel
        "2xs": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.02em" }],
        xs: ["0.75rem", { lineHeight: "1.125rem", letterSpacing: "0.01em" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem", { lineHeight: "1.625rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.375rem", { lineHeight: "1.875rem", letterSpacing: "-0.01em" }],
        "2xl": ["1.75rem", { lineHeight: "2.125rem", letterSpacing: "-0.018em" }],
        "3xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.022em" }],
        "4xl": ["3rem", { lineHeight: "3.125rem", letterSpacing: "-0.028em" }],
        "5xl": ["4rem", { lineHeight: "1.02", letterSpacing: "-0.032em" }],
        "6xl": ["5.5rem", { lineHeight: "0.98", letterSpacing: "-0.038em" }],
        "7xl": ["7.5rem", { lineHeight: "0.94", letterSpacing: "-0.044em" }],
      },

      borderRadius: {
        none: "0",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "9999px",
      },

      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "inner-line": "var(--shadow-inner-line)",
        none: "none",
      },

      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "30": "7.5rem",
      },

      maxWidth: {
        prose: "68ch",
        container: "1200px",
        wide: "1440px",
      },

      zIndex: {
        base: "0",
        raised: "10",
        sticky: "100",
        overlay: "1000",
        modal: "1100",
        popover: "1200",
        toast: "1300",
        tooltip: "1400",
      },

      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      transitionDuration: {
        instant: "80ms",
        fast: "150ms",
        DEFAULT: "220ms",
        slow: "400ms",
        slower: "650ms",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.4s var(--ease-out-expo) both",
        "fade-up": "fade-up 0.55s var(--ease-out-expo) both",
        "scale-in": "scale-in 0.2s var(--ease-out-expo) both",
        "slide-down": "slide-down 0.18s var(--ease-out-expo) both",
        shimmer: "shimmer 1.6s infinite",
        "spin-slow": "spin-slow 0.8s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
