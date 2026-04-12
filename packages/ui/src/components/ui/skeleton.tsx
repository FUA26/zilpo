import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Skeleton({
  className,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(className)}
      style={{
        background: "var(--muted)",
        borderRadius: "var(--radius-md)",
        minHeight: 16,
        ...style,
      }}
      {...props}
    />
  );
}
