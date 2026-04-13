# Linear Landing Page Clone

## Overview

Exact visual replica of the Linear.app landing page, built with Next.js 15, React 19, and Framer Motion.

## Location

Route: `/linear-clone`

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Animation**: Framer Motion 12
- **Styling**: Tailwind CSS with inline styles and CSS variables
- **TypeScript**: Full type safety
- **React**: 19.2.5

## Components

### Navigation

**File**: `apps/web/features/linear-clone/navigation.tsx`

Features:

- Fixed header with scroll blur effect
- Responsive mobile menu with smooth animations
- Smooth scroll to sections
- Logo animation on hover
- CTA button with gradient effect

Key behaviors:

- Transparent at top, blurred background on scroll
- Collapsible mobile menu with AnimatePresence
- Passive scroll listener for performance

### Hero Section

**File**: `apps/web/features/linear-clone/hero.tsx`

Features:

- Full viewport height (min-h-screen)
- Animated gradient background
- Large headline with staggered text animations
- Two CTA buttons (primary and secondary)
- Trust badges below CTAs
- Floating product mockup with scale animation

Animation sequence:

1. Navigation slides down from top
2. Hero content fades up with stagger
3. Product mockup scales in with delay

### Features Section

**File**: `apps/web/features/linear-clone/feature-section.tsx`

Features:

- Reusable component for feature showcases
- Alternating left/right layouts via `reverse` prop
- Scroll-triggered animations
- Custom visual elements passed as children
- Badge, title, and description props

Three feature implementations:

1. **Intake** - Slack to Linear issue conversion flow
2. **Plan** - Quarterly roadmap visualization
3. **Build** - Agent workflow timeline

### Integrations Section

**File**: `apps/web/features/linear-clone/integrations.tsx`

Features:

- Grid of 8 integration logos
- Hover scale and glow effects
- Responsive grid (2/4/8 columns)
- Staggered entrance animations

Integration logos:

- Slack, GitHub, Figma, Notion
- Jira, VS Code, Discord, Zapier

### Testimonials Section

**File**: `apps/web/features/linear-clone/testimonials.tsx`

Features:

- Three customer testimonials
- Hover lift and shadow effects
- Responsive grid (1/3 columns)
- Avatar, name, role, company, and quote

### Pricing Section

**File**: `apps/web/features/linear-clone/pricing.tsx`

Features:

- Three pricing tiers (Starter, Growth, Enterprise)
- Monthly/annual toggle with state management
- Animated pricing switch
- Highlighted "Most Popular" tier (Growth)
- Feature lists with checkmarks
- Responsive card layout

Pricing tiers:

- **Starter**: $0/month - 10 users, basic features
- **Growth**: $15/month - Unlimited users, advanced workflows
- **Enterprise**: $49/month - SSO, security, dedicated support

### Final CTA Section

**File**: `apps/web/features/linear-clone/final-cta.tsx`

Features:

- Radial gradient background
- Large headline with gradient text
- Single CTA button
- Centered layout

### Footer

**File**: `apps/web/features/linear-clone/footer.tsx`

Features:

- Newsletter signup with input and button
- Four link columns (Product, Resources, Company, Legal)
- Social links (Twitter, GitHub, Discord)
- Copyright notice
- Responsive grid layout

## Animation System

### Variants

**File**: `apps/web/features/linear-clone/animations/variants.ts`

Pre-built animation variants for consistent motion design:

```typescript
// Fade up animation (most common)
fadeUp: {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Staggered children container
staggerContainer: {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Fade in animation
fadeIn: {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

// Scale fade animation
scaleFade: {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
}

// Slide from left
slideFromLeft: {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}

// Slide from right
slideFromRight: {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
}
```

All variants use optimized transition settings:

- Duration: 0.3-0.5s
- Ease: Custom bezier `[0.25, 0.1, 0.25, 1]` for smooth feel

### useScrollReveal Hook

**File**: `apps/web/features/linear-clone/animations/use-scroll-reveal.tsx`

Custom hook for scroll-triggered animations:

```typescript
const { ref, isInView } = useScrollReveal((threshold = 0.1));
```

**Parameters**:

- `threshold`: Amount of element visible before triggering (0-1, default: 0.1)

