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
      "The best project management tool we&apos;ve ever used. Period. The attention to detail is incredible.",
    author: "Michael Brown",
    role: "CTO",
    company: "Vercel",
  },
  {
    quote:
      "Linear feels like it&apos;s from the future. The workflow is so smooth, everything just clicks.",
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
        className="linear-testimonials-grid"
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
              &quot;
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
