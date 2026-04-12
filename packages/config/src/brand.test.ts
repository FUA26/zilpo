import { describe, expect, it } from "vitest";

import { getBrandProfile } from "./brand";

describe("getBrandProfile", () => {
  it("uses sensible defaults when env values are absent", () => {
    expect(getBrandProfile({})).toEqual({
      productName: "Pisky",
      productTagline: "Pisky is an opinionated Next.js SaaS starter.",
      adminName: "Pisky Admin",
      adminTagline: "Pisky Admin surface.",
    });
  });

  it("derives admin copy from the product name when only the product name changes", () => {
    expect(
      getBrandProfile({
        NEXT_PUBLIC_APP_NAME: "Orbit",
      }),
    ).toEqual({
      productName: "Orbit",
      productTagline: "Orbit is an opinionated Next.js SaaS starter.",
      adminName: "Orbit Admin",
      adminTagline: "Orbit Admin surface.",
    });
  });

  it("respects explicit brand overrides", () => {
    expect(
      getBrandProfile({
        NEXT_PUBLIC_APP_NAME: "Orbit",
        NEXT_PUBLIC_APP_DESCRIPTION: "Orbit keeps teams moving.",
        NEXT_PUBLIC_ADMIN_APP_NAME: "Orbit Control",
        NEXT_PUBLIC_ADMIN_DESCRIPTION:
          "Orbit Control keeps the ops flow tight.",
      }),
    ).toEqual({
      productName: "Orbit",
      productTagline: "Orbit keeps teams moving.",
      adminName: "Orbit Control",
      adminTagline: "Orbit Control keeps the ops flow tight.",
    });
  });
});
