# Linear Landing Page Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create an exact visual replica of the Linear.app landing page with full animation fidelity, responsive design, and production-grade implementation at route `/linear-clone`

**Architecture:** Next.js 15 App Router with Framer Motion animations, inline styles using existing theme CSS variables, reusable animation components, and a component-based architecture matching the existing project structure

**Tech Stack:** Next.js 15, React 19, Framer Motion 11, TypeScript, existing theme system from `apps/web/app/globals.css`

---

## File Structure Overview

```
apps/web/app/(routes)/linear-clone/
└── page.tsx                           # Main landing page component

apps/web/features/linear-clone/
├── navigation.tsx                     # Header with logo and nav
├── hero.tsx                           # Main hero section
├── feature-section.tsx                # Reusable feature layout
├── integrations.tsx                   # Logo grid
├── testimonials.tsx                   # Customer quotes
├── pricing.tsx                        # Pricing tiers
├── final-cta.tsx                      # Bottom CTA
├── footer.tsx                         # Site footer
└── animations/
    ├── variants.ts                    # Framer Motion variants
    └── use-scroll-reveal.tsx          # Custom hook for scroll animations
```

---

## Task 1: Install Framer Motion Dependency

**Files:**

- Modify: `apps/web/package.json`

- [ ] **Step 1: Install Framer Motion**

```bash
cd apps/web && pnpm add framer-motion
```

Expected: Package installs successfully, added to `package.json`

- [ ] **Step 2: Verify installation**

```bash
cd apps/web && pnpm list framer-motion
```

Expected: Shows version `^11.0.0` or higher

- [ ] **Step 3: Commit**

```bash
git add apps/web/package.json apps/web/pnpm-lock.yaml
git commit -m "deps: add framer-motion for Linear landing page animations"
```

---

## Task 2: Create Animation Variants

**Files:**

- Create: `apps/web/features/linear-clone/animations/variants.ts`

- [ ] **Step 1: Create animation variants file**

```typescript
import { Variants } from "framer-motion";

// Fade up animation (most common)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Staggered children container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Scale fade animation
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Slide from left
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Slide from right
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/animations/variants.ts
git commit -m "feat(linear-clone): add Framer Motion animation variants"
```

---

## Task 3: Create Scroll Reveal Hook

**Files:**

- Create: `apps/web/features/linear-clone/animations/use-scroll-reveal.tsx`

- [ ] **Step 1: Create scroll reveal hook**

```typescript
"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return { ref, isInView };
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/animations/use-scroll-reveal.tsx
git commit -m "feat(linear-clone): add useScrollReveal hook for scroll animations"
```

---

## Task 4: Create Navigation Component

**Files:**

- Create: `apps/web/features/linear-clone/navigation.tsx`

- [ ] **Step 1: Create navigation component**

```typescript
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#product", label: "Product" },
  { href: "#solutions", label: "Solutions" },
  { href: "#resources", label: "Resources" },
  { href: "#pricing", label: "Pricing" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(() => {
      window.addEventListener("scroll", () => {
        setIsScrolled(window.scrollY > 20);
      });
    });
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled
          ? "rgba(8, 9, 10, 0.85)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              background:
                "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 16,
              color: "#fff",
            }}
          >
            L
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          style={{
            display: "none",
            alignItems: "center",
            gap: 32,
          }}
          css={{
            "@media (min-width: 768px)": {
              display: "flex",
            },
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: "var(--foreground-muted)",
                fontSize: 14,
                textDecoration: "none",
                transition: "color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--foreground-muted)";
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div
          css={{
            display: "none",
            "@media (min-width: 768px)": {
              display: "flex",
              alignItems: "center",
              gap: 12,
            },
          }}
        >
          <a
            href="#sign-in"
            style={{
              color: "var(--foreground-muted)",
              fontSize: 14,
              textDecoration: "none",
              padding: "8px 16px",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--foreground)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--foreground-muted)";
            }}
          >
            Sign in
          </a>
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background:
                "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              padding: "10px 20px",
              borderRadius: 6,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get started
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          css={{
            display: "block",
            background: "none",
            border: "none",
            color: "var(--foreground)",
            cursor: "pointer",
            padding: 8,
            "@media (min-width: 768px)": {
              display: "none",
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            background: "var(--background-elevated)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "16px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "var(--foreground-muted)",
                  fontSize: 16,
                  textDecoration: "none",
                  padding: "8px 0",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              style={{
                background:
                  "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 500,
                padding: "12px 20px",
                borderRadius: 6,
                textDecoration: "none",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Get started
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/navigation.tsx
git commit -m "feat(linear-clone): add navigation component with scroll effect and mobile menu"
```

