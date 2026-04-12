import { getBrandProfile } from "@pisky/config/brand";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pisky/ui";

import { createExampleSeed } from "@pisky/db/seed";

const brand = getBrandProfile();
const seed = createExampleSeed();

export function DashboardPageFeature() {
  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "grid", gap: 10, maxWidth: 720 }}>
        <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
          {seed.product.dashboard.surfaceLabel}
        </span>
        <h1 style={{ margin: 0, fontSize: 36, letterSpacing: "-0.05em" }}>
          {seed.product.dashboard.headline}
        </h1>
        <p
          style={{
            margin: 0,
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
          }}
        >
          {seed.product.dashboard.description}
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
            <CardTitle>{seed.product.dashboard.stats.sessions}</CardTitle>
            <CardDescription>Active sessions in the last 24h.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Uptime</Badge>
            <CardTitle>{seed.product.dashboard.stats.uptime}</CardTitle>
            <CardDescription>Stable runtime signal.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Status</Badge>
            <CardTitle>{seed.product.dashboard.stats.status}</CardTitle>
            <CardDescription>
              {brand.productName} foundation is set for feature work.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Phase 3 shell contract</CardTitle>
          <CardDescription>{seed.product.dashboard.contract}</CardDescription>
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
