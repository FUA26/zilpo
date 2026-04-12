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
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        background: "var(--card)",
        color: "var(--card-foreground)",
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
      style={{ margin: 0, fontSize: 18, letterSpacing: "-0.03em", ...style }}
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
      style={{ margin: 0, color: "var(--muted-foreground)", ...style }}
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
