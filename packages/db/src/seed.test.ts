import { describe, expect, it } from "vitest";

import { createExampleSeed } from "./seed";

describe("createExampleSeed", () => {
  it("returns deterministic example data for both apps", () => {
    expect(createExampleSeed()).toEqual(createExampleSeed());
  });

  it("contains the expected reuse-ready values", () => {
    const seed = createExampleSeed();

    expect(seed.product.cards.reuse.badge).toBe("Reuse ready");
    expect(seed.admin.dashboard.stats.health.title).toBe("Stable");
  });
});
