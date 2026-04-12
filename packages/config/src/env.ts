export type AppEnv = {
  NEXT_PUBLIC_APP_NAME: string;
  DATABASE_URL: string;
  AUTH_SECRET: string;
};

export type EnvStatus = {
  appName: boolean;
  database: boolean;
  auth: boolean;
};

function readRequiredEnv(name: keyof AppEnv, value: string | undefined) {
  const trimmed = value?.trim();

  if (!trimmed) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return trimmed;
}

export function getServerEnv(source: NodeJS.ProcessEnv = process.env): AppEnv {
  return {
    NEXT_PUBLIC_APP_NAME: readRequiredEnv(
      "NEXT_PUBLIC_APP_NAME",
      source.NEXT_PUBLIC_APP_NAME,
    ),
    DATABASE_URL: readRequiredEnv("DATABASE_URL", source.DATABASE_URL),
    AUTH_SECRET: readRequiredEnv("AUTH_SECRET", source.AUTH_SECRET),
  };
}

export function getEnvStatus(
  source: NodeJS.ProcessEnv = process.env,
): EnvStatus {
  return {
    appName: Boolean(source.NEXT_PUBLIC_APP_NAME?.trim()),
    database: Boolean(source.DATABASE_URL?.trim()),
    auth: Boolean(source.AUTH_SECRET?.trim()),
  };
}
