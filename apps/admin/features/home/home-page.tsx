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

import { createExampleSeed } from "@pisky/db/seed";

const seed = createExampleSeed();

export function AdminHomePageFeature() {
  return (
    <section style={{ display: "grid", gap: 20, maxWidth: 920 }}>
      <div style={{ display: "grid", gap: 12 }}>
        <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
          {seed.admin.overviewLabel}
        </span>
        <h1 style={{ margin: 0, fontSize: 44, letterSpacing: "-0.06em" }}>
          {seed.admin.headline}
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
          {seed.admin.description}
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
            <Badge variant="secondary">{seed.admin.cards.users.badge}</Badge>
            <CardTitle>{seed.admin.cards.users.title}</CardTitle>
            <CardDescription>
              {seed.admin.cards.users.description}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">{seed.admin.cards.checks.badge}</Badge>
            <CardTitle>{seed.admin.cards.checks.title}</CardTitle>
            <CardDescription>
              {seed.admin.cards.checks.description}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">{seed.admin.cards.mode.badge}</Badge>
            <CardTitle>{seed.admin.cards.mode.title}</CardTitle>
            <CardDescription>
              {seed.admin.cards.mode.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Admin shell contract</CardTitle>
          <CardDescription>{seed.admin.contract}</CardDescription>
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
