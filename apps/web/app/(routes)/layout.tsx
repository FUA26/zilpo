import type { ReactNode } from "react";

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "20px 24px",
        }}
      >
        <strong>Pisky</strong>
        <nav style={{ marginTop: 8, display: "flex", gap: 16 }}>
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
        </nav>
      </header>
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}
