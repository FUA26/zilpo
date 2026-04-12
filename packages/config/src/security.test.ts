import { describe, expect, it } from "vitest";

import { createSecurityHeaders } from "./security";

describe("createSecurityHeaders", () => {
  it("returns the production header baseline", () => {
    expect(createSecurityHeaders()).toEqual([
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ]);
  });
});
