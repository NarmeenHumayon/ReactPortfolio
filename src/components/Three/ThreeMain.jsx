import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, RoundedBox } from "@react-three/drei";
const ThreeMain = () => {
  return (
    <Canvas
      id="canvas"
      camera={{
        position: [0, 2, 50],
      }}
      raycaster={{}}
      style={{
        height: "100vh",
        width: "100vw",
      }}
      gl={{
        pixelRatio: devicePixelRatio / 1000,
      }}
      shadows
    >
      <Environment preset="sunset" environmentIntensity={0.6} />
      <directionalLight position={[3, 1.5, 5]} intensity={0.6} castShadow />
      {/* <OrbitControls /> */}
      {/* <RoundedBox
        args={[900, 900, 0.25]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        radius={0.1}
        receiveShadow
      >
        <meshStandardMaterial attach="material" color={"#fc3a3a"} />
      </RoundedBox> */}
      <OrbitControls />
    </Canvas>
  );
};
export default ThreeMain;