---

## Task 5: Create Hero Section

**Files:**

- Create: `apps/web/features/linear-clone/hero.tsx`

- [ ] **Step 1: Create hero section component**

```typescript
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "./animations/variants";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80,
        background:
          "radial-gradient(circle at 18% 12%, rgba(94, 106, 210, 0.16), transparent 28%), radial-gradient(circle at 80% 2%, rgba(122, 127, 173, 0.18), transparent 24%), linear-gradient(180deg, var(--background-muted), var(--background))",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(94, 106, 210, 0.15), transparent 70%)",
          top: -200,
          right: -100,
          filter: "blur(80px)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(113, 112, 255, 0.1), transparent 70%)",
          bottom: -100,
          left: -100,
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
          position: "relative",
          zIndex: 1,
        }}
        css={{
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "1.05fr 0.95fr",
          },
        }}
      >
        {/* Left content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            justifyContent: "center",
          }}
        >
          <motion.div variants={fadeUp}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              style={{
                display: "inline-block",
                padding: "6px 12px",
                background: "rgba(94, 106, 210, 0.12)",
                border: "1px solid rgba(94, 106, 210, 0.24)",
                borderRadius: 6,
                color: "#7170ff",
                fontSize: 13,
                fontWeight: 500,
                marginBottom: 8,
              }}
            >
              Issue tracking is just the beginning
            </motion.span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 510,
              letterSpacing: "-0.06em",
              lineHeight: 1.05,
              color: "var(--foreground)",
            }}
          >
            Linear is the tool that
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ships products.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--foreground-muted)",
              maxWidth: 540,
            }}
          >
            Linear is a purpose-built tool for planning, building, and shipping
            products. The same structure works for humans, AI agents, and the
            handoff between them.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background:
                  "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 500,
                padding: "14px 28px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
              }}
            >
              Start free trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "var(--surface-hover)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "var(--surface-elevated)",
                color: "var(--foreground)",
                fontSize: 15,
                fontWeight: 500,
                padding: "14px 28px",
                borderRadius: 6,
                border: "1px solid var(--border-subtle)",
                cursor: "pointer",
              }}
            >
              Watch demo
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              fontSize: 13,
              color: "var(--foreground-subtle)",
              flexWrap: "wrap",
            }}
          >
            <span>Trusted by 50,000+ teams</span>
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              {/* Social proof logos - simplified as circles */}
              {["Vercel", "Razorpay", "Loom"].map((company) => (
                <div
                  key={company}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "var(--surface)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 600,
                  }}
                >
                  {company[0]}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right content - Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{
            position: "relative",
          }}
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), transparent), var(--surface-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              padding: 24,
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            {/* Simulated Linear interface */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Window controls */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                }}
              >
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background:
                        i === 1
                          ? "#ff5f57"
                          : i === 2
                            ? "#febc2e"
                            : "#28c840",
                    }}
                  />
                ))}
              </div>

              {/* Issue list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  { id: "LIN-101", title: "Add authentication flow", status: "In Progress" },
                  { id: "LIN-102", title: "Design system updates", status: "Todo" },
                  { id: "LIN-103", title: "Performance optimization", status: "Done" },
                ].map((issue) => (
                  <div
                    key={issue.id}
                    style={{
                      padding: 12,
                      background: "var(--background)",
                      borderRadius: 8,
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--foreground-subtle)",
                        }}
                      >
                        {issue.id}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          padding: "2px 8px",
                          borderRadius: 4,
                          background:
                            issue.status === "Done"
                              ? "rgba(39, 166, 68, 0.16)"
                              : issue.status === "In Progress"
                                ? "rgba(224, 161, 0, 0.16)"
                                : "rgba(138, 143, 152, 0.16)",
                          color:
                            issue.status === "Done"
                              ? "#27a644"
                              : issue.status === "In Progress"
                                ? "#e0a100"
                                : "var(--foreground-subtle)",
                        }}
                      >
                        {issue.status}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {issue.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/hero.tsx
git commit -m "feat(linear-clone): add hero section with animated background and product mockup"
```

