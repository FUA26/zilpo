import { afterEach, describe, expect, it, vi } from "vitest";

import { isAuthConfigured } from "./health";

describe("isAuthConfigured", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("reads the auth secret from the environment", () => {
    vi.stubEnv("AUTH_SECRET", "super-secret");

    expect(isAuthConfigured()).toBe(true);
  });
});
