import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getBrandProfile } from "@pisky/config/brand";
import { calNeutralTheme, themeToStyle } from "@pisky/ui/theme";
import "./globals.css";

const brand = getBrandProfile();

export const metadata: Metadata = {
  title: {
    default: brand.productName,
    template: `%s | ${brand.productName}`,
  },
  description: brand.productTagline,
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
