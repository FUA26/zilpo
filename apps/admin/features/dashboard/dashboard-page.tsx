import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@pisky/ui";

export function AdminDashboardPageFeature() {
  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "grid", gap: 10, maxWidth: 720 }}>
        <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>
          Admin dashboard
        </span>
        <h1 style={{ margin: 0, fontSize: 36, letterSpacing: "-0.05em" }}>
          The operational route subtree.
        </h1>
        <p
          style={{
            margin: 0,
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
          }}
        >
          This surface stays small, obvious, and efficient for the team that
          runs the product.
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
            <Badge variant="secondary">Jobs</Badge>
            <CardTitle>18</CardTitle>
            <CardDescription>Queued admin tasks.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Alerts</Badge>
            <CardTitle>2</CardTitle>
            <CardDescription>Requires attention.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Badge variant="secondary">Health</Badge>
            <CardTitle>Stable</CardTitle>
            <CardDescription>Admin surface is healthy.</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Admin phase contract</CardTitle>
          <CardDescription>
            Keep the route group focused on ops workflows, not shared product
            composition.
          </CardDescription>
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
