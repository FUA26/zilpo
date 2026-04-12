import type { NextAuthOptions } from "next-auth";
import { getServerEnv } from "@pisky/config";

export function createAuthOptions(
  providers: NextAuthOptions["providers"] = [],
): NextAuthOptions {
  const env = getServerEnv();

  return {
    secret: env.AUTH_SECRET,
    session: {
      strategy: "jwt",
    },
    providers,
  };
}