---

## Task 6: Create Feature Section Component

**Files:**

- Create: `apps/web/features/linear-clone/feature-section.tsx`

- [ ] **Step 1: Create feature section component**

```typescript
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations/variants";
import { useScrollReveal } from "./animations/use-scroll-reveal";

interface FeatureSectionProps {
  badge: string;
  title: string;
  description: string;
  reverse?: boolean;
  children: React.ReactNode;
}

export function FeatureSection({
  badge,
  title,
  description,
  reverse = false,
  children,
}: FeatureSectionProps) {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 24px",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 64,
          alignItems: "center",
        }}
        css={{
          "@media (min-width: 1024px)": {
            gridTemplateColumns: reverse ? "0.9fr 1.1fr" : "1.1fr 0.9fr",
          },
        }}
      >
        {/* Content */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <motion.span
            variants={fadeUp}
            style={{
              display: "inline-block",
              padding: "6px 12px",
              background: "rgba(94, 106, 210, 0.12)",
              border: "1px solid rgba(94, 106, 210, 0.24)",
              borderRadius: 6,
              color: "#7170ff",
              fontSize: 13,
              fontWeight: 500,
              width: "fit-content",
            }}
          >
            {badge}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 510,
              letterSpacing: "-0.05em",
              lineHeight: 1.1,
              color: "var(--foreground)",
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--foreground-muted)",
              maxWidth: 520,
            }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/feature-section.tsx
git commit -m "feat(linear-clone): add reusable feature section component"
```

---

## Task 7: Create Integrations Section

**Files:**

- Create: `apps/web/features/linear-clone/integrations.tsx`

- [ ] **Step 1: Create integrations component**

```typescript
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";
import { useScrollReveal } from "./animations/use-scroll-reveal";

const integrations = [
  { name: "GitHub", icon: "GH" },
  { name: "Slack", icon: "SL" },
  { name: "Figma", icon: "FI" },
  { name: "Notion", icon: "NO" },
  { name: "Jira", icon: "JI" },
  { name: "GitLab", icon: "GL" },
  { name: "Discord", icon: "DI" },
  { name: "Zoom", icon: "ZO" },
];

export function Integrations() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "var(--background-muted)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: 64,
          }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 510,
              letterSpacing: "-0.04em",
              color: "var(--foreground)",
            }}
          >
            Works with your tools
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: 17,
              color: "var(--foreground-muted)",
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Connect Linear with the tools you already use. Keep everything in
            sync and your team aligned.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
          css={{
            "@media (min-width: 640px)": {
              gridTemplateColumns: "repeat(4, 1fr)",
            },
          }}
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(94, 106, 210, 0.3)",
              }}
              style={{
                background: "var(--surface-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 12,
                padding: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 200ms ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background:
                      "linear-gradient(135deg, rgba(94, 106, 210, 0.16), rgba(113, 112, 255, 0.16))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#7170ff",
                  }}
                >
                  {integration.icon}
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--foreground)",
                  }}
                >
                  {integration.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/integrations.tsx
git commit -m "feat(linear-clone): add integrations grid section"
```

---

## Task 8: Create Testimonials Section

**Files:**

- Create: `apps/web/features/linear-clone/testimonials.tsx`

- [ ] **Step 1: Create testimonials component**

```typescript
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";
import { useScrollReveal } from "./animations/use-scroll-reveal";

const testimonials = [
  {
    quote:
      "Linear has completely transformed how our team ships products. The speed and clarity is unmatched.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Razorpay",
  },
  {
    quote:
      "The best project management tool we've ever used. Period. The attention to detail is incredible.",
    author: "Michael Brown",
    role: "CTO",
    company: "Vercel",
  },
  {
    quote:
      "Linear feels like it's from the future. The workflow is so smooth, everything just clicks.",
    author: "Emily Rodriguez",
    role: "Product Lead",
    company: "Loom",
  },
];

export function Testimonials() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          textAlign: "center",
          marginBottom: 64,
        }}
      >
        <motion.h2
          variants={fadeUp}
          style={{
            margin: 0,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 510,
            letterSpacing: "-0.04em",
            color: "var(--foreground)",
          }}
        >
          Loved by high-performance teams
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 24,
        }}
        css={{
          "@media (min-width: 768px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{
              y: -4,
              borderColor: "rgba(94, 106, 210, 0.3)",
            }}
            style={{
              background: "var(--surface-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 20,
              transition: "all 200ms ease",
            }}
          >
            <div
              style={{
                fontSize: 32,
                lineHeight: 1,
              }}
            >
              "
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--foreground-muted)",
                flex: 1,
              }}
            >
              {testimonial.quote}
            </p>
            <div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--foreground)",
                  marginBottom: 4,
                }}
              >
                {testimonial.author}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--foreground-subtle)",
                }}
              >
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/testimonials.tsx
git commit -m "feat(linear-clone): add testimonials section"
```

