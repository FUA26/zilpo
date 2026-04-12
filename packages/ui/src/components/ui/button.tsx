import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
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
  ghost: {
    background: "transparent",
    borderColor: "transparent",
    color: "var(--foreground)",
  },
};

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: {
    minHeight: 32,
    padding: "0 12px",
    fontSize: 13,
  },
  md: {
    minHeight: 40,
    padding: "0 16px",
    fontSize: 14,
  },
  lg: {
    minHeight: 48,
    padding: "0 20px",
    fontSize: 15,
  },
};

export function Button({
  className,
  children,
  variant = "default",
  size = "md",
  type = "button",
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(className)}
      style={{
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        display: "inline-flex",
        fontWeight: 600,
        gap: 8,
        justifyContent: "center",
        lineHeight: 1,
        transition: "opacity 150ms ease",
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
