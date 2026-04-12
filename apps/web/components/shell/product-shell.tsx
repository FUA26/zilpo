import Link from "next/link";
import type { ReactNode } from "react";
import { getBrandProfile } from "@pisky/config/brand";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from "@pisky/ui";
import { getThemePreset } from "@pisky/ui/theme";

type NavItem = {
  href: string;
  label: string;
  description: string;
};

const brand = getBrandProfile();
const theme = getThemePreset(process.env.NEXT_PUBLIC_THEME_PRESET);

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
            {brand.productName}
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

        <Card>
          <CardHeader>
            <Badge variant="secondary">Phase 3</Badge>
            <CardTitle>Product shell</CardTitle>
            <CardDescription>
              Layout, metadata framing, and route chrome live here. Feature
              logic stays outside the shell.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm">
              Shell ready
            </Button>
          </CardContent>
        </Card>
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
            <Card>
              <CardHeader>
                <Badge variant="secondary">Theme</Badge>
                <CardTitle>{theme.name}</CardTitle>
                <CardDescription>{theme.description}</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="secondary">Mode</Badge>
                <CardTitle>Light</CardTitle>
                <CardDescription>Runtime fallback</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </header>

        <Separator />

        <div style={{ padding: 28, display: "grid", gap: 24 }}>{children}</div>
      </main>
    </div>
  );
}
