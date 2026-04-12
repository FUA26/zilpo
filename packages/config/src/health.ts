export type HealthState = {
  status: "ok" | "degraded";
  app: string;
  checks: {
    env: boolean;
    database: boolean;
    auth: boolean;
  };
  timestamp: string;
};

export function createHealthState(input: {
  app: string;
  envReady: boolean;
  databaseReady: boolean;
  authReady: boolean;
}): HealthState {
  const status =
    input.envReady && input.databaseReady && input.authReady
      ? "ok"
      : "degraded";

  return {
    status,
    app: input.app,
    checks: {
      env: input.envReady,
      database: input.databaseReady,
      auth: input.authReady,
    },
    timestamp: new Date().toISOString(),
  };
}
