import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "success"
  | "neutral"
  | "subtle";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const badgeStyles: Record<BadgeVariant, CSSProperties> = {
  default: {
    background: "var(--primary)",
    borderColor: "var(--primary)",
    color: "var(--primary-foreground)",
  },
  secondary: {
    background: "var(--secondary)",
    borderColor: "var(--border)",
    color: "var(--secondary-foreground)",
  },
  outline: {
    background: "transparent",
    borderColor: "var(--border)",
    color: "var(--foreground)",
  },
  success: {
    background: "#10b981",
    borderColor: "#10b981",
    color: "#f7f8f8",
  },
  neutral: {
    background: "transparent",
    borderColor: "#23252a",
    color: "#d0d6e0",
  },
  subtle: {
    background: "rgba(255, 255, 255, 0.05)",
    borderColor: "rgba(255, 255, 255, 0.05)",
    color: "#f7f8f8",
  },
};

export function Badge({
  className,
  children,
  variant = "secondary",
  style,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(className)}
      style={{
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "var(--radius-full)",
        display: "inline-flex",
        fontSize: 12,
        fontWeight: 510,
        lineHeight: 1,
        padding: "6px 10px",
        ...badgeStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
