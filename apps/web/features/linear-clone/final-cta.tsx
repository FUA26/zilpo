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
                background: "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
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
