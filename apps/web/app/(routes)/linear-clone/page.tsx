import {
  Navigation,
  Hero,
  FeatureSection,
  Integrations,
  Testimonials,
  Pricing,
  FinalCTA,
  Footer,
} from "../../../features/linear-clone";

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
                  &quot;Can we add dark mode to the dashboard?&quot;
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
              {[
                "Q1: Foundation",
                "Q2: Features",
                "Q3: Scale",
                "Q4: Polish",
              ].map((quarter, index) => (
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
                          background: "rgba(94, 106, 210, 0.24)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
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
                {
                  label: "You",
                  action: "Assigned LIN-105 to Codex",
                  time: "2m",
                },
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