**Returns**:

- `ref`: React ref to attach to element
- `isInView`: Boolean indicating if element is in view

**Behavior**:

- Uses Framer Motion's `useInView` hook
- Triggers animation once only (`once: true`)
- Automatically cleans up listeners

**Usage example**:

```tsx
const { ref, isInView } = useScrollReveal();

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={fadeUp}
>
  Content animates on scroll
</motion.div>;
```

## Responsive Breakpoints

Uses Tailwind CSS default breakpoints:

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1023px (sm, md, lg)
- **Desktop**: 1024px+ (xl, 2xl)

Responsive patterns:

- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Typography: `text-2xl md:text-4xl lg:text-5xl`
- Spacing: `p-4 md:p-6 lg:p-8`
- Navigation: Hidden on mobile, hamburger menu

## Customization

### Colors

Edit CSS variables in `apps/web/app/globals.css`:

```css
:root {
  /* Base theme colors */
  --background: #ffffff;
  --foreground: #111111;
  --border: #e5e5e5;

  /* Linear Clone specific variables */
  --background-muted: #fafafa;
  --foreground-muted: #666666;
  --foreground-subtle: #999999;
  --surface: #ffffff;
  --surface-elevated: #ffffff;
  --surface-hover: #f5f5f5;
  --border-subtle: #eaeaea;

  /* Spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  /* Typography */
  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, monospace;
  --font-heading: Inter, ui-sans-serif, system-ui, sans-serif;
  --font-size-base: 16px;
}
```

### Animations

Adjust animation timings in `apps/web/features/linear-clone/animations/variants.ts`:

```typescript
transition: {
  duration: 0.5,  // Change duration (seconds)
  ease: [0.25, 0.1, 0.25, 1],  // Change easing (bezier curve)
  delay: 0,  // Add delay
}
```

Common easing functions:

- `[0.25, 0.1, 0.25, 1]` - Default smooth (recommended)
- `"easeOut"` - Quick start, slow end
- `"easeInOut"` - Slow start and end
- `"linear"` - Constant speed

### Component Props

**FeatureSection**:

```tsx
<FeatureSection
  badge="1.0 Intake"
  title="Feature title"
  description="Feature description"
  reverse={boolean} // Alternate layout
>
  {/* Custom visual element */}
</FeatureSection>
```

## Performance Considerations

### Optimizations Implemented

1. **GPU-Accelerated Animations**
   - Only animate `opacity`, `scale`, and `transform` (translate)
   - Avoid animating `height`, `width`, `top`, `left`
   - Uses `transform3d` for hardware acceleration

2. **Scroll Performance**
   - Passive scroll listeners (`{ passive: true }`)
   - Scroll animations trigger once only
   - Intersection Observer for viewport detection

3. **Code Splitting**
   - Framer Motion loaded as dependency
   - Component-level imports
   - Next.js automatic code splitting

4. **Render Optimization**
   - Minimal state updates
   - Conditional rendering with AnimatePresence
   - Memoized callbacks where needed

### Future Optimizations

- Lazy load Framer Motion for better initial load
- Dynamic imports for below-fold components
- Image optimization with next/image
- Reduce motion for users with `prefers-reduced-motion`

## Accessibility Notes

Current implementation focuses on visual fidelity. For production use, consider adding:

### Immediate Improvements

1. **Focus Indicators**

   ```tsx
   className = "focus:outline-none focus:ring-2 focus:ring-primary";
   ```

2. **ARIA Labels**

   ```tsx
   <button aria-label="Open mobile menu">
   <nav aria-label="Main navigation">
   ```

3. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Add visible focus states
   - Support Tab/Enter/Escape keys

4. **Reduced Motion**

   ```tsx
   const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

   <motion.div
     animate={prefersReducedMotion ? 'visible' : 'animate'}
   >
   ```

### Semantic HTML

- Use proper heading hierarchy (h1, h2, h3)
- Add `alt` text to images
- Use `<button>` for actions, `<a>` for links
- Include `aria-expanded` for collapsible content

## Browser Support

- **Chrome/Edge**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support (including iOS)
- **Mobile**: Full responsive support

Minimum versions:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
