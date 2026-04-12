import type { Metadata } from "next";
import type { ReactNode } from "react";
import { calNeutralTheme, themeToStyle } from "@pisky/ui/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pisky Admin",
    template: "%s | Pisky Admin",
  },
  description: "Pisky admin surface.",
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
