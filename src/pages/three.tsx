import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import React from "react";
import { Cube } from "../components/Cube";

const Three = () => {
  return (
    <>
      <Link href="/">
        <div className="absolute top-4 left-2 z-50 cursor-pointer font-mono text-2xl font-semibold text-white">
          Home
        </div>
      </Link>
      <Canvas
        style={{
          height: "100vh",
          background: "#101010",
        }}
        // console log how many objects are rendered
        onCreated={({ gl }) => {
          console.log(gl.info.render);
        }}
      >
        <OrbitControls />
        <pointLight intensity={1.0} position={[5, 3, 5]} />
        <Cube />
      </Canvas>
    </>
  );
};

export default Three;
