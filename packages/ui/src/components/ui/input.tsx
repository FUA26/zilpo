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
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "6px",
        color: "#d0d6e0",
        font: "inherit",
        minHeight: 40,
        outline: "none",
        padding: "12px 14px",
        width: "100%",
        transition: "border-color 150ms ease",
        ...style,
      }}
      {...props}
    />
  );
}
