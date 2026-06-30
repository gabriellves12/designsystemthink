import { useEffect, useState } from "react";
import { Wordmark, Badge, Button } from "@/components";
import { useTheme } from "@/lib/useTheme";
import {
  ColorFoundation,
  TypographyFoundation,
  SpacingFoundation,
  ElevationFoundation,
} from "./docs/Foundations";
import { Components } from "./docs/Components";

const NAV = [
  ["color", "Color"],
  ["type", "Typography"],
  ["spacing", "Spacing"],
  ["elevation", "Elevation"],
  ["components", "Components"],
] as const;

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-[18px]">
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 1.5v2M10 16.5v2M3.5 3.5l1.4 1.4M15.1 15.1l1.4 1.4M1.5 10h2M16.5 10h2M3.5 16.5l1.4-1.4M15.1 4.9l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="size-[18px]">
      <path
        d="M16.5 11.5A6.5 6.5 0 0 1 8.5 3.5a6.5 6.5 0 1 0 8 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex size-9 items-center justify-center rounded-md border border-border/15 text-fg-muted transition-colors duration-fast hover:bg-fg/[0.06] hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function Nav() {
  const [active, setActive] = useState<string>("color");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-sticky border-b border-border/8 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-wide items-center justify-between gap-6 px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Wordmark className="h-5" />
          <span className="hidden h-4 w-px hairline sm:block" />
          <span className="hidden font-mono text-2xs uppercase tracking-[0.18em] text-fg-subtle sm:block">
            Design System
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors duration-fast ${
                active === id
                  ? "text-fg"
                  : "text-fg-subtle hover:text-fg-muted"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/gabriellves12/designsystemthink"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-fg-muted transition-colors hover:text-fg sm:block"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/8"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15] mix-blend-overlay" />
      <div
        className="pointer-events-none absolute -top-1/2 left-1/2 h-[120%] w-[80%] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--fg) / 0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-wide px-6 py-24 lg:px-10 lg:py-32">
        <Badge variant="outline" className="mb-8 animate-fade-up">
          <span className="size-1.5 rounded-full bg-success" />
          v1.0 · Foundation for Claude Design
        </Badge>

        <h1
          className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
          style={{ animation: "fade-up 0.7s var(--ease-out-expo) both" }}
        >
          <span className="text-gradient">Design with intent.</span>
          <br />
          <span className="text-fg-muted">Build with</span>{" "}
          <span className="inline-flex translate-y-1 align-baseline">
            <Wordmark className="h-[0.78em] w-auto" />
          </span>
          .
        </h1>

        <p
          className="mt-8 max-w-prose text-balance text-lg leading-relaxed text-fg-muted"
          style={{ animation: "fade-up 0.7s 0.1s var(--ease-out-expo) both" }}
        >
          A refined, monochromatic design system — three brand anchors, one
          typeface, and a complete token layer. The foundation every Think
          product is built on.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-3"
          style={{ animation: "fade-up 0.7s 0.2s var(--ease-out-expo) both" }}
        >
          <Button size="lg" onClick={() => scrollToId("components")}>
            Explore components
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToId("color")}
          >
            View foundations
          </Button>
        </div>

        <dl
          className="mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
          style={{ animation: "fade-up 0.7s 0.3s var(--ease-out-expo) both" }}
        >
          {[
            ["12", "ink steps"],
            ["9", "font weights"],
            ["20+", "components"],
            ["2", "themes"],
          ].map(([n, l]) => (
            <div key={l} className="flex flex-col gap-1">
              <dt className="text-3xl font-semibold tracking-tight">{n}</dt>
              <dd className="text-xs uppercase tracking-wider text-fg-subtle">
                {l}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Footer() {
  return (
    <footer className="border-t border-border/8 bg-surface/30">
      <div className="mx-auto flex max-w-wide flex-col gap-8 px-6 py-14 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="flex flex-col gap-4">
          <Wordmark className="h-7" />
          <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
            A monochromatic design system. Built to be the foundation for
            products designed and shipped with Claude Design.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-fg-subtle">
          <span className="font-mono text-2xs uppercase tracking-[0.18em]">
            Think · Design System
          </span>
          <span>
            Crafted with Google Sans Flex · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />
      <main>
        <Hero />
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <ColorFoundation />
          <TypographyFoundation />
          <SpacingFoundation />
          <ElevationFoundation />
          <Components />
        </div>
      </main>
      <Footer />
    </div>
  );
}
