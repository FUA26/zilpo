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

export function HomePageFeature() {
  return (
    <section style={{ display: "grid", gap: 20, maxWidth: 920 }}>
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
        <Card>
          <CardHeader>
            <Badge variant="secondary">Theme first</Badge>
            <CardTitle>Theme first</CardTitle>
            <CardDescription>
              Color, spacing, radius, and type can be switched without touching
              the component tree.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Server first</Badge>
            <CardTitle>Server first</CardTitle>
            <CardDescription>
              The shell is a server layout unless a client boundary is actually
              needed.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Reuse ready</Badge>
            <CardTitle>Reuse ready</CardTitle>
            <CardDescription>
              `web` and `admin` start separate, then promote shared pieces only
              when the reuse is real.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <Badge variant="secondary">Shared UI</Badge>
          <CardTitle>Shadcn-style primitives in `packages/ui`</CardTitle>
          <CardDescription>
            Phase 4 promotes reusable primitives into the shared package so the
            two apps can keep a consistent base.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Primary action</Button>
        </CardContent>
      </Card>
    </section>
  );
}
