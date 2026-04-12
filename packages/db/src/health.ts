import { createHealthState, getEnvStatus } from "@pisky/config";
import { isDatabaseConfigured } from "./client";

export function createDatabaseHealthState(app: string, authReady = true) {
  const env = getEnvStatus();

  return createHealthState({
    app,
    envReady: env.database,
    databaseReady: isDatabaseConfigured(),
    authReady,
  });
}
