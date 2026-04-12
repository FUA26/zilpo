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

export default function HomePage() {
  return (
    <section style={{ display: "grid", gap: 20, maxWidth: 920 }}>
      <div style={{ display: "grid", gap: 12 }}>
        <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
          Admin overview
        </span>
        <h1 style={{ margin: 0, fontSize: 44, letterSpacing: "-0.06em" }}>
          Operational companion surface for Pisky.
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
          The admin app shares the same primitives and theme, but keeps its own
          route tree and operational language.
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
            <Badge variant="secondary">Users</Badge>
            <CardTitle>42</CardTitle>
            <CardDescription>Visible in the last sync.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Checks</Badge>
            <CardTitle>Green</CardTitle>
            <CardDescription>Shared gate surface is ready.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Mode</Badge>
            <CardTitle>Ops</CardTitle>
            <CardDescription>Admin-only workflows live here.</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Admin shell contract</CardTitle>
          <CardDescription>
            Keep admin lean, operational, and separate from product-facing
            feature composition.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="secondary" size="sm">
            Open admin tools
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
