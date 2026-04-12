import type { ThemePreset } from "./types";

const mintlifySpacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  12: "48px",
  16: "64px",
  24: "96px",
} as const;

const mintlifyRadius = {
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "20px",
  full: "9999px",
} as const;

const mintlifyTypography = {
  sans: "Inter, ui-sans-serif, system-ui, sans-serif",
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
  heading: "Inter, ui-sans-serif, system-ui, sans-serif",
  baseSize: "16px",
} as const;

export const mintlifyTheme: ThemePreset = {
  name: "mintlify",
  description: "Mintlify-inspired reading-first documentation surface.",
  mode: "light",
  colors: {
    background: "#ffffff",
    foreground: "#0d0d0d",
    card: "#ffffff",
    cardForeground: "#0d0d0d",
    popover: "#ffffff",
    popoverForeground: "#0d0d0d",
    primary: "#18e299",
    primaryForeground: "#0d0d0d",
    secondary: "#f5f5f5",
    secondaryForeground: "#0d0d0d",
    muted: "#fafafa",
    mutedForeground: "#6b7280",
    accent: "#d4fae8",
    accentForeground: "#0d0d0d",
    destructive: "#d45656",
    destructiveForeground: "#ffffff",
    border: "#e5e7eb",
    input: "#e5e7eb",
    ring: "#18e299",
  },
  spacing: mintlifySpacing,
  radius: mintlifyRadius,
  typography: mintlifyTypography,
};

export const mintlifyDarkTheme: ThemePreset = {
  name: "mintlify-dark",
  description: "Mintlify-inspired dark reading surface.",
  mode: "dark",
  colors: {
    background: "#0d0d0d",
    foreground: "#ffffff",
    card: "#111111",
    cardForeground: "#ffffff",
    popover: "#111111",
    popoverForeground: "#ffffff",
    primary: "#18e299",
    primaryForeground: "#0d0d0d",
    secondary: "#1a1a1a",
    secondaryForeground: "#ffffff",
    muted: "#181818",
    mutedForeground: "#a3a3a3",
    accent: "#0c8c5e",
    accentForeground: "#ffffff",
    destructive: "#f87171",
    destructiveForeground: "#0d0d0d",
    border: "#262626",
    input: "#262626",
    ring: "#18e299",
  },
  spacing: mintlifySpacing,
  radius: mintlifyRadius,
  typography: mintlifyTypography,
};

export const themePresets = {
  mintlify: mintlifyTheme,
  "mintlify-dark": mintlifyDarkTheme,
  "cal-neutral": mintlifyTheme,
  "cal-ink": mintlifyDarkTheme,
} as const;

export type ThemePresetName = keyof typeof themePresets;

export function getThemePreset(name: string | undefined): ThemePreset {
  if (!name) {
    return mintlifyTheme;
  }

  return themePresets[name as ThemePresetName] ?? mintlifyTheme;
}
