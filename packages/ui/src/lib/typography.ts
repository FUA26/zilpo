import type { CSSProperties } from "react";

export type TextScale =
  | "display-xl"
  | "display-large"
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body-large"
  | "body-emphasis"
  | "body"
  | "body-medium"
  | "body-semibold"
  | "small"
  | "small-medium"
  | "small-semibold"
  | "small-light"
  | "caption-large"
  | "caption"
  | "label"
  | "micro"
  | "tiny"
  | "link-large"
  | "link-medium"
  | "link-small"
  | "link-caption";

export const typographyStyles: Record<TextScale, CSSProperties> = {
  "display-xl": {
    fontSize: "72px",
    fontWeight: 510,
    lineHeight: 1.0,
    letterSpacing: "-1.584px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "display-large": {
    fontSize: "64px",
    fontWeight: 510,
    lineHeight: 1.0,
    letterSpacing: "-1.408px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  display: {
    fontSize: "48px",
    fontWeight: 510,
    lineHeight: 1.0,
    letterSpacing: "-1.056px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  h1: {
    fontSize: "32px",
    fontWeight: 400,
    lineHeight: 1.13,
    letterSpacing: "-0.704px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  h2: {
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: 1.33,
    letterSpacing: "-0.288px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  h3: {
    fontSize: "20px",
    fontWeight: 590,
    lineHeight: 1.33,
    letterSpacing: "-0.24px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "body-large": {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "-0.165px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "body-emphasis": {
    fontSize: "17px",
    fontWeight: 590,
    lineHeight: 1.6,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  body: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "body-medium": {
    fontSize: "16px",
    fontWeight: 510,
    lineHeight: 1.5,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "body-semibold": {
    fontSize: "16px",
    fontWeight: 590,
    lineHeight: 1.5,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  small: {
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "-0.165px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "small-medium": {
    fontSize: "15px",
    fontWeight: 510,
    lineHeight: 1.6,
    letterSpacing: "-0.165px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "small-semibold": {
    fontSize: "15px",
    fontWeight: 590,
    lineHeight: 1.6,
    letterSpacing: "-0.165px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "small-light": {
    fontSize: "15px",
    fontWeight: 300,
    lineHeight: 1.47,
    letterSpacing: "-0.165px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "caption-large": {
    fontSize: "14px",
    fontWeight: 510,
    lineHeight: 1.5,
    letterSpacing: "-0.182px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  caption: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.13px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  label: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  micro: {
    fontSize: "11px",
    fontWeight: 510,
    lineHeight: 1.4,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  tiny: {
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.15px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "link-large": {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "link-medium": {
    fontSize: "15px",
    fontWeight: 510,
    lineHeight: 2.67,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "link-small": {
    fontSize: "14px",
    fontWeight: 510,
    lineHeight: 1.5,
    letterSpacing: "normal",
    fontFeatureSettings: '"cv01", "ss03"',
  },
  "link-caption": {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.13px",
    fontFeatureSettings: '"cv01", "ss03"',
  },
};
