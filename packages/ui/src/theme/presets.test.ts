import { describe, expect, it } from "vitest";

import { calInkTheme, calNeutralTheme, getThemePreset } from "./presets";

describe("getThemePreset", () => {
  it("defaults to the neutral theme", () => {
    expect(getThemePreset(undefined)).toBe(calNeutralTheme);
  });

  it("returns the ink theme when requested", () => {
    expect(getThemePreset("cal-ink")).toBe(calInkTheme);
  });

  it("falls back to neutral for unknown names", () => {
    expect(getThemePreset("unknown")).toBe(calNeutralTheme);
  });
});
