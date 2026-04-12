import type { Metadata } from "next";
import type { ReactNode } from "react";
import { calNeutralTheme, themeToStyle } from "@pisky/ui/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pisky",
    template: "%s | Pisky",
  },
  description: "Pisky is an opinionated Next.js SaaS starter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const themeStyle = themeToStyle(calNeutralTheme);

  return (
    <html lang="en" style={themeStyle}>
      <body>{children}</body>
    </html>
  );
}
