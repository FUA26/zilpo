import { describe, expect, it } from "vitest";

import { createHealthState } from "./health";

describe("createHealthState", () => {
  it("marks the app healthy only when every check passes", () => {
    const state = createHealthState({
      app: "web",
      envReady: true,
      databaseReady: true,
      authReady: true,
    });

    expect(state.status).toBe("ok");
    expect(state.app).toBe("web");
    expect(state.checks).toEqual({
      env: true,
      database: true,
      auth: true,
    });
    expect(state.timestamp).toBeTruthy();
  });

  it("marks the app degraded when any check fails", () => {
    const state = createHealthState({
      app: "admin",
      envReady: true,
      databaseReady: false,
      authReady: true,
    });

    expect(state.status).toBe("degraded");
    expect(state.checks.database).toBe(false);
  });
});
