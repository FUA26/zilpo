export default function DashboardPage() {
  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "grid", gap: 10, maxWidth: 720 }}>
        <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
          Dashboard surface
        </span>
        <h1 style={{ margin: 0, fontSize: 36, letterSpacing: "-0.05em" }}>
          A clean operational surface for the first product workflows.
        </h1>
        <p
          style={{
            margin: 0,
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
          }}
        >
          This route subtree is where product-specific content grows, while the
          shell and foundation stay shared.
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
          }}
        >
          <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
            Sessions
          </span>
          <strong style={{ display: "block", fontSize: 28 }}>128</strong>
        </article>
        <article
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            background: "var(--card)",
            padding: 18,
          }}
        >
          <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
            Uptime
          </span>
          <strong style={{ display: "block", fontSize: 28 }}>99.9%</strong>
        </article>
        <article
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            background: "var(--card)",
            padding: 18,
          }}
        >
          <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
            Status
          </span>
          <strong style={{ display: "block", fontSize: 28 }}>Ready</strong>
        </article>
      </div>

      <article
        style={{
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          background: "var(--card)",
          padding: 24,
          display: "grid",
          gap: 12,
        }}
      >
        <strong>Phase 3 shell contract</strong>
        <p
          style={{
            margin: 0,
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
          }}
        >
          Keep the shell responsible for layout, navigation, and frame-level
          experience only. Feature state, data fetching, and mutations belong
          outside this file.
        </p>
      </article>
    </section>
  );
}
