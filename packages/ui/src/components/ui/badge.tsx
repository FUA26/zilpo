import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type BadgeVariant = "default" | "secondary" | "outline";

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
        borderWidth: 1,
        borderRadius: "var(--radius-full)",
        display: "inline-flex",
        fontSize: 12,
        fontWeight: 600,
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
