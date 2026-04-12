import { describe, expect, it } from "vitest";

import { isDatabaseConfigured } from "./client";

describe("isDatabaseConfigured", () => {
  it("returns true for a trimmed database url", () => {
    expect(isDatabaseConfigured("  postgres://localhost/pisky  ")).toBe(true);
  });

  it("returns false when the database url is missing", () => {
    expect(isDatabaseConfigured("")).toBe(false);
  });
});
