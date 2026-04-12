import type { NextConfig } from "next";
import { createSecurityHeaders } from "@pisky/config/security";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  transpilePackages: ["@pisky/ui"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecurityHeaders(),
      },
    ];
  },
};

export default nextConfig;