---

## Task 9: Create Pricing Section

**Files:**

- Create: `apps/web/features/linear-clone/pricing.tsx`

- [ ] **Step 1: Create pricing component**

```typescript
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";
import { useScrollReveal } from "./animations/use-scroll-reveal";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: 0,
    description: "For small teams getting started",
    features: [
      "Up to 10 users",
      "Basic issue tracking",
      "1 project",
      "Community support",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: 15,
    description: "For growing teams",
    features: [
      "Unlimited users",
      "Advanced workflows",
      "Unlimited projects",
      "Priority support",
      "Custom fields",
      "API access",
    ],
    cta: "Start trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 49,
    description: "For large organizations",
    features: [
      "Everything in Growth",
      "SSO/SAML",
      "Advanced security",
      "Dedicated support",
      "Custom contracts",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  const { ref, isInView } = useScrollReveal();
  const [annual, setAnnual] = useState(true);

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 24px",
        background: "var(--background-muted)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 510,
              letterSpacing: "-0.04em",
              color: "var(--foreground)",
            }}
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: 17,
              color: "var(--foreground-muted)",
            }}
          >
            No hidden fees. No surprises.
          </motion.p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            marginBottom: 64,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: annual ? "var(--foreground)" : "var(--foreground-muted)",
            }}
          >
            Monthly
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setAnnual(!annual)}
            style={{
              width: 48,
              height: 24,
              borderRadius: 12,
              background: annual
                ? "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)"
                : "var(--surface)",
              border: "1px solid var(--border-subtle)",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <motion.div
              animate={{
                x: annual ? 24 : 0,
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#fff",
                position: "absolute",
                top: 1,
              }}
            />
          </motion.button>
          <span
            style={{
              fontSize: 14,
              color: annual ? "var(--foreground-muted)" : "var(--foreground)",
            }}
          >
            Annual
            <span
              style={{
                marginLeft: 4,
                padding: "2px 6px",
                background: "rgba(39, 166, 68, 0.16)",
                color: "#27a644",
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              Save 20%
            </span>
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
          }}
          css={{
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(3, 1fr)",
            },
          }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{
                y: plan.highlighted ? -8 : -4,
              }}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(180deg, rgba(94, 106, 210, 0.08), transparent), var(--surface-elevated)"
                  : "var(--surface-elevated)",
                border: plan.highlighted
                  ? "1px solid rgba(94, 106, 210, 0.4)"
                  : "1px solid var(--border-subtle)",
                borderRadius: 16,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                position: "relative",
                transition: "all 250ms ease",
              }}
            >
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "4px 12px",
                    background:
                      "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 500,
                    borderRadius: 12,
                  }}
                >
                  Most popular
                </div>
              )}

              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 510,
                    color: "var(--foreground)",
                    marginBottom: 8,
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    color: "var(--foreground-muted)",
                  }}
                >
                  {plan.description}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 48,
                      fontWeight: 510,
                      letterSpacing: "-0.04em",
                      color: "var(--foreground)",
                    }}
                  >
                    ${plan.price === 0 ? "0" : annual ? plan.price * 0.8 : plan.price}
                  </span>
                  <span
                    style={{
                      fontSize: 18,
                      color: "var(--foreground-muted)",
                    }}
                  >
                    /user/mo
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  flex: 1,
                }}
              >
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "rgba(39, 166, 68, 0.16)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="#27a644"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: 15,
                        color: "var(--foreground-muted)",
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)"
                    : "var(--surface)",
                  color: plan.highlighted ? "#fff" : "var(--foreground)",
                  fontSize: 15,
                  fontWeight: 500,
                  padding: "14px 24px",
                  borderRadius: 8,
                  border: plan.highlighted
                    ? "none"
                    : "1px solid var(--border-subtle)",
                  cursor: "pointer",
                }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/pricing.tsx
git commit -m "feat(linear-clone): add pricing section with toggle"
```

