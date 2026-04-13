# Linear Landing Page Clone - Design Spec

**Date**: 2025-04-13
**Status**: Approved
**Route**: `/linear-clone`

## Overview

Exact visual replica of the current Linear.app landing page with full animation fidelity, responsive design, and production-grade implementation.

## Aesthetic Direction

### Visual Style

- **Theme**: Dark-first with deep blacks (`#08090a` base)
- **Accents**: Subtle purple/indigo radial gradients
- **Typography**: Ultra-precise, tight letter-spacing (`-0.06em` for headlines)
- **Contrast**: High contrast for accessibility while maintaining sophistication
- **Depth**: Glass-morphism cards with subtle borders and layered transparencies

### Motion Philosophy

- **Orchestrated reveals**: Elements enter with staggered timing
- **Smooth transitions**: No jarring movements, all animations eased
- **Purposeful motion**: Every animation serves to guide attention or provide feedback
- **Performance-first**: Respect `prefers-reduced-motion`

## Technical Architecture

### Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Inline styles with CSS variables from existing theme system
- **Animation**: Framer Motion (via `framer-motion` package)
- **Typography**: Inter Variable (existing), may add display fonts if needed
- **Icons**: Lucide React (existing)

### File Structure

```
apps/web/app/(routes)/linear-clone/
├── page.tsx                    # Main landing page component
└── layout.tsx                  # Route-specific layout (if needed)

apps/web/features/linear-clone/
├── navigation.tsx              # Header with logo and nav
├── hero.tsx                    # Main hero section
├── feature-section.tsx         # Reusable feature layout
├── integrations.tsx            # Logo grid
├── testimonials.tsx            # Customer quotes
├── pricing.tsx                 # Pricing tiers
├── final-cta.tsx               # Bottom CTA
├── footer.tsx                  # Site footer
└── animations/
    ├── variants.ts             # Framer Motion variants
    ├── use-scroll-reveal.ts    # Custom hook for scroll animations
    └── parallax.tsx            # Parallax effect components
```

## Page Sections

### 1. Navigation

**Purpose**: Persistent header with logo, navigation links, and CTAs

**Components**:

- Logo (left) - Linear-style mark
- Navigation links (center) - Product, Solutions, Resources, Pricing
- CTA buttons (right) - "Sign in" (secondary), "Get started" (primary)

**Behavior**:

- Fixed position on scroll (with blur backdrop)
- Active state for current section
- Mobile: Hamburger menu with slide-in panel

### 2. Hero Section

**Purpose**: Immediate value proposition with visual impact

**Content**:

- Badge: "Issue tracking is just the beginning"
- Headline: "Linear is the tool that..."
- Subheadline: 2-3 sentence value prop
- CTA buttons: "Start free trial" (primary), "Watch demo" (secondary)
- Social proof: "Trusted by 50,000+ teams"
- Visual: Animated product interface mockup

**Animations**:

- Staggered fade-up on load (badge → headline → subhead → CTAs)
- Product mockup: Parallax float effect
- Subtle gradient animation in background

**Layout**:

- Desktop: 2-column (text left, visual right)
- Tablet: Stacked with reduced visual
- Mobile: Full-width text, simplified visual

### 3. Feature Sections (Multiple)

**Purpose**: Showcase key capabilities with visual evidence

**Pattern**:

- Alternating layouts (text-left/visual-right, then reverse)
- Each section: Badge → Headline → Description → Visual
- Scroll-triggered fade-up animations

**Content Areas**:

- Issue tracking evolution
- Project management
- Workflow automation
- Team collaboration
- Reporting & analytics

**Animations**:

- Intersection Observer triggers
- Staggered children animations
- Hover effects on interactive elements

### 4. Integrations Grid

**Purpose**: Show ecosystem compatibility

**Layout**:

- Grid of integration logos (4-5 columns on desktop)
- Infinite scroll or carousel

**Animations**:

- Staggered fade-in on scroll
- Hover: Logo scale + glow

**Integrations**: GitHub, Slack, Figma, Notion, Jira, etc.

### 5. Testimonials

**Purpose**: Social proof with customer stories

**Layout Options**:

- Grid (2-3 columns)
- Carousel with auto-scroll

**Content per testimonial**:

- Customer photo/avatar
- Name + company
- Quote (1-2 sentences)
- Company logo

