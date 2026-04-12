import Link from "next/link";
import type { ReactNode } from "react";

type NavItem = {
  href: string;
  label: string;
  description: string;
};

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    description: "Entry point and product overview.",
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    description: "Primary app surface and first route subtree.",
  },
];

function ShellNavLink({ item }: { item: NavItem }) {
  const active = item.href === "/" ? false : false;

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        display: "grid",
        gap: 4,
        padding: "12px 14px",
        textDecoration: "none",
        background: active ? "var(--secondary)" : "transparent",
      }}
    >
      <strong style={{ fontSize: 14 }}>{item.label}</strong>
      <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
        {item.description}
      </span>
    </Link>
  );
}

function ShellCard({
  title,
  value,
  detail,
}: {
  title: string;
  value: string;
  detail: string;
}) {
  return (
    <article
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        background: "var(--card)",
        padding: 16,
        display: "grid",
        gap: 8,
      }}
    >
      <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
        {title}
      </span>
      <strong style={{ fontSize: 24, letterSpacing: "-0.03em" }}>
        {value}
      </strong>
      <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
        {detail}
      </span>
    </article>
  );
}

export function ProductShell({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "280px minmax(0, 1fr)",
        background:
          "radial-gradient(circle at top left, rgba(17, 17, 17, 0.03), transparent 35%), var(--background)",
      }}
    >
      <aside
        style={{
          borderRight: "1px solid var(--border)",
          padding: 24,
          display: "grid",
          gap: 24,
          alignContent: "start",
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div style={{ display: "grid", gap: 8 }}>
          <span style={{ color: "var(--muted-foreground)", fontSize: 12 }}>
            Pisky
          </span>
          <strong style={{ fontSize: 20, letterSpacing: "-0.04em" }}>
            Reusable SaaS shell
          </strong>
          <p style={{ margin: 0, color: "var(--muted-foreground)" }}>
            Cal.com-inspired foundation for product and admin surfaces.
          </p>
        </div>

        <nav style={{ display: "grid", gap: 10 }}>
          {navItems.map((item) => (
            <ShellNavLink key={item.href} item={item} />
          ))}
        </nav>

        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            background: "var(--card)",
            padding: 16,
            display: "grid",
            gap: 12,
          }}
        >
          <div style={{ display: "grid", gap: 4 }}>
            <span style={{ color: "var(--muted-foreground)", fontSize: 12 }}>
              Phase 3
            </span>
            <strong>Product shell</strong>
          </div>
          <p style={{ margin: 0, color: "var(--muted-foreground)" }}>
            Layout, metadata framing, and route chrome live here. Feature logic
            stays outside the shell.
          </p>
        </div>
      </aside>

      <main style={{ display: "grid", minWidth: 0 }}>
        <header
          style={{
            borderBottom: "1px solid var(--border)",
            background: "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(18px)",
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "grid", gap: 4 }}>
            <span style={{ color: "var(--muted-foreground)", fontSize: 12 }}>
              Product area
            </span>
            <strong style={{ fontSize: 18, letterSpacing: "-0.03em" }}>
              Web shell
            </strong>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <ShellCard
              title="Theme"
              value="cal-neutral"
              detail="Default preset"
            />
            <ShellCard title="Mode" value="Light" detail="Runtime fallback" />
          </div>
        </header>

        <div style={{ padding: 28, display: "grid", gap: 24 }}>{children}</div>
      </main>
    </div>
  );
}
