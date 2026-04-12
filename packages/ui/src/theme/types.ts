export type ThemeColorScale = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
};

export type ThemeSpacingScale = {
  1: string;
  2: string;
  3: string;
  4: string;
  6: string;
  8: string;
  12: string;
  16: string;
  24: string;
};

export type ThemeRadiusScale = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
};

export type ThemeTypography = {
  sans: string;
  mono: string;
  heading: string;
  baseSize: string;
};

export type ThemePreset = {
  name: string;
  description: string;
  mode: "light" | "dark";
  colors: ThemeColorScale;
  spacing: ThemeSpacingScale;
  radius: ThemeRadiusScale;
  typography: ThemeTypography;
};
