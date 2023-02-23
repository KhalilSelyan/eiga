// import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useVideoTexture } from "@react-three/drei";

const Screen = () => {
  const texture = useVideoTexture("/01-12-2022--11-25-29.mp4", {
    autoplay: true,
    loop: true,
    muted: false,
    crossOrigin: "*",
  });

  console.log(texture.sourceFile);

  return (
    <group>
      <mesh position={[0, 0, -20]}>
        <planeBufferGeometry args={[12, 6]} />
        <meshBasicMaterial
          // color={"cyan"}
          side={THREE.DoubleSide}
          map={texture}
        />
      </mesh>
      <mesh rotation-x={Math.PI / 2} position-y={-3.5}>
        <planeBufferGeometry args={[50, 50]} />
        <meshBasicMaterial color={"red"} side={THREE.DoubleSide} />
      </mesh>

      {/* video texture */}
    </group>
  );
};

export default Screen;
