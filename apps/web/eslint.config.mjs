import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  {
    ignores: ["**/node_modules/**", ".next/**", "dist/**", "next-env.d.ts"],
  },
  ...nextTypescript,
  ...nextVitals,
];

export default config;
