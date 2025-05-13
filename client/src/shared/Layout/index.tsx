import type { PropsWithChildren } from "react";
import { Footer, Header } from "./parts";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main
        className="flex  w-full items-center bg-black font-sans  text-white"
        id="container"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
