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

import { createExampleSeed } from "@pisky/db/seed";

const brand = getBrandProfile();
const seed = createExampleSeed();

export function HomePageFeature() {
  return (
    <section style={{ display: "grid", gap: 20, maxWidth: 920 }}>
      <div style={{ display: "grid", gap: 12 }}>
        <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
          {seed.product.overviewLabel}
        </span>
        <h1 style={{ margin: 0, fontSize: 48, letterSpacing: "-0.06em" }}>
          {brand.productName} gives every new app the same product spine.
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
            <Badge variant="secondary">{seed.product.cards.theme.badge}</Badge>
            <CardTitle>{seed.product.cards.theme.title}</CardTitle>
            <CardDescription>
              {seed.product.cards.theme.description}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">{seed.product.cards.server.badge}</Badge>
            <CardTitle>{seed.product.cards.server.title}</CardTitle>
            <CardDescription>
              {seed.product.cards.server.description}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">{seed.product.cards.reuse.badge}</Badge>
            <CardTitle>{seed.product.cards.reuse.title}</CardTitle>
            <CardDescription>
              {seed.product.cards.reuse.description}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <Badge variant="secondary">Shared UI</Badge>
          <CardTitle>{seed.product.shared.title}</CardTitle>
          <CardDescription>{seed.product.shared.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Primary action</Button>
        </CardContent>
      </Card>
    </section>
  );
}
