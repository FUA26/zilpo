import { describe, expect, it } from "vitest";

import { getEnvStatus, getServerEnv } from "./env";

describe("getServerEnv", () => {
  it("returns trimmed required env values", () => {
    const env = getServerEnv({
      NEXT_PUBLIC_APP_NAME: "  Pisky  ",
      DATABASE_URL: "  postgres://user:pass@localhost:5432/pisky  ",
      AUTH_SECRET: "  super-secret  ",
    });

    expect(env).toEqual({
      NEXT_PUBLIC_APP_NAME: "Pisky",
      DATABASE_URL: "postgres://user:pass@localhost:5432/pisky",
      AUTH_SECRET: "super-secret",
    });
  });

  it("throws when a required env value is missing", () => {
    expect(() =>
      getServerEnv({
        NEXT_PUBLIC_APP_NAME: "Pisky",
        DATABASE_URL: "",
        AUTH_SECRET: "super-secret",
      }),
    ).toThrow("Missing required environment variable: DATABASE_URL");
  });
});

describe("getEnvStatus", () => {
  it("reports readiness per env field", () => {
    expect(
      getEnvStatus({
        NEXT_PUBLIC_APP_NAME: "Pisky",
        DATABASE_URL: "postgres://localhost/pisky",
        AUTH_SECRET: "secret",
      }),
    ).toEqual({
      appName: true,
      database: true,
      auth: true,
    });
  });
});
