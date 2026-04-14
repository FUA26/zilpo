# Linear Design System Implementation

This design system is inspired by Linear's dark-mode-first product design, implementing their signature aesthetic with Inter Variable font, precise typography scales, and translucent UI components.

## Theme Preset

To use the Linear theme, set the environment variable:

```bash
NEXT_PUBLIC_THEME_PRESET=linear
```

Or set it programmatically:

```typescript
import { getThemePreset } from "@pisky/ui/theme";

const theme = getThemePreset("linear");
```

## Design Tokens

### Colors

#### Background Surfaces
- **Marketing Black**: `#08090a` - Deepest background for hero sections
- **Panel Dark**: `#0f1011` - Sidebar and panel backgrounds
- **Level 3 Surface**: `#191a1b` - Elevated surfaces, card backgrounds
- **Secondary Surface**: `#28282c` - Lightest dark surface for hover states

#### Text Colors
- **Primary Text**: `#f7f8f8` - Near-white, prevents eye strain
- **Secondary Text**: `#d0d6e0` - Cool silver-gray for body text
- **Tertiary Text**: `#8a8f98` - Muted gray for placeholders
- **Quaternary Text**: `#62666d` - Subtle text for timestamps

#### Brand Colors
- **Brand Indigo**: `#5e6ad2` - Primary brand color for CTAs
- **Accent Violet**: `#7170ff` - Interactive elements, links
- **Accent Hover**: `#828fff` - Hover state for accent elements

#### Status Colors
- **Success Green**: `#10b981` - Success indicators, pill badges

#### Border Colors
- **Border Subtle**: `rgba(255,255,255,0.05)` - Ultra-subtle borders
- **Border Standard**: `rgba(255,255,255,0.08)` - Default border for cards/inputs
- **Border Solid**: `#23252a` - Solid dark borders for pills/badges

### Typography

#### Font Families
- **Sans**: Inter Variable (with `"cv01", "ss03"` OpenType features)
- **Mono**: Berkeley Mono (fallback to ui-monospace, SF Mono, Menlo)

#### Typography Scale

The design system uses Linear's signature 510 weight (between regular and medium) for most UI text.

| Scale | Size | Weight | Line Height | Letter Spacing | Use Case |
|-------|------|--------|-------------|----------------|----------|
| display-xl | 72px | 510 | 1.00 | -1.584px | Hero headlines |
| display-large | 64px | 510 | 1.00 | -1.408px | Secondary hero |
| display | 48px | 510 | 1.00 | -1.056px | Section headlines |
| h1 | 32px | 400 | 1.13 | -0.704px | Major section titles |
| h2 | 24px | 400 | 1.33 | -0.288px | Sub-section headings |
| h3 | 20px | 590 | 1.33 | -0.24px | Feature titles, card headers |
| body-large | 18px | 400 | 1.60 | -0.165px | Introduction text |
| body-emphasis | 17px | 590 | 1.60 | normal | Emphasized body |
| body | 16px | 400 | 1.50 | normal | Standard reading text |
| body-medium | 16px | 510 | 1.50 | normal | Navigation, labels |
| body-semibold | 16px | 590 | 1.50 | normal | Strong emphasis |
| small | 15px | 400 | 1.60 | -0.165px | Secondary body |
| small-medium | 15px | 510 | 1.60 | -0.165px | Emphasized small text |
| caption-large | 14px | 510 | 1.50 | -0.182px | Sub-labels |
| caption | 13px | 400 | 1.50 | -0.13px | Metadata, timestamps |
| label | 12px | 400 | 1.40 | normal | Button text, small labels |
| micro | 11px | 510 | 1.40 | normal | Tiny labels |
| tiny | 10px | 400 | 1.50 | -0.15px | Overline text |

### Border Radius

- **micro**: 2px - Inline badges, toolbar buttons
- **sm**: 4px - Small containers, list items
- **md**: 6px - Buttons, inputs, functional elements
- **lg**: 8px - Cards, dropdowns, popovers
- **xl**: 12px - Panels, featured cards
- **full**: 9999px - Pills, filter chips
- **circle**: 50% - Icon buttons, avatars

### Spacing

Based on 8px grid with micro-adjustments:
- 1: 4px
- 2: 8px
- 3: 12px
- 4: 16px
- 6: 24px
- 8: 32px
- 12: 48px
- 16: 64px
- 24: 96px

## Components

### Button

```tsx
import { Button } from "@pisky/ui";

// Ghost button (default Linear style)
<Button variant="ghost">Click me</Button>

// Primary brand button
<Button variant="primary">Sign up</Button>

// Subtle button for toolbars
<Button variant="subtle">Action</Button>

// Icon button
<Button variant="icon" size="sm">
  <Icon />
</Button>
```

**Variants:**
- `default` - Uses theme primary color
- `secondary` - Uses theme secondary color
- `outline` - Transparent with border
- `ghost` - Linear's ghost button (nearly transparent)
- `subtle` - Toolbar button (slightly more visible)
- `primary` - Linear's brand indigo CTA
- `icon` - Circular icon button

