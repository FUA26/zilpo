import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { getServerEnv } from "@pisky/config";

export function createDatabaseClient(databaseUrl?: string) {
  const url = databaseUrl ?? getServerEnv().DATABASE_URL;
  const sql = postgres(url, { prepare: false });

  return drizzle(sql);
}

export function isDatabaseConfigured(databaseUrl?: string) {
  const url = databaseUrl ?? process.env.DATABASE_URL;

  return Boolean(url?.trim());
}
