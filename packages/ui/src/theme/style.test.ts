import { describe, expect, it } from "vitest";

import { calNeutralTheme } from "./presets";
import { themeToStyle } from "./style";

describe("themeToStyle", () => {
  it("maps theme tokens to CSS variables", () => {
    const style = themeToStyle(calNeutralTheme);

    expect(style.colorScheme).toBe("light");
    expect(style["--background"]).toBe("#ffffff");
    expect(style["--foreground"]).toBe("#111111");
    expect(style["--radius"]).toBe("12px");
    expect(style["--space-4"]).toBe("16px");
    expect(style["--font-heading"]).toBe(
      "Inter, ui-sans-serif, system-ui, sans-serif",
    );
  });
});
