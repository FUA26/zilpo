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
          className="linear-pricing-grid"
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
                    $
                    {plan.price === 0
                      ? "0"
                      : annual
                        ? plan.price * 0.8
                        : plan.price}
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
