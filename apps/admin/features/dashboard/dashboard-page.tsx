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

export function AdminDashboardPageFeature() {
  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "grid", gap: 10, maxWidth: 720 }}>
        <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
          {seed.admin.dashboard.surfaceLabel}
        </span>
        <h1 style={{ margin: 0, fontSize: 36, letterSpacing: "-0.05em" }}>
          {seed.admin.dashboard.headline}
        </h1>
        <p
          style={{
            margin: 0,
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
          }}
        >
          {seed.admin.dashboard.description}
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
            <Badge variant="secondary">
              {seed.admin.dashboard.stats.jobs.badge}
            </Badge>
            <CardTitle>{seed.admin.dashboard.stats.jobs.title}</CardTitle>
            <CardDescription>
              {seed.admin.dashboard.stats.jobs.description}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">
              {seed.admin.dashboard.stats.alerts.badge}
            </Badge>
            <CardTitle>{seed.admin.dashboard.stats.alerts.title}</CardTitle>
            <CardDescription>
              {seed.admin.dashboard.stats.alerts.description}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">
              {seed.admin.dashboard.stats.health.badge}
            </Badge>
            <CardTitle>{seed.admin.dashboard.stats.health.title}</CardTitle>
            <CardDescription>
              {seed.admin.dashboard.stats.health.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Admin phase contract</CardTitle>
          <CardDescription>{brand.adminTagline}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" size="sm">
            Review admin queue
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
