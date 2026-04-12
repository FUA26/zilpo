import { describe, expect, it } from "vitest";

import { mintlifyDarkTheme, mintlifyTheme } from "./presets";
import { themeToStyle } from "./style";

describe("themeToStyle", () => {
  it("maps theme tokens to CSS variables", () => {
    const style = themeToStyle(mintlifyTheme);

    expect(style.colorScheme).toBe("light");
    expect(style["--background"]).toBe("#ffffff");
    expect(style["--foreground"]).toBe("#0d0d0d");
    expect(style["--primary"]).toBe("#18e299");
    expect(style["--radius"]).toBe("10px");
    expect(style["--space-4"]).toBe("16px");
    expect(style["--font-heading"]).toBe(
      "Inter, ui-sans-serif, system-ui, sans-serif",
    );
  });

  it("maps dark themes to dark color scheme", () => {
    const style = themeToStyle(mintlifyDarkTheme);

    expect(style.colorScheme).toBe("dark");
    expect(style["--background"]).toBe("#0d0d0d");
    expect(style["--primary"]).toBe("#18e299");
  });
});