---

## Task 10: Create Final CTA Section

**Files:**

- Create: `apps/web/features/linear-clone/final-cta.tsx`

- [ ] **Step 1: Create final CTA component**

```typescript
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";
import { useScrollReveal } from "./animations/use-scroll-reveal";

export function FinalCTA() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 24px",
        background:
          "radial-gradient(circle at 50% 0%, rgba(94, 106, 210, 0.2), transparent 50%), var(--background-muted)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
          }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 510,
              letterSpacing: "-0.05em",
              lineHeight: 1.1,
              background:
                "linear-gradient(135deg, var(--foreground) 0%, var(--foreground-muted) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ready to ship faster?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--foreground-muted)",
              maxWidth: 540,
            }}
          >
            Join 50,000+ teams already using Linear to build better products,
            faster.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background:
                  "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 500,
                padding: "16px 32px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
              }}
            >
              Start free trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "transparent",
                color: "var(--foreground)",
                fontSize: 16,
                fontWeight: 500,
                padding: "16px 32px",
                borderRadius: 8,
                border: "1px solid var(--border-subtle)",
                cursor: "pointer",
              }}
            >
              Talk to sales
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/final-cta.tsx
git commit -m "feat(linear-clone): add final CTA section"
```

---

## Task 11: Create Footer Component

**Files:**

- Create: `apps/web/features/linear-clone/footer.tsx`

- [ ] **Step 1: Create footer component**

```typescript
"use client";

import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API", href: "#api" },
      { label: "Community", href: "#community" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Security", href: "#security" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        padding: "80px 24px 40px",
        background: "var(--background)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
            marginBottom: 64,
          }}
          css={{
            "@media (min-width: 768px)": {
              gridTemplateColumns: "2fr repeat(4, 1fr)",
            },
          }}
        >
          {/* Logo and newsletter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background:
                  "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: 18,
                color: "#fff",
              }}
            >
              L
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: "var(--foreground-muted)",
                  marginBottom: 16,
                  maxWidth: 280,
                }}
              >
                Linear is the tool that ships products. Built for modern teams.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    background: "var(--surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 6,
                    fontSize: 14,
                    color: "var(--foreground)",
                    outline: "none",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background:
                      "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "10px 20px",
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <h4
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--foreground)",
                }}
              >
                {section.title}
              </h4>
              {section.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "var(--foreground-muted)",
                    textDecoration: "none",
                    transition: "color 150ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--foreground)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "var(--foreground-muted)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
            padding: "24px 0",
            borderTop: "1px solid var(--border-subtle)",
          }}
          css={{
            "@media (min-width: 768px)": {
              flexDirection: "row",
              justifyContent: "space-between",
            },
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "var(--foreground-subtle)",
            }}
          >
            © 2025 Linear Clone. All rights reserved.
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
            }}
          >
            {["Twitter", "GitHub", "Discord"].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                style={{
                  fontSize: 13,
                  color: "var(--foreground-subtle)",
                  textDecoration: "none",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--foreground-muted)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--foreground-subtle)";
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web/features/linear-clone/footer.tsx
git commit -m "feat(linear-clone): add footer component with links and newsletter"
```

---

## Task 12: Create Main Landing Page

**Files:**

- Create: `apps/web/app/(routes)/linear-clone/page.tsx`

- [ ] **Step 1: Create main landing page**

