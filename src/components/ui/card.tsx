import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <article
      className={`rounded-[1.75rem] border border-brand-line bg-white p-6 shadow-[0_16px_45px_rgba(7,34,61,0.06)] ${className}`}
      {...props}
    >
      {children}
    </article>
  );
}
