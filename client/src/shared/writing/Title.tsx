import type {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

export default function Title({
  children,
  className,
}: DetailedHTMLProps<HTMLAttributes<Element>, Element>) {
  return (
    <span className={`py-2.5 text-8xl font-semibold ${className}`}>
      {children}
    </span>
  );
}
