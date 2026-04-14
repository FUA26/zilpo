import type { HTMLAttributes, CSSProperties } from "react";
import { cn } from "../../lib/utils";
import type { TextScale } from "../../lib/typography";
import { typographyStyles } from "../../lib/typography";

type TextProps = HTMLAttributes<HTMLElement> & {
  scale?: TextScale;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

export function Text({
  className,
  children,
  scale = "body",
  as = "span",
  style,
  ...props
}: TextProps) {
  const Component = as;

  return (
    <Component
      className={cn(className)}
      style={{
        margin: 0,
        ...typographyStyles[scale],
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
