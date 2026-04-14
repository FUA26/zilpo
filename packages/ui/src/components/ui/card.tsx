import type { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export function Card({
  className,
  children,
  style,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn(className)}
      style={{
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "8px",
        background: "rgba(255, 255, 255, 0.02)",
        color: "var(--card-foreground)",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 0px 1px",
        ...style,
      }}
      {...props}
    >
      {children}
    </article>
  );
}

export function CardHeader({
  className,
  children,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(className)}
      style={{ display: "grid", gap: 6, padding: 20, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  style,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(className)}
      style={{
        margin: 0,
        fontSize: 20,
        fontWeight: 590,
        letterSpacing: "-0.24px",
        lineHeight: 1.33,
        color: "#f7f8f8",
        ...style,
      }}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  style,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(className)}
      style={{
        margin: 0,
        color: "#8a8f98",
        fontSize: 15,
        letterSpacing: "-0.165px",
        lineHeight: 1.6,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(className)}
      style={{ padding: "0 20px 20px", ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(className)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "0 20px 20px",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
