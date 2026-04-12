import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Separator({
  className,
  orientation = "horizontal",
  style,
  ...props
}: HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <hr
      className={cn(className)}
      aria-orientation={orientation}
      style={{
        border: 0,
        background: "var(--border)",
        flexShrink: 0,
        height: orientation === "horizontal" ? 1 : "100%",
        width: orientation === "horizontal" ? "100%" : 1,
        ...style,
      }}
      {...props}
    />
  );
}
