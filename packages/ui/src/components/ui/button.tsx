import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "subtle"
  | "primary"
  | "icon";
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
    background: "rgba(255, 255, 255, 0.02)",
    borderColor: "rgba(255, 255, 255, 0.08)",
    color: "#e2e4e7",
  },
  subtle: {
    background: "rgba(255, 255, 255, 0.04)",
    borderColor: "transparent",
    color: "#d0d6e0",
  },
  primary: {
    background: "#5e6ad2",
    borderColor: "#5e6ad2",
    color: "#ffffff",
  },
  icon: {
    background: "rgba(255, 255, 255, 0.03)",
    borderColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: "50%",
    color: "#f7f8f8",
  },
};

const sizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: {
    minHeight: 28,
    padding: "0 10px",
    fontSize: 12,
    fontWeight: 510,
  },
  md: {
    minHeight: 36,
    padding: "0 14px",
    fontSize: 14,
    fontWeight: 510,
  },
  lg: {
    minHeight: 44,
    padding: "0 18px",
    fontSize: 15,
    fontWeight: 510,
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
        borderWidth: "1px",
        borderRadius: variant === "icon" ? "50%" : "6px",
        cursor: "pointer",
        display: "inline-flex",
        fontWeight: 510,
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