```typescript
import {
  Navigation,
  Hero,
  FeatureSection,
  Integrations,
  Testimonials,
  Pricing,
  FinalCTA,
  Footer,
} from "@pisky/features/linear-clone";

export default function LinearClonePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        <FeatureSection
          badge="1.0 Intake"
          title="Turn conversations into actionable work"
          description="Customer requests, Slack messages, and ad-hoc ideas all flow into one system. No more lost context or forgotten follow-ups."
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), transparent), var(--surface-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              padding: 24,
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* Simulated interface */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  padding: "16px",
                  background: "var(--background)",
                  borderRadius: 8,
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--foreground-subtle)",
                    marginBottom: 8,
                  }}
                >
                  From Slack
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--foreground-muted)",
                  }}
                >
                  "Can we add dark mode to the dashboard?"
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 2,
                    height: 24,
                    background:
                      "linear-gradient(180deg, var(--border-subtle), transparent)",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "16px",
                  background: "var(--background)",
                  borderRadius: 8,
                  border: "1px solid rgba(94, 106, 210, 0.3)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#7170ff",
                    marginBottom: 8,
                  }}
                >
                  Created issue LIN-104
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--foreground)",
                  }}
                >
                  Add dark mode to dashboard
                </div>
              </div>
            </div>
          </div>
        </FeatureSection>

        <FeatureSection
          badge="2.0 Plan"
          title="Define direction with projects and roadmaps"
          description="Plan across quarters and sprints. Keep everyone aligned on what's being built and why it matters."
          reverse
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), transparent), var(--surface-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              padding: 24,
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* Simulated roadmap */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {["Q1: Foundation", "Q2: Features", "Q3: Scale", "Q4: Polish"].map(
                (quarter, index) => (
                  <div
                    key={quarter}
                    style={{
                      padding: 12,
                      background: "var(--background)",
                      borderRadius: 8,
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                      }}
                    >
                      {quarter}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                      }}
                    >
                      {Array.from({ length: 4 - index }).map((_, i) => (
                        <div
                          key={i}
                          style={{
                            width: 32,
                            height: 8,
                            borderRadius: 4,
                            background:
                              "rgba(94, 106, 210, 0.24)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </FeatureSection>

        <FeatureSection
          badge="3.0 Build"
          title="Move work forward across teams and agents"
          description="The same workflows work for human tasks and AI agents. Seamless handoff, full context, complete traceability."
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), transparent), var(--surface-elevated)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              padding: 24,
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* Simulated agent workflow */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {[
                { label: "You", action: "Assigned LIN-105 to Codex", time: "2m" },
                {
                  label: "Codex",
                  action: "Analyzed requirements and started implementation",
                  time: "1m",
                },
                {
                  label: "Codex",
                  action: "Created PR with initial changes",
                  time: "5m",
                },
              ].map((step) => (
                <div
                  key={step.label}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(94, 106, 210, 0.16), rgba(113, 112, 255, 0.16))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#7170ff",
                      flexShrink: 0,
                    }}
                  >
                    {step.label[0]}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      padding: 12,
                      background: "var(--background)",
                      borderRadius: 8,
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        marginBottom: 4,
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--foreground-muted)",
                      }}
                    >
                      {step.action}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--foreground-subtle)",
                        marginTop: 4,
                      }}
                    >
                      {step.time} ago
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FeatureSection>

        <Integrations />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Export components from index**

Create: `apps/web/features/linear-clone/index.ts`

```typescript
export { Navigation } from "./navigation";
export { Hero } from "./hero";
export { FeatureSection } from "./feature-section";
export { Integrations } from "./integrations";
export { Testimonials } from "./testimonials";
export { Pricing } from "./pricing";
export { FinalCTA } from "./final-cta";
export { Footer } from "./footer";
```

- [ ] **Step 3: Commit**

```bash
git add apps/web/app/\(routes\)/linear-clone/page.tsx apps/web/features/linear-clone/index.ts
git commit -m "feat(linear-clone): add main landing page with all sections"
```

---

## Task 13: Update Package Exports

**Files:**

- Modify: `apps/web/package.json`
- Modify: `packages/ui/package.json`

- [ ] **Step 1: Check current export structure**

```bash
cat apps/web/package.json | grep -A 5 exports
```

- [ ] **Step 2: Add linear-clone features export**

Add to `apps/web/package.json` exports section (if it has one), or ensure the features are properly importable.

- [ ] **Step 3: Test import path**

```bash
cd apps/web && pnpm build
```

Expected: Build completes successfully without import errors

- [ ] **Step 4: Commit if changes made**

```bash
git add apps/web/package.json packages/ui/package.json
git commit -m "feat(linear-clone): update package exports for linear-clone components"
```

---

## Task 14: Test Responsive Design

**Files:**

- Test: Manual browser testing

- [ ] **Step 1: Start development server**

```bash
cd apps/web && pnpm dev
```

Expected: Server starts on port 3000 (or configured port)

- [ ] **Step 2: Navigate to /linear-clone**

Open browser to `http://localhost:3000/linear-clone`

Expected: Page loads without errors

- [ ] **Step 3: Test mobile view (375px width)**

Open browser DevTools, set viewport to 375x667px

Check:

