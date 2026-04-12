import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getBrandProfile } from "@pisky/config/brand";
import { getThemePreset, themeToStyle } from "@pisky/ui/theme";
import "./globals.css";

const brand = getBrandProfile();
const theme = getThemePreset(process.env.NEXT_PUBLIC_THEME_PRESET);

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
  const themeStyle = themeToStyle(theme);

  return (
    <html lang="en" style={themeStyle}>
      <body>{children}</body>
    </html>
  );
}