**Animations**:

- Fade transitions between testimonials
- Hover: Slight lift effect

### 6. Pricing Section

**Purpose**: Clear pricing options with feature comparison

**Layout**:

- 3 pricing cards (Starter, Growth, Enterprise)
- Middle card (Growth) highlighted/prominent

**Content per tier**:

- Tier name
- Price (monthly/annual toggle)
- Feature list (checkmarks)
- CTA button

**Animations**:

- Cards fade-up on scroll
- Hover: Border glow, slight lift
- Toggle: Smooth price transition

### 7. Final CTA

**Purpose**: Last conversion opportunity

**Content**:

- Large headline: "Ready to ship faster?"
- Subtext
- CTA buttons
- Optional: Product screenshot or illustration

**Style**:

- Full-width colored background
- Centered content

### 8. Footer

**Purpose**: Navigation and supplementary links

**Layout**:

- 4-5 columns of links
- Newsletter signup
- Social links
- Copyright/legal

**Columns**:

- Product
- Resources
- Company
- Legal

## Animation System

### Framer Motion Variants

```typescript
// Fade up (most common)
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Staggered children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Parallax float
const float = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
```

### Scroll Reveal Hook

Custom hook that uses Intersection Observer to trigger animations when elements enter viewport:

```typescript
useScrollReveal({
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
});
```

### Animation Timing

- **Hero load**: Total 600ms (staggered over 4-5 elements)
- **Scroll sections**: 400-500ms per section
- **Hover effects**: 150-200ms
- **Page transitions**: Not needed (single page)

## Responsive Breakpoints

Matching Linear's breakpoints:

```css
/* Mobile first */
base: 0px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Layout Changes by Breakpoint

**Mobile (< 768px)**:

- Single column layouts
- Simplified hero visual
- Stacked pricing cards
- Hamburger navigation

**Tablet (768px - 1024px)**:

- 2-column layouts
- Reduced spacing
- Smaller typography

**Desktop (1024px+)**:

- Full multi-column layouts
- Maximum spacing
- All visual elements
- Full parallax effects

## Performance Considerations

### Optimization Strategies

1. **Lazy loading**: Images and below-fold sections
2. **Code splitting**: Separate chunks for major sections
3. **Animation budgets**: Limit concurrent animations
4. **Reduced motion**: Respect `prefers-reduced-motion` media query
5. **Image optimization**: Next.js Image component, WebP format

### Accessibility

- **Keyboard navigation**: All interactive elements accessible via keyboard
- **Screen readers**: Proper ARIA labels and semantic HTML
- **Focus indicators**: Visible focus states
- **Color contrast**: WCAG AA minimum (4.5:1 for text)
- **Motion**: Respect `prefers-reduced-motion`

## Content Strategy

### Copy Guidelines

- Match Linear's tone: precise, confident, minimal
- Short paragraphs (1-3 sentences)
- Active voice
- Feature-focused, not buzzword-heavy

### Visual Assets

- Product mockups: CSS-only replicas (no screenshots)
- Logos: SVG format
- Icons: Lucide React (existing)
- Gradients: CSS radial gradients

## Success Criteria

### Visual Fidelity

- [ ] Matches Linear's color scheme exactly
- [ ] Typography sizing and spacing matches
- [ ] All animations smooth and performant
- [ ] Responsive across all breakpoints

### Functional Requirements

- [ ] All navigation links work (anchor links)
- [ ] CTA buttons have hover states
- [ ] Mobile menu functional
- [ ] Scroll animations trigger correctly

### Performance

- [ ] Lighthouse score 90+ on all metrics
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] No layout shift (CLS < 0.1)

### Accessibility

- [ ] WCAG AA compliant
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Respects motion preferences

## Implementation Notes

### Reusing Existing Patterns

- Theme variables from `apps/web/app/globals.css`
- UI components from `@pisky/ui` (Button, Card, Badge)
- Existing animation keyframes as fallback

### New Dependencies

```json
{
  "framer-motion": "^11.0.0"
}
```

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+
- Chrome Android

## Next Steps

After design approval:

1. Install Framer Motion
2. Create route structure
3. Build reusable animation components
4. Implement sections bottom-to-top (footer first, hero last)
5. Add scroll animations last
6. Test responsiveness
7. Performance audit
8. Accessibility review
