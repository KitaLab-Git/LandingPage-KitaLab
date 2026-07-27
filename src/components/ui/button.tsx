import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-brand-accent text-brand-navy shadow-[0_12px_28px_rgba(242,140,40,0.24)] hover:-translate-y-0.5 hover:bg-brand-accent-strong",
  secondary:
    "border border-brand-line bg-white text-brand-navy hover:-translate-y-0.5 hover:border-brand-blue/30 hover:bg-brand-canvas",
  ghost: "text-brand-navy hover:bg-brand-navy/5",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
