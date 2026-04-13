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
        className="linear-hero-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
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
                background: "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
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
                background: "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
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
              whileHover={{
                scale: 1.02,
                backgroundColor: "var(--surface-hover)",
              }}
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
                        i === 1 ? "#ff5f57" : i === 2 ? "#febc2e" : "#28c840",
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
                  {
                    id: "LIN-101",
                    title: "Add authentication flow",
                    status: "In Progress",
                  },
                  {
                    id: "LIN-102",
                    title: "Design system updates",
                    status: "Todo",
                  },
                  {
                    id: "LIN-103",
                    title: "Performance optimization",
                    status: "Done",
                  },
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
