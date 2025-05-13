/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { PropsWithChildren } from "react";

export default function EarthGroup({ children }: PropsWithChildren) {
  return (
    <group dispose={null}>
      <group scale={0.018}>{children}</group>
    </group>
  );
}
