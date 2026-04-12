import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Input({
  className,
  style,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(className)}
      style={{
        background: "var(--background)",
        border: "1px solid var(--input)",
        borderRadius: "var(--radius-md)",
        color: "var(--foreground)",
        font: "inherit",
        minHeight: 40,
        outline: "none",
        padding: "0 14px",
        width: "100%",
        ...style,
      }}
      {...props}
    />
  );
}
