import { useTextReveal } from "@/hooks/useTextReveal";
import type { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3";
}

export function RevealText({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealTextProps) {
  const [ref, { style }] = useTextReveal(delay);

  return (
    <Tag
      ref={ref as React.RefCallback<HTMLElement>}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
