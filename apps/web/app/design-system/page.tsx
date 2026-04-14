import { Button } from "@pisky/ui";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@pisky/ui";
import { Input } from "@pisky/ui";
import { Badge } from "@pisky/ui";
import { Text } from "@pisky/ui";

export default function DesignSystemPage() {
  return (
    <div style={{ padding: "48px", maxWidth: 1200, margin: "0 auto" }}>
      <Text scale="display" as="h1" style={{ marginBottom: 16 }}>
        Design System Showcase
      </Text>
      <Text scale="body-large" style={{ color: "#8a8f98", marginBottom: 64 }}>
        Linear-inspired design system components and typography
      </Text>

      {/* Typography Section */}
      <section style={{ marginBottom: 64 }}>
        <Text scale="h2" as="h2" style={{ marginBottom: 24 }}>
          Typography
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Text scale="display" as="h1">
            Display Scale (72px, weight 510)
          </Text>
          <Text scale="h1">Heading 1 (32px, weight 400)</Text>
          <Text scale="h2">Heading 2 (24px, weight 400)</Text>
          <Text scale="h3">Heading 3 (20px, weight 590)</Text>
          <Text scale="body-large">Body Large (18px, weight 400)</Text>
          <Text scale="body">Body (16px, weight 400)</Text>
          <Text scale="body-medium">Body Medium (16px, weight 510)</Text>
          <Text scale="small">Small (15px, weight 400)</Text>
          <Text scale="caption">Caption (13px, weight 400)</Text>
          <Text scale="label">Label (12px, weight 400)</Text>
          <Text scale="micro">Micro (11px, weight 510)</Text>
        </div>
      </section>

      {/* Buttons Section */}
      <section style={{ marginBottom: 64 }}>
        <Text scale="h2" as="h2" style={{ marginBottom: 24 }}>
          Buttons
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="icon" size="sm">
            ×
          </Button>
        </div>
        <div style={{ marginTop: 16, display: "flex", gap: 16 }}>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
      </section>

      {/* Cards Section */}
      <section style={{ marginBottom: 64 }}>
        <Text scale="h2" as="h2" style={{ marginBottom: 24 }}>
          Cards
        </Text>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
              <CardDescription>
                Description of the first feature and its benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text scale="small" style={{ color: "#8a8f98" }}>
                Card content goes here with detailed information.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
              <CardDescription>
                Description of the second feature and its benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text scale="small" style={{ color: "#8a8f98" }}>
                Card content goes here with detailed information.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
              <CardDescription>
                Description of the third feature and its benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text scale="small" style={{ color: "#8a8f98" }}>
                Card content goes here with detailed information.
              </Text>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inputs Section */}
      <section style={{ marginBottom: 64 }}>
        <Text scale="h2" as="h2" style={{ marginBottom: 24 }}>
          Inputs
        </Text>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
          <Input placeholder="Enter your email..." />
          <Input placeholder="Search..." />
          <Input placeholder="Password..." type="password" />
        </div>
      </section>

      {/* Badges Section */}
      <section style={{ marginBottom: 64 }}>
        <Text scale="h2" as="h2" style={{ marginBottom: 24 }}>
          Badges
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="subtle">Subtle</Badge>
        </div>
      </section>

      {/* Color Palette Section */}
      <section style={{ marginBottom: 64 }}>
        <Text scale="h2" as="h2" style={{ marginBottom: 24 }}>
          Color Palette
        </Text>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
          <div>
            <div style={{ background: "#08090a", padding: 24, borderRadius: 8, marginBottom: 8 }}>
              <Text scale="label" style={{ color: "#f7f8f8" }}>
                Marketing Black
              </Text>
            </div>
            <Text scale="caption">#08090a</Text>
          </div>
          <div>
            <div style={{ background: "#191a1b", padding: 24, borderRadius: 8, marginBottom: 8, border: "1px solid rgba(255,255,255,0.08)" }}>
              <Text scale="label" style={{ color: "#f7f8f8" }}>
                Surface
              </Text>
            </div>
            <Text scale="caption">#191a1b</Text>
          </div>
          <div>
            <div style={{ background: "#5e6ad2", padding: 24, borderRadius: 8, marginBottom: 8 }}>
              <Text scale="label" style={{ color: "#ffffff" }}>
                Brand Indigo
              </Text>
            </div>
            <Text scale="caption">#5e6ad2</Text>
          </div>
          <div>
            <div style={{ background: "#7170ff", padding: 24, borderRadius: 8, marginBottom: 8 }}>
              <Text scale="label" style={{ color: "#ffffff" }}>
                Accent Violet
              </Text>
            </div>
            <Text scale="caption">#7170ff</Text>
          </div>
          <div>
            <div style={{ background: "#10b981", padding: 24, borderRadius: 8, marginBottom: 8 }}>
              <Text scale="label" style={{ color: "#ffffff" }}>
                Success Green
              </Text>
            </div>
            <Text scale="caption">#10b981</Text>
          </div>
        </div>
      </section>
    </div>
  );
}
