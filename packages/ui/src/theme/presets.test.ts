import { describe, expect, it } from "vitest";

import { mintlifyDarkTheme, mintlifyTheme, getThemePreset } from "./presets";

describe("getThemePreset", () => {
  it("defaults to the mintlify theme", () => {
    expect(getThemePreset(undefined)).toBe(mintlifyTheme);
  });

  it("returns the mintlify dark theme when requested", () => {
    expect(getThemePreset("mintlify-dark")).toBe(mintlifyDarkTheme);
  });

  it("supports the legacy cal aliases", () => {
    expect(getThemePreset("cal-neutral")).toBe(mintlifyTheme);
    expect(getThemePreset("cal-ink")).toBe(mintlifyDarkTheme);
  });

  it("falls back to mintlify for unknown names", () => {
    expect(getThemePreset("unknown")).toBe(mintlifyTheme);
  });
});
