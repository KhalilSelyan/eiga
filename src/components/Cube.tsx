import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export const Cube = () => {
  const cube = useRef<Mesh>(null);

  useFrame(() => {
    if (cube.current) {
      cube.current.rotation.x += 0.01;
      cube.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cube}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0391BA" />
    </mesh>
  );
};
