import type { PropsWithChildren } from "react";

export default function Subtitle({ children }: PropsWithChildren) {
  return <p className="py-2.5 text-2xl text-gray-500">{children}</p>;
}