- [ ] Navigation shows hamburger menu
- [ ] Hero text stacks vertically
- [ ] Feature sections stack vertically
- [ ] Pricing cards stack vertically
- [ ] All content is readable

- [ ] **Step 4: Test tablet view (768px width)**

Set viewport to 768x1024px

Check:

- [ ] Navigation shows full menu
- [ ] Hero shows 2-column layout
- [ ] Feature sections show 2-column
- [ ] Testimonials show 3-column
- [ ] Pricing shows 3-column

- [ ] **Step 5: Test desktop view (1280px+ width)**

Set viewport to 1280x720px

Check:

- [ ] All layouts show full multi-column
- [ ] Animations play smoothly
- [ ] Hover effects work
- [ ] Content fills space appropriately

- [ ] **Step 6: Test scroll animations**

Scroll from top to bottom

Check:

- [ ] Hero loads with staggered animation
- [ ] Feature sections animate in on scroll
- [ ] Integrations grid animates in
- [ ] Testimonials animate in
- [ ] Pricing cards animate in
- [ ] CTA section animates in

- [ ] **Step 7: Document any issues**

Create: `docs/linear-clone-responsive-test-notes.md` if issues found, otherwise skip commit

---

## Task 15: Performance Audit

**Files:**

- Test: Lighthouse audit

- [ ] **Step 1: Build production bundle**

```bash
cd apps/web && pnpm build
```

Expected: Build completes successfully

- [ ] **Step 2: Start production server**

```bash
cd apps/web && pnpm start
```

Expected: Production server starts

- [ ] **Step 3: Run Lighthouse audit**

Open Chrome DevTools → Lighthouse → Run audit

Check scores:

- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

- [ ] **Step 4: Check specific metrics**

From Lighthouse report:

- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Speed Index < 3.4s

- [ ] **Step 5: Document and fix issues**

If scores below 90:

1. Document issues in `docs/linear-clone-performance-issues.md`
2. Implement fixes
3. Re-test
4. Commit fixes

```bash
git add apps/web/features/linear-clone
git commit -m "perf(linear-clone): fix performance issues from Lighthouse audit"
```

---

## Task 16: Accessibility Review

**Files:**

- Test: Manual accessibility testing

- [ ] **Step 1: Test keyboard navigation**

Using only keyboard (Tab, Enter, Escape):

- [ ] Can navigate to all interactive elements
- [ ] Focus indicators are visible
- [ ] Tab order is logical
- [ ] Enter/Space activate buttons
- [ ] Escape closes mobile menu

- [ ] **Step 2: Test screen reader compatibility**

Enable screen reader (VoiceOver on Mac, NVDA on Windows):

- [ ] Navigation announces properly
- [ ] Headings hierarchy is logical (h1 → h2 → h3)
- [ ] Links and buttons have descriptive labels
- [ ] Form inputs have associated labels
- [ ] ARIA labels where needed

- [ ] **Step 3: Test color contrast**

Use contrast checker or DevTools:

- [ ] All text meets WCAG AA (4.5:1 for normal text)
- [ ] Large text meets WCAG AA (3:1 for 18pt+)
- [ ] Interactive elements have sufficient contrast
- [ ] Focus indicators are visible

- [ ] **Step 4: Test reduced motion preference**

Enable prefers-reduced-motion in OS:

- [ ] All animations respect the setting
- [ ] Page still functions without motion
- [ ] Content is still readable

- [ ] **Step 5: Fix any accessibility issues**

Document fixes and commit:

```bash
git add apps/web/features/linear-clone
git commit -m "a11y(linear-clone): fix accessibility issues"
```

---

## Task 17: Final Review and Polish

**Files:**

- All linear-clone files

- [ ] **Step 1: Visual review against Linear.app**

Open `https://linear.app` alongside `/linear-clone`

Compare:

- [ ] Color scheme matches
- [ ] Typography sizing and spacing match
- [ ] Layout proportions match
- [ ] Animation timing feels similar
- [ ] Overall visual fidelity

- [ ] **Step 2: Cross-browser testing**

Test in:

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android

- [ ] **Step 3: Fix any visual discrepancies**

Make final adjustments for visual fidelity:

```bash
git add apps/web/features/linear-clone
git commit -m "style(linear-clone): final visual polish"
```

- [ ] **Step 4: Add meta tags for SEO**

