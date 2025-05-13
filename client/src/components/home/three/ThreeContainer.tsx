import type { PropsWithChildren } from "react";
import { Canvas } from "@react-three/fiber";

export default function ThreeContainer({ children }: PropsWithChildren) {
  return (
    <Canvas
      colormangement="true"
      shadowmap="true "
      performance={{ debounce: 200 }}
      camera={{ position: [-5, 4, 4], fov: 50 }}
    >
      {children}
    </Canvas>
  );
}