**Sizes:**
- `sm` - 28px height, 12px font
- `md` - 36px height, 14px font
- `lg` - 44px height, 15px font

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@pisky/ui";

<Card>
  <CardHeader>
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>Feature description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Styling:**
- Background: `rgba(255, 255, 255, 0.02)`
- Border: `1px solid rgba(255, 255, 255, 0.08)`
- Radius: 8px
- Shadow: `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px`

### Input

```tsx
import { Input } from "@pisky/ui";

<Input placeholder="Enter text..." />
```

**Styling:**
- Background: `rgba(255, 255, 255, 0.02)`
- Border: `1px solid rgba(255, 255, 255, 0.08)`
- Radius: 6px
- Padding: 12px 14px

### Badge

```tsx
import { Badge } from "@pisky/ui";

<Badge variant="success">Active</Badge>
<Badge variant="neutral">Tag</Badge>
<Badge variant="subtle">v1.0</Badge>
```

**Variants:**
- `default` - Theme primary color
- `secondary` - Theme secondary color
- `outline` - Transparent with border
- `success` - Green background for status
- `neutral` - Transparent with dark border (Linear pill style)
- `subtle` - Subtle background for labels

### Text

```tsx
import { Text } from "@pisky/ui";

<Text scale="display" as="h1">Hero Headline</Text>
<Text scale="h3" as="h3">Section Title</Text>
<Text scale="body">Body text goes here</Text>
<Text scale="caption" as="span">Metadata</Text>
```

**Typography Scale:** See Typography Scale table above

## Usage Examples

### Hero Section

```tsx
<section style={{ background: "#08090a", padding: "80px 0" }}>
  <Text scale="display" as="h1" style={{ color: "#f7f8f8" }}>
    Build faster with Linear
  </Text>
  <Text scale="body-large" style={{ color: "#8a8f98", marginTop: 24 }}>
    The streamlined issue tracking tool for software teams
  </Text>
  <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
    <Button variant="primary">Start building</Button>
    <Button variant="ghost">View demo</Button>
  </div>
</section>
```

### Feature Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Feature Name</CardTitle>
    <CardDescription>
      Detailed description of the feature and its benefits
    </CardDescription>
  </CardHeader>
  <CardContent>
    {/* Feature content */}
  </CardContent>
</Card>
```

## Best Practices

### DO:
- Use Inter Variable with `"cv01", "ss03"` on all text
- Use weight 510 as default emphasis weight (Linear's signature)
- Apply negative letter-spacing at display sizes
- Build on near-black backgrounds (`#08090a`, `#0f1011`, `#191a1b`)
- Use semi-transparent white borders (`rgba(255,255,255,0.05-0.08)`)
- Keep button backgrounds nearly transparent (`rgba(255,255,255,0.02-0.05)`)
- Reserve brand indigo (`#5e6ad2` / `#7170ff`) for CTAs only
- Use `#f7f8f8` for primary text (not pure white)

### DON'T:
- Don't use pure white (`#ffffff`) as primary text
- Don't use solid colored backgrounds for buttons
- Don't apply brand indigo decoratively
- Don't use positive letter-spacing on display text
- Don't use visible/opaque borders on dark backgrounds
- Don't skip the OpenType features (`"cv01", "ss03"`)
- Don't use weight 700 (bold) - max is 590

## Component Updates

All components have been updated to follow the Linear design system:

1. **Button** - Added ghost, subtle, primary, and icon variants
2. **Card** - Updated with translucent backgrounds and subtle borders
3. **Input** - Updated with Linear's input styling
4. **Badge** - Added success, neutral, and subtle variants
5. **Text** - New component with full Linear typography scale

## CSS Variables

The design system exposes the following CSS variables:

```css
/* Colors */
--background: #08090a
--foreground: #f7f8f8
--primary: #5e6ad2
--accent: #7170ff

/* Typography */
--font-sans: Inter Variable
--font-mono: Berkeley Mono
--font-feature-settings: "cv01", "ss03"

/* Radius */
--radius-md: 6px
--radius-lg: 8px
--radius-full: 9999px
```

## Testing

To verify the design system is working correctly:

1. Check that all text uses Inter Variable with geometric alternates
2. Verify button backgrounds are nearly transparent on dark mode
3. Confirm borders are semi-transparent white
4. Test that brand indigo appears only on CTAs and interactive elements
5. Validate typography scale (especially 510 weight usage)

## Migration from Mintlify

If migrating from Mintlify theme:

1. Update environment variable to `NEXT_PUBLIC_THEME_PRESET=linear`
2. Replace any hardcoded colors with CSS variables
3. Update button variants to use Linear-specific variants
4. Apply typography scale using Text component
5. Update card and input styling to use translucent backgrounds

## Resources

- Design document: `docs/DESIGN.md`
- Theme presets: `packages/ui/src/theme/presets.ts`
- Typography utilities: `packages/ui/src/lib/typography.ts`
- Component examples: `packages/ui/src/components/ui/`