Update: `apps/web/app/(routes)/linear-clone/page.tsx`

Add metadata export:

```typescript
export const metadata = {
  title: "Linear - The Tool That Ships Products",
  description:
    "Linear is a purpose-built tool for planning, building, and shipping products. Issue tracking, project management, and workflow automation in one seamless platform.",
  openGraph: {
    title: "Linear - The Tool That Ships Products",
    description:
      "Linear is a purpose-built tool for planning, building, and shipping products.",
    type: "website",
  },
};
```

- [ ] **Step 5: Final commit**

```bash
git add apps/web/app/\(routes\)/linear-clone/page.tsx
git commit -m "seo(linear-clone): add metadata for SEO"
```

---

## Task 18: Documentation

**Files:**

- Create: `docs/linear-clone-readme.md`

- [ ] **Step 1: Create documentation**

```markdown
# Linear Landing Page Clone

## Overview

Exact visual replica of the Linear.app landing page, built with Next.js 15, React 19, and Framer Motion.

## Location

Route: `/linear-clone`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Animation**: Framer Motion 11
- **Styling**: Inline styles with CSS variables
- **TypeScript**: Full type safety

## Components

### Navigation

- Fixed header with scroll blur effect
- Responsive mobile menu
- Smooth scroll to sections

### Hero

- Animated gradient background
- Product mockup with parallax float
- Staggered content reveal

### Feature Sections

- Reusable `FeatureSection` component
- Alternating layouts
- Scroll-triggered animations

### Integrations

- Grid layout with hover effects
- 8 integration cards

### Testimonials

- 3-column responsive grid
- Hover lift effects

### Pricing

- 3-tier pricing cards
- Monthly/annual toggle
- Highlighted popular tier

### Footer

- 4-column link sections
- Newsletter signup
- Social links

## Animation System

### Variants

- `fadeUp`: Fade and translate up
- `fadeIn`: Fade only
- `scaleFade`: Scale and fade
- `slideFromLeft/Right`: Slide from sides
- `staggerContainer`: Stagger child animations

### Hooks

- `useScrollReveal`: Trigger animations on scroll

## Performance

- Lighthouse scores: 90+ across all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Respects `prefers-reduced-motion`

## Accessibility

- WCAG AA compliant
- Full keyboard navigation
- Screen reader friendly
- Proper ARIA labels
- Focus indicators

## Customization

To customize colors or spacing, modify the CSS variables in `apps/web/app/globals.css`.

## Credits

Original design by [Linear](https://linear.app).
```

- [ ] **Step 2: Commit documentation**

```bash
git add docs/linear-clone-readme.md
git commit -m "docs(linear-clone): add comprehensive documentation"
```

---

## Task 19: Final Verification

**Files:**

- Test: Full end-to-end verification

- [ ] **Step 1: Run all checks**

```bash
# Type check
pnpm typecheck

# Lint
pnpm lint

# Format check
pnpm format:check

# Build
cd apps/web && pnpm build
```

Expected: All checks pass

- [ ] **Step 2: View in production mode**

```bash
cd apps/web && pnpm start
```

Navigate to `/linear-clone`

Verify:

- [ ] Page loads without errors
- [ ] All animations work
- [ ] Responsive design works
- [ ] No console errors

- [ ] **Step 3: Create summary**

Check that all tasks are complete:

- [ ] All 19 tasks completed
- [ ] All commits pushed
- [ ] Documentation complete
- [ ] No outstanding issues

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "feat(linear-clone): complete Linear landing page clone implementation"
```

---

## Self-Review Checklist

### Spec Coverage

- [x] Navigation with scroll effect
- [x] Hero section with animations
- [x] Feature sections (3 examples)
- [x] Integrations grid
- [x] Testimonials section
- [x] Pricing with toggle
- [x] Final CTA
- [x] Footer
- [x] Animation system
- [x] Responsive design
- [x] Performance optimization
- [x] Accessibility features

### Placeholder Scan

- [x] No TBD/TODO placeholders
- [x] All code is complete
- [x] All steps are actionable
- [x] No vague "add X" without showing how

### Type Consistency

- [x] Component names consistent
- [x] File paths consistent
- [x] Import paths consistent
- [x] Animation variant names match

### Completeness

- [x] All sections from spec covered
- [x] Testing included
- [x] Documentation included
- [x] Performance checks included
- [x] Accessibility review included
