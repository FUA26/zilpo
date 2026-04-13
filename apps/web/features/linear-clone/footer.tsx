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
          className="linear-footer-grid"
          style={{
            marginBottom: 64,
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
                background: "linear-gradient(135deg, #5e6ad2 0%, #7170ff 100%)",
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
                    e.currentTarget.style.color = "var(--foreground-muted)";
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
          className="linear-footer-bottom"
          style={{
            borderTop: "1px solid var(--border-subtle)",
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
