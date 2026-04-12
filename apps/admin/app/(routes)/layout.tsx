import type { ReactNode } from "react";
import Link from "next/link";
import { getBrandProfile } from "@pisky/config/brand";

const brand = getBrandProfile();

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "20px 24px",
        }}
      >
        <strong>{brand.adminName}</strong>
        <nav style={{ marginTop: 8, display: "flex", gap: 16 }}>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}
