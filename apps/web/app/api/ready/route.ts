import { NextResponse } from "next/server";
import { createHealthState, getEnvStatus } from "@pisky/config";
import { createDatabaseHealthState } from "@pisky/db";
import { isAuthConfigured } from "@pisky/auth";

export function GET() {
  const env = getEnvStatus();
  const databaseState = createDatabaseHealthState("web", isAuthConfigured());

  const state = createHealthState({
    app: "web",
    envReady: env.appName && env.database && env.auth,
    databaseReady: databaseState.checks.database,
    authReady: isAuthConfigured(),
  });

  return NextResponse.json(state, {
    status: state.status === "ok" ? 200 : 503,
  });
}
