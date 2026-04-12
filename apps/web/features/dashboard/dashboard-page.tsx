import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pisky/ui";

export function DashboardPageFeature() {
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
        <Card>
          <CardHeader>
            <Badge variant="secondary">Sessions</Badge>
            <CardTitle>128</CardTitle>
            <CardDescription>Active sessions in the last 24h.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Uptime</Badge>
            <CardTitle>99.9%</CardTitle>
            <CardDescription>Stable runtime signal.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Status</Badge>
            <CardTitle>Ready</CardTitle>
            <CardDescription>
              Foundation is set for feature work.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Phase 3 shell contract</CardTitle>
          <CardDescription>
            Keep the shell responsible for layout, navigation, and frame-level
            experience only. Feature state, data fetching, and mutations belong
            outside this file.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="secondary" size="sm">
            Read more
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
