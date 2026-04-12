export type BrandProfile = {
  productName: string;
  productTagline: string;
  adminName: string;
  adminTagline: string;
};

function readOptionalText(value: string | undefined) {
  return value?.trim();
}

export function getBrandProfile(
  source: NodeJS.ProcessEnv = process.env,
): BrandProfile {
  const productName = readOptionalText(source.NEXT_PUBLIC_APP_NAME) || "Pisky";
  const productTagline =
    readOptionalText(source.NEXT_PUBLIC_APP_DESCRIPTION) ||
    `${productName} is an opinionated Next.js SaaS starter.`;
  const adminName =
    readOptionalText(source.NEXT_PUBLIC_ADMIN_APP_NAME) ||
    `${productName} Admin`;
  const adminTagline =
    readOptionalText(source.NEXT_PUBLIC_ADMIN_DESCRIPTION) ||
    `${adminName} surface.`;

  return {
    productName,
    productTagline,
    adminName,
    adminTagline,
  };
}
