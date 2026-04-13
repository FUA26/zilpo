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
      }}
    >
      <div
        className={
          reverse
            ? "linear-feature-grid linear-feature-grid-reverse"
            : "linear-feature-grid"
        }
        style={{
          maxWidth: 1400,
          margin: "0 auto",
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
