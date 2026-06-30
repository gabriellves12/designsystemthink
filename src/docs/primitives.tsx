import { cn } from "@/lib/cn";

/** A top-level documentation section with an anchor + quiet index label. */
export function Section({
  id,
  index,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-border/8 py-20 first:border-t-0"
    >
      <header className="mb-12 max-w-prose">
        <div className="mb-4 flex items-center gap-3 font-mono text-2xs uppercase tracking-[0.2em] text-fg-subtle">
          <span>{index}</span>
          <span className="h-px w-8 hairline" />
          <span>Think DS</span>
        </div>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-balance text-base leading-relaxed text-fg-muted">
            {description}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}

export function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-fg-subtle first:mt-0">
      {children}
    </h3>
  );
}

/** A bordered canvas to present a live component example. */
export function Demo({
  children,
  className,
  center = true,
}: {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/10 bg-surface/40 bg-grid p-8",
        center && "flex flex-wrap items-center gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Label sitting under a specimen in the showcase grid. */
export function Caption({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-2xs uppercase tracking-wider text-fg-subtle">
      {children}
    </span>
  );
}

/** Inline monospace token reference. */
export function Token({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-fg/[0.06] px-1.5 py-0.5 font-mono text-[0.8em] text-fg-muted">
      {children}
    </code>
  );
}
