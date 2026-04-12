import { getEnvStatus } from "@pisky/config";

export function isAuthConfigured() {
  return getEnvStatus().auth;
}
