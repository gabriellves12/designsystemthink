<div align="center">

# Think · Design System

**A refined, monochromatic design system — the foundation for building products with Claude Design.**

Three brand anchors. One typeface. A complete, themeable token layer and an accessible component library.

</div>

---

## Overview

Think is a production-grade design system built on a disciplined monochrome aesthetic. It pairs a typed **design-token layer** with a dependency-light **React + TypeScript component library** and a **living documentation site** that doubles as a visual specification.

It is designed to be the starting point for any new product: clone it, build on the tokens and components, and stay coherent from the first button to the last dialog.

- **Stack** — Vite · React 18 · TypeScript (strict) · Tailwind CSS 3
- **Theming** — first-class light & dark, dark by default (the brand's native habitat)
- **Tokens** — single source of truth in CSS variables, mirrored in typed TS
- **Accessibility** — keyboard navigable, ARIA-correct, respects `prefers-reduced-motion`

## Brand foundations

| Token | Value | Role |
| --- | --- | --- |
| `ink-200` | `#E1E1E1` | Brand light — wordmark on dark |
| `ink-800` | `#181818` | Brand surface |
| `ink-900` | `#0C0C0C` | Brand ink — wordmark on light |
| Typeface | **Google Sans Flex** | One voice, weights 100–900 (served locally) |

The three anchors expand into a 12-step **ink ramp**, then into semantic tokens (`bg`, `surface`, `fg`, `accent`, `border`, status colors…) that flip cleanly between themes.

## Getting started

```bash
npm install
npm run dev      # start the documentation site at localhost:5173
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project structure

```
.
├── public/
│   ├── fonts/                 # Google Sans Flex (9 weights, .ttf)
│   └── brand/                 # wordmark (light/dark) + palette
├── src/
│   ├── styles/globals.css     # ← token source of truth (CSS variables) + base
│   ├── tokens/index.ts        # typed mirror of the tokens for use in TS
│   ├── lib/
│   │   ├── cn.ts              # clsx + tailwind-merge class composer
│   │   └── useTheme.ts        # light/dark controller (persisted)
│   ├── components/            # the component library (barrel: index.ts)
│   ├── docs/                  # the living documentation sections
│   └── App.tsx               # documentation site entry
└── tailwind.config.ts         # tokens wired into Tailwind (RGB-channel vars)
```

## Using the tokens

Everything is wired to CSS variables, so you style with semantic Tailwind utilities and get theming for free:

```tsx
<div className="bg-surface text-fg border border-border/12 rounded-xl shadow-md">
  <h2 className="text-fg">Coherent by construction</h2>
  <p className="text-fg-muted">Swap the theme, nothing breaks.</p>
</div>
```

Need raw values in TypeScript (charts, canvas, animation)? Import them:

```ts
import { ink, fontSize, easing } from "@/tokens";
```

## Components

Variant-driven (via `class-variance-authority`), composable, and theme-aware:

`Button` · `Input` · `Textarea` · `Field` / `Label` · `Select` · `Checkbox` · `Radio` · `Switch` · `Badge` · `Card` · `Tabs` · `Alert` · `Tooltip` · `Avatar` · `Progress` · `Spinner` · `Skeleton` · `Separator` / `Kbd` · `Modal` · `Wordmark`

```tsx
import { Button, Card, CardHeader, CardTitle } from "@/components";

<Button variant="primary" size="lg">Ship it</Button>
```

## Theming

```tsx
import { useTheme } from "@/lib/useTheme";

const { theme, toggle, setTheme } = useTheme();
```

The theme is applied to `<html>` via both the `.dark` class and a `data-theme`
attribute, and persisted to `localStorage`. Default: **dark**.

---

<div align="center">
<sub>Think · Design System — crafted with Google Sans Flex.</sub>
</div>
