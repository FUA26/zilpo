import type { ReactNode } from "react";
import { ProductShell } from "../../components/shell/product-shell";

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return <ProductShell>{children}</ProductShell>;
}
