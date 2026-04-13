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
          className="linear-integrations-grid"
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
