import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { type Euler, type MeshProps, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material001_0: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

interface IProps extends MeshProps {
  rotation?: Euler;
}

export default function EarthMesh({
  rotation = [-Math.PI / 1.5, 0.2, -1],
  ...props
}: IProps) {
  const { nodes, materials } = useGLTF("/earth.glb") as GLTFResult;
  const myMesh = useRef<THREE.Mesh>(null);
  const location = useLocation().pathname;

  useFrame(() => {
    if (location !== "/" && myMesh.current) myMesh.current.rotation.z -= 0.01;
  });
  return (
    <motion.mesh
      ref={myMesh}
      {...props}
      geometry={nodes.Sphere_Material001_0.geometry}
      material={materials["Material.001"]}
      rotation={rotation}
      scale={100}
    />
  );
}

useGLTF.preload("/earth.glb");
