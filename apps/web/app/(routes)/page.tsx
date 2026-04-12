export default function HomePage() {
  return (
    <section
      style={{
        display: "grid",
        gap: 20,
        maxWidth: 920,
      }}
    >
      <div style={{ display: "grid", gap: 12 }}>
        <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
          Starter overview
        </span>
        <h1 style={{ margin: 0, fontSize: 48, letterSpacing: "-0.06em" }}>
          Pisky gives every new app the same product spine.
        </h1>
        <p
          style={{
            margin: 0,
            color: "var(--muted-foreground)",
            fontSize: 18,
            lineHeight: 1.6,
            maxWidth: 720,
          }}
        >
          The shell stays lean, the theme stays swappable, and the shared
          foundation stays boring in the best way possible.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 16,
        }}
      >
        <article
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            background: "var(--card)",
            padding: 18,
            display: "grid",
            gap: 8,
          }}
        >
          <strong>Theme first</strong>
          <p style={{ margin: 0, color: "var(--muted-foreground)" }}>
            Color, spacing, radius, and type can be switched without touching
            the component tree.
          </p>
        </article>
        <article
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            background: "var(--card)",
            padding: 18,
            display: "grid",
            gap: 8,
          }}
        >
          <strong>Server first</strong>
          <p style={{ margin: 0, color: "var(--muted-foreground)" }}>
            The shell is a server layout unless a client boundary is actually
            needed.
          </p>
        </article>
        <article
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            background: "var(--card)",
            padding: 18,
            display: "grid",
            gap: 8,
          }}
        >
          <strong>Reuse ready</strong>
          <p style={{ margin: 0, color: "var(--muted-foreground)" }}>
            `web` and `admin` start separate, then promote shared pieces only
            when the reuse is real.
          </p>
        </article>
      </div>
    </section>
  );
}
