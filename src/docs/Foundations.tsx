import { Section, Subhead, Demo, Caption, Token } from "./primitives";
import { fontWeight, fontSize, radius, easing } from "@/tokens";

const inkScale = [
  ["ink-0", "#FFFFFF"],
  ["ink-50", "#F8F8F8"],
  ["ink-100", "#F0F0F0"],
  ["ink-200", "#E1E1E1"],
  ["ink-300", "#C8C8C8"],
  ["ink-400", "#A0A0A0"],
  ["ink-500", "#787878"],
  ["ink-600", "#525252"],
  ["ink-700", "#333333"],
  ["ink-800", "#181818"],
  ["ink-900", "#0C0C0C"],
  ["ink-950", "#050505"],
] as const;

const semanticColors = [
  ["bg", "Page background"],
  ["surface", "Card / panel"],
  ["surface-raised", "Raised surface"],
  ["surface-sunken", "Inset / input"],
  ["fg", "Primary text"],
  ["fg-muted", "Secondary text"],
  ["fg-subtle", "Tertiary text"],
  ["accent", "Primary action"],
] as const;

const statusColors = [
  ["success", "Success"],
  ["warning", "Warning"],
  ["danger", "Danger"],
  ["info", "Info"],
] as const;

export function ColorFoundation() {
  return (
    <Section
      id="color"
      index="01"
      title="Color"
      description="A disciplined monochrome system built from three brand anchors — #E1E1E1, #181818 and #0C0C0C — expanded into a twelve-step ink ramp. Semantic tokens map that ramp to meaning and flip cleanly between light and dark."
    >
      <Subhead>Ink ramp</Subhead>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/10 bg-border/10 sm:grid-cols-3 lg:grid-cols-6">
        {inkScale.map(([name, hex]) => (
          <div key={name} className="bg-surface p-4">
            <div
              className="mb-3 h-16 w-full rounded-lg border border-border/10"
              style={{ backgroundColor: hex }}
            />
            <div className="font-mono text-2xs font-medium">{name}</div>
            <div className="font-mono text-2xs text-fg-subtle">{hex}</div>
          </div>
        ))}
      </div>

      <Subhead>Semantic tokens</Subhead>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {semanticColors.map(([token, label]) => (
          <div key={token} className="flex flex-col gap-2">
            <div
              className={`h-14 rounded-lg border border-border/12 bg-${token}`}
            />
            <div>
              <div className="font-mono text-2xs">{token}</div>
              <Caption>{label}</Caption>
            </div>
          </div>
        ))}
      </div>

      <Subhead>Status</Subhead>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {statusColors.map(([token, label]) => (
          <div key={token} className="flex flex-col gap-2">
            <div className={`h-14 rounded-lg bg-${token}/15 border border-${token}/25`}>
              <div className={`m-3 size-8 rounded-md bg-${token}`} />
            </div>
            <div>
              <div className="font-mono text-2xs">{token}</div>
              <Caption>{label}</Caption>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const weights = Object.entries(fontWeight);
const scaleEntries = Object.entries(fontSize).reverse();

export function TypographyFoundation() {
  return (
    <Section
      id="type"
      index="02"
      title="Typography"
      description="One voice across the whole system: Google Sans Flex, served locally with its full weight range from Thin to Black. Tight tracking on display sizes, comfortable rhythm in body copy."
    >
      <Subhead>Type scale</Subhead>
      <div className="flex flex-col divide-y divide-border/8 rounded-xl border border-border/10 bg-surface/40">
        {scaleEntries.map(([name, size]) => (
          <div key={name} className="flex items-baseline gap-6 px-6 py-4">
            <span className="w-12 shrink-0 font-mono text-2xs text-fg-subtle">
              {name}
            </span>
            <span className="w-16 shrink-0 font-mono text-2xs text-fg-subtle">
              {size}
            </span>
            <span
              className="truncate font-display font-medium tracking-tight"
              style={{ fontSize: size }}
            >
              think in systems
            </span>
          </div>
        ))}
      </div>

      <Subhead>Weights</Subhead>
      <Demo center={false}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {weights.map(([name, value]) => (
            <div key={name} className="flex items-baseline gap-4">
              <span className="w-9 font-mono text-2xs text-fg-subtle">
                {value}
              </span>
              <span
                className="text-2xl tracking-tight"
                style={{ fontWeight: value }}
              >
                Think
              </span>
              <span className="text-xs text-fg-subtle">{name}</span>
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  );
}

const spacingSteps = [1, 2, 3, 4, 6, 8, 12, 16] as const;

export function SpacingFoundation() {
  return (
    <Section
      id="spacing"
      index="03"
      title="Spacing & Radius"
      description="A 4px base grid keeps rhythm consistent. Radii climb from a 4px hairline detail to a 28px pillow on large surfaces."
    >
      <Subhead>Spacing — 4px grid</Subhead>
      <div className="flex flex-col gap-2.5">
        {spacingSteps.map((step) => (
          <div key={step} className="flex items-center gap-4">
            <span className="w-10 font-mono text-2xs text-fg-subtle">
              {step}
            </span>
            <div
              className="h-5 rounded-sm bg-accent/85"
              style={{ width: `${step * 0.25}rem` }}
            />
            <Caption>{step * 4}px</Caption>
          </div>
        ))}
      </div>

      <Subhead>Radius</Subhead>
      <div className="flex flex-wrap gap-6">
        {Object.entries(radius)
          .filter(([k]) => k !== "full")
          .map(([name, value]) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div
                className="size-20 border border-border/25 bg-surface-raised"
                style={{ borderRadius: value }}
              />
              <div className="text-center">
                <div className="font-mono text-2xs">{name}</div>
                <Caption>{value}</Caption>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}

const shadows = ["xs", "sm", "md", "lg", "xl"] as const;

export function ElevationFoundation() {
  return (
    <Section
      id="elevation"
      index="04"
      title="Elevation & Motion"
      description="Shadows stay neutral and soft — never colored — and deepen with altitude. Motion leans on a single expressive ease-out curve for confident, unhurried transitions."
    >
      <Subhead>Shadows</Subhead>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
        {shadows.map((s) => (
          <div key={s} className="flex flex-col items-center gap-3">
            <div
              className={`flex size-20 items-center justify-center rounded-xl bg-surface shadow-${s}`}
            >
              <span className="font-mono text-2xs text-fg-subtle">{s}</span>
            </div>
            <Token>shadow-{s}</Token>
          </div>
        ))}
      </div>

      <Subhead>Easing</Subhead>
      <div className="grid gap-4 sm:grid-cols-3">
        {Object.entries(easing).map(([name, curve]) => (
          <div
            key={name}
            className="group flex flex-col gap-3 rounded-xl border border-border/10 bg-surface/40 p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{name}</span>
              <span className="size-2 rounded-full bg-fg-subtle" />
            </div>
            <div className="relative h-10 overflow-hidden rounded-md bg-surface-sunken">
              <div
                className="absolute left-1 top-1/2 size-4 -translate-y-1/2 rounded-full bg-accent transition-transform duration-[1200ms] group-hover:translate-x-[calc(100%+9rem)]"
                style={{ transitionTimingFunction: curve }}
              />
            </div>
            <code className="font-mono text-[0.65rem] text-fg-subtle">
              {curve}
            </code>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-fg-subtle">
        Hover a track to preview the curve. Durations:{" "}
        <Token>fast 150ms</Token> <Token>base 220ms</Token>{" "}
        <Token>slow 400ms</Token>
      </p>
    </Section>
  );
}
