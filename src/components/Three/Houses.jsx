import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/low_poly_city.glb");
  const [animationEnd, setAnimationEnd] = useState(false);
  useFrame((state) => {
    if (!animationEnd) {
      const camera = state.camera;
      if (camera.position.y < 25) {
        camera.position.y += camera.position.y * 0.1;
        camera.position.z += 3;
      } else if (camera.position.y <= 75) {
        camera.position.y += (50 - camera.position.y) * 0.1;
        if (camera.position.y >= 40) {
          setAnimationEnd(true);
        }
      }
    }
  });
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[717.666, 216.29, 846.016]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={144.2}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa002_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <group position={[-1.692, -0.593, -0.27]} scale={[0.893, 0.893, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Porta_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Porta_Vetro_0.geometry}
              material={materials.Vetro}
            />
          </group>
          <group position={[0, -0.104, 0.072]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Finestra002_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Finestra002_Vetro_0.geometry}
              material={materials.Vetro}
            />
          </group>
          <group
            position={[0, 0.16, 0.073]}
            rotation={[0, 0, -Math.PI]}
            scale={[0.893, 0.893, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Finestra001_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Finestra001_Vetro_0.geometry}
              material={materials.Vetro}
            />
          </group>
          <group
            position={[-3.479, 1.882, -1.013]}
            rotation={[0, 0, -2.41]}
            scale={0.693}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BlackBoard_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BlackBoard_Texture_Varie_0.geometry}
              material={materials.Texture_Varie}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tetto001_Colore_0.geometry}
            material={materials.Colore}
            position={[0, 0, -0.039]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pavimento_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.089, 0.063, -1.552]}
            scale={[0.893, 0.893, 0.05]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Condizionatore_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.089, 0.239, 2.778]}
            scale={[0.893, 0.893, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tubi_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.089, 0.47, 0.011]}
            scale={[0.893, 0.893, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tenda_Colore_0.geometry}
            material={materials.Colore}
            position={[-1.696, -2.204, 0.893]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cespugli_Colore_0.geometry}
            material={materials.Colore}
            position={[-1.728, -1.775, -1.144]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vaso_quad_Colore_0.geometry}
            material={materials.Colore}
            position={[-1.737, 1.052, -1.285]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vaso_quad001_Colore_0.geometry}
            material={materials.Colore}
            position={[-1.737, -1.772, -1.285]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vasi_rett_Colore_0.geometry}
            material={materials.Colore}
            position={[1.722, -1.973, -1.503]}
            rotation={[0, 0, -Math.PI]}
          />
        </group>
        <group
          position={[1003.317, 171.574, -2060.717]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={114.667}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa001_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <group
            position={[1.463, 4.492, 2.959]}
            rotation={[0, 0, 1.561]}
            scale={0.872}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fish_Sign_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fish_Sign_Texture_Varie_0.geometry}
              material={materials.Texture_Varie}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cassetta002_Colore_0.geometry}
            material={materials.Colore}
            position={[0.614, 0.021, 2.381]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tende_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.679, 4.073, 3.825]}
            scale={[0.91, 0.96, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vasi_e_Cespugli_Colore_0.geometry}
            material={materials.Colore}
            position={[3.104, 0, -1.5]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vasi_e_Cespugli002_Colore_0.geometry}
            material={materials.Colore}
            position={[0.725, 6.215, -1.5]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </group>
        <group
          position={[-3384.659, 0, 76.997]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Colore_0.geometry}
            material={materials.Colore}
          />
        </group>
        <group
          position={[-3386.409, 0, -923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3384.659, 0, 1076.996]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -1923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-2384.659, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-384.659, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3384.659, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -2923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -3923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -4923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -5923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[615.341, 0, 2076.996]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[1615.341, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[2615.341, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane020_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane020_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[3615.341, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane021_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[4615.341, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[5615.341, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane023_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane023_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-386.409, 0, 1076.997]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane024_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-386.409, 0, 76.997]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane025_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-386.409, 0, -923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane026_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane026_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-386.409, 0, -1923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane027_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-386.409, 0, -2923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane028_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[2613.591, 0, -2923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane029_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[615.341, 0, -2923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane030_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane030_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[1615.341, 0, -2923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane031_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane031_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[2613.591, 0, -3923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane032_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane032_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[2613.591, 0, -4923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane033_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane033_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[2613.591, 0, -5923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[2615.341, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane036_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane036_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-2384.659, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane037_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane037_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-1384.659, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane038_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane038_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-384.659, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane039_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane039_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[615.341, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane040_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[1615.341, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane041_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -7923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane042_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane042_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane043_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane043_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-3386.409, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane044_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane044_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-2384.659, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane047_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane047_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-1384.659, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane049_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane049_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-384.659, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane050_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane050_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[615.341, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane051_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane051_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[1615.341, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane052_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane052_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[2615.341, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane053_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane053_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[4613.591, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane057_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[4613.591, 0, -7923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane060_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane060_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[4615.341, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane061_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane061_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[5615.341, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane062_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane062_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[6615.341, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane063_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane063_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[7615.341, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane064_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane064_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[3615.341, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane066_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane066_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[6615.341, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane067_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane067_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[7615.341, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane068_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane068_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[4615.341, 0, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane069_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane069_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[7613.591, 0, 1076.997]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane072_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane072_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[7613.591, 0, 76.997]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane073_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane073_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[6613.591, 0, -4923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane074_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane074_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[6613.591, 0, -5923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane075_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane075_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[6613.591, 0, -1923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane076_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane076_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[6613.591, 0, -2923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane077_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane077_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[6613.591, 0, -3923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane078_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane078_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[6615.341, 0, -923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane079_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane079_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[7615.341, 0, -923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane080_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane080_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[3615.341, 0, -6923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane035_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane035_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-1384.659, 0, 2076.997]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[2042.039, 240.934, -1754.346]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[2591.203, 250.807, -1713.029]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pharmacy_Sign_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pharmacy_Sign_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[2265.895, 0.036, -2049.824]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Porta001_Colore_0.geometry}
            material={materials.Colore}
            position={[-2.589, 3.801, 0.902]}
            rotation={[Math.PI, 0, 0]}
            scale={[0.598, 0.598, 0.67]}
          />
        </group>
        <group
          position={[2162.766, 200.14, -560.096]}
          rotation={[-Math.PI / 2, -Math.PI / 4, 0]}
          scale={178.232}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign001_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[1949.023, 117.978, -584.775]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH001_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[2251.594, 117.978, 1131.275]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH002_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[3622.204, 117.978, -587.679]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH003_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[3895.586, 117.978, 1134.322]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HH004_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[3434.943, 255.405, -557.952]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={98.076}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign002_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[2560.87, 231.896, 1125.45]}
          rotation={[-Math.PI / 2, -Math.PI / 4, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign003_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[3983.011, 192.652, 1114.424]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign004_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[3619.634, 260.463, 1114.591]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign005_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ice_Cream_Sign005_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[3196.23, 709.481, -8426.659]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={128.978}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SuperMarket_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SuperMarket_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SuperMarket_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
          <group position={[-6.681, -4.391, -4.499]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.VendingMachine_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.VendingMachine_Vetro_0.geometry}
              material={materials.Vetro}
            />
          </group>
        </group>
        <group
          position={[5986.625, -1.924, -943.957]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Tree_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree_Colore_0.geometry}
            material={materials.Colore}
            position={[0.035, 0.094, 2.253]}
            scale={3.1}
          />
        </group>
        <group
          position={[6973.04, -1.924, -267.764]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Tree007_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree013_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.011, 0.011, 3.65]}
            scale={0.961}
          />
        </group>
        <group
          position={[6982.841, -1.924, 1426.848]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Tree008_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree014_Colore_0.geometry}
            material={materials.Colore}
            position={[0.035, 0.094, 2.253]}
            scale={3.1}
          />
        </group>
        <group
          position={[1126.226, -1.924, -1751.539]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Tree013_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree022_Colore_0.geometry}
            material={materials.Colore}
            position={[0.035, 0.094, 2.253]}
            scale={3.1}
          />
        </group>
        <group
          position={[3288.608, -1.924, -3276.626]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Tree017_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree027_Colore_0.geometry}
            material={materials.Colore}
            position={[0.035, 0.094, 2.253]}
            scale={3.1}
          />
        </group>
        <group
          position={[1599.345, -1.924, -3940.81]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={151.061}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Tree018_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree028_Colore_0.geometry}
            material={materials.Colore}
            position={[0.035, 0.094, 2.253]}
            scale={3.1}
          />
        </group>
        <group
          position={[-3184.824, 96.192, 78.258]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.001, -2.086, -0.475]}
            scale={[1.3, 0.089, 1]}
          />
        </group>
        <group
          position={[4237.458, 104.281, -8840.91]}
          rotation={[-Math.PI / 2, 0.126, -0.056]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire001_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[4921.044, 90.279, -10150.207]}
          rotation={[-Math.PI / 2, 0, -1.361]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire002_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-3594.801, 96.191, -861.065]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire003_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-666.257, 96.191, -2743.563]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire004_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6404.521, 96.192, -1341.799]}
          rotation={[-Math.PI / 2, 0, 0.079]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car005_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire005_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6250.156, 90.279, -8435.512]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car006_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire006_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[5229.818, 90.279, -7551.697]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car007_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire007_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[5934.667, 90.279, -10194.74]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car011_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire011_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6132.78, 90.279, -8719.208]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car012_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire012_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[4387.074, 90.279, -7757.287]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car013_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire013_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6154.666, 90.279, -9898.47]}
          rotation={[-Math.PI / 2, 0, 2.811]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car014_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire014_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7374.527, 90.279, -8432.821]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car017_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire017_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7926.607, 90.279, -8455.82]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car018_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire018_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7926.607, 90.279, -7843.881]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car019_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire019_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6160.569, 90.279, -7559.613]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car020_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire020_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6160.569, 90.279, -7847.162]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car021_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire021_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7909.328, 90.279, -9601.254]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car023_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire023_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7909.328, 90.279, -10199.081]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car024_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire024_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7467.083, 90.279, -9313.173]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car025_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire025_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7362.229, 90.279, -9606.401]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car026_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire026_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[5267.569, 90.279, -8707.658]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car027_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire027_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[5267.569, 90.279, -7844.05]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car028_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire028_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[5349.333, 90.279, -8135.635]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car029_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire029_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[5354.412, 90.279, -8435.512]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car030_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire030_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[5706.117, 90.279, -8596.238]}
          rotation={[-Math.PI / 2, 0, 0.345]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car031_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire031_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6945.024, 90.279, -8227.206]}
          rotation={[-Math.PI / 2, 0, -1.233]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car032_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire032_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6563.859, 90.279, -8714.443]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car033_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire033_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6767.48, 90.279, -9606.401]}
          rotation={[-Math.PI / 2, 0, 2.06]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car035_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire035_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[4908.855, 90.279, -7213.956]}
          rotation={[-Math.PI / 2, 0, -2.652]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car036_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire036_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[2252.766, 90.279, -9726.37]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car037_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire037_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[403.33, 90.279, -10124.001]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car039_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire039_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-3633.937, 90.279, -7442.207]}
          rotation={[-Math.PI / 2, 0, -0.175]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car041_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire041_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-3184.824, 96.192, -2383.967]}
          rotation={[-Math.PI / 2, 0, -3.016]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car042_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire042_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-644.908, 96.191, 209.26]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car043_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire043_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7400.8, 96.191, 209.26]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car044_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire044_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7853.197, 96.192, -125.051]}
          rotation={[-Math.PI / 2, 0, -3.066]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car045_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire045_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6899.503, 96.192, -4737.618]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car047_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire047_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6355.922, 96.192, -6609.261]}
          rotation={[-Math.PI / 2, 0, 0.404]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car048_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire048_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7578.417, 90.279, -7161.301]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car049_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire049_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[1944.128, 118.222, -4535.995]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car050_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire050_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[2047.965, 118.353, -3943.138]}
          rotation={[-Math.PI / 2, 0, -1.484]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car051_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire051_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[1574.488, 117.227, -3502.739]}
          rotation={[-Math.PI / 2, 0, 2.967]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car052_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire052_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-185.885, 96.192, 78.258]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car053_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire053_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[74.155, 99.428, -1680.131]}
          rotation={[-1.588, -0.072, -3.124]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car054_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire054_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-2571.21, 114.757, -2237.259]}
          rotation={[-Math.PI / 2, 0, -2.748]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car055_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire055_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-2571.21, 114.757, -1685.756]}
          rotation={[-Math.PI / 2, 0, -0.616]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car056_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire056_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[3096.421, 90.279, -10124.001]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car057_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire057_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-3334.022, 90.279, -9987.813]}
          rotation={[-Math.PI / 2, 0, -0.44]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car058_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire058_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[4164.272, 90.279, 2324.737]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car059_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire059_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6.278, 90.279, 2324.737]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car060_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire060_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[1033.785, 90.279, 1927.106]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car061_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire061_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-3005.853, 90.279, 1839.849]}
          rotation={[-Math.PI / 2, 0, -2.076]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car062_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire062_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[3096.421, 90.279, 1927.106]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car063_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire063_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7396.326, 96.192, 1705.892]}
          rotation={[-Math.PI / 2, 0, -0.307]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car064_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire064_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7762.791, 90.279, 2288.796]}
          rotation={[-Math.PI / 2, 0, 2.703]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car065_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire065_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-3616.518, 90.279, -3253.427]}
          rotation={[-Math.PI / 2, 0, -0.067]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car066_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire066_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-1622.235, 126.525, 783.726]}
          rotation={[-Math.PI / 2, 0, 0.143]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car068_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire068_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-3233.928, 90.279, -9020.231]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car069_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire069_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[-3631.559, 90.279, -5548.828]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car070_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire070_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[278.947, 90.279, -6766.145]}
          rotation={[-Math.PI / 2, 0, 1.484]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car071_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire071_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[2462.652, 90.279, -7129.814]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car072_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire072_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[6487.801, 90.279, -10096.544]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.car073_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tire073_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.541, 0.14]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[7616.081, 155.904, -1966.288]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={295.844}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion001_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Camion001_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.88, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[-1579.924, 160.097, -7839.677]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={295.844}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion002_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Camion002_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.88, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[-1446.517, 160.097, -9740.975]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={295.844}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion003_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Camion003_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.88, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[5277.489, 115.49, -6690.95]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={295.844}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion004_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Camion004_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.88, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[2762.621, 135.274, -3428.213]}
          rotation={[-Math.PI / 2, 0, 1.008]}
          scale={295.844}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion005_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion005_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Camion005_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.88, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[-1446.517, 160.097, 1864.246]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={295.844}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion006_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion006_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Camion006_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.88, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[5277.489, 123.374, 1873.452]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={295.844}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion007_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camion007_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Camion007_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.88, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[-2307.804, 52.742, 458.95]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Villa_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Villa_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sdraio_Colore_0.geometry}
            material={materials.Colore}
            position={[-2.148, -5.576, 3.752]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sdraio001_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.338, -5.576, 3.752]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SolarPanel_Colore_0.geometry}
            material={materials.Colore}
            position={[5.931, 2.383, 8.194]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SolarPanel001_Colore_0.geometry}
            material={materials.Colore}
            position={[7.93, 2.383, 8.194]}
          />
        </group>
        <group
          position={[-2088.033, 52.742, -1372.714]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa004_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maniglia_Colore_0.geometry}
            material={materials.Colore}
            position={[2.235, -0.489, 0.816]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maniglia002_Colore_0.geometry}
            material={materials.Colore}
            position={[-3.367, -1.399, 0.803]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camino_Colore_0.geometry}
            material={materials.Colore}
            position={[0.177, 2.143, 4.806]}
            scale={1.4}
          />
        </group>
        <group
          position={[-2088.033, 52.742, -2641.059]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa003_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maniglia001_Colore_0.geometry}
            material={materials.Colore}
            position={[2.235, -0.489, 0.816]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Maniglia003_Colore_0.geometry}
            material={materials.Colore}
            position={[-3.367, -1.399, 0.803]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Camino001_Colore_0.geometry}
            material={materials.Colore}
            position={[0.177, 1.942, 4.806]}
            scale={1.316}
          />
        </group>
        <group
          position={[1318.814, -65.816, -5667.93]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Condominio_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Condominio_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <group position={[0, -4.948, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Entrata_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Entrata_Vetro_0.geometry}
              material={materials.Vetro}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ManigliaCon_Colore_0.geometry}
              material={materials.Colore}
              position={[0.083, -0.251, 1.556]}
              rotation={[0, 0, Math.PI / 2]}
              scale={1.235}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ManigliaCon2_Colore_0.geometry}
              material={materials.Colore}
              position={[-0.079, -0.251, 1.556]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[-1.235, 1.235, 1.235]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tetto002_Colore_0.geometry}
            material={materials.Colore}
            position={[0, 0, 18.387]}
          />
        </group>
        <group
          position={[442.586, -70.714, -4192.051]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={108.983}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Condominio001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Condominio001_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <group position={[0, -4.948, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Entrata001_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Entrata001_Vetro_0.geometry}
              material={materials.Vetro}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tetto005_Colore_0.geometry}
            material={materials.Colore}
            position={[0, 0, 26.097]}
          />
        </group>
        <group
          position={[-177.592, -65.816, -5667.93]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Condominio002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Condominio002_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <group position={[0, -4.948, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Entrata002_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Entrata002_Vetro_0.geometry}
              material={materials.Vetro}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tetto006_Colore_0.geometry}
            material={materials.Colore}
            position={[0, 0, 21]}
          />
        </group>
        <group
          position={[4667.045, 447.011, -4551.717]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Struttura_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Struttura_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[4667.045, 840.428, -5420.367]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Retro_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Retro_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[4667.045, -184.863, -4551.717]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Retro2_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Retro2_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[-1528.234, 450, -8552.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Factory_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Factory_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[1259.583, 1018.347, -8451.414]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={181.84}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ufficio_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ufficio_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <group position={[0, 0, -8.354]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Base002_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Base002_Vetro_0.geometry}
              material={materials.Vetro}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Colore_0.geometry}
            material={materials.Colore}
            position={[0, 0, 15.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tende002_Colore_0.geometry}
            material={materials.Colore}
            position={[-1.149, -4.854, -4.696]}
            rotation={[0, 0, Math.PI]}
            scale={0.488}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tende005_Colore_0.geometry}
            material={materials.Colore}
            position={[4.853, -2.752, -4.696]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.488}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tende006_Colore_0.geometry}
            material={materials.Colore}
            position={[4.318, 4.842, -4.696]}
            scale={0.526}
          />
        </group>
        <group
          position={[7615.341, 0, -4923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane154_ContornoEdifici_0.geometry}
            material={materials.ContornoEdifici}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane154_Colore_0.geometry}
            material={materials.Colore}
          />
        </group>
        <group
          position={[6615.341, 0, -5923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane155_ContornoEdifici_0.geometry}
            material={materials.ContornoEdifici}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane155_Colore_0.geometry}
            material={materials.Colore}
          />
        </group>
        <group
          position={[7615.341, 0, -4923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane156_ContornoEdifici_0.geometry}
            material={materials.ContornoEdifici}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane156_Colore_0.geometry}
            material={materials.Colore}
          />
        </group>
        <group
          position={[6615.341, 0, -2923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane157_ContornoEdifici_0.geometry}
            material={materials.ContornoEdifici}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane157_Colore_0.geometry}
            material={materials.Colore}
          />
        </group>
        <group
          position={[7615.341, 0, -1923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane158_ContornoEdifici_0.geometry}
            material={materials.ContornoEdifici}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane158_Colore_0.geometry}
            material={materials.Colore}
          />
        </group>
        <group
          position={[650.638, 205.975, -37.712]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={137.324}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Home_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Home_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <group position={[-0.02, 0, 0]} scale={[1, 0.834, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Door_Vetro_0.geometry}
              material={materials.Vetro}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.02, 0.105, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roof_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cassetta001_Colore_0.geometry}
            material={materials.Colore}
            position={[-0.386, -1.759, 2.086]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tende003_Colore_0.geometry}
            material={materials.Colore}
            position={[-1.879, 2.467, 3.704]}
            scale={[0.91, 0.96, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tende004_Colore_0.geometry}
            material={materials.Colore}
            position={[-1.48, 2.467, 3.956]}
            scale={[0.91, 0.96, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Colore_0.geometry}
            material={materials.Colore}
            position={[3.895, 0, -1.5]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone_Colore_0.geometry}
            material={materials.Colore}
            position={[2.026, -0.938, -0.862]}
            scale={0.221}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Colore_0.geometry}
            material={materials.Colore}
            position={[3.895, 1.838, -1.5]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone001_Colore_0.geometry}
            material={materials.Colore}
            position={[2.026, 0.9, -0.862]}
            scale={0.221}
          />
        </group>
        <group
          position={[6146.902, 18.25, 488.452]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Casa_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tenda003_Colore_0.geometry}
            material={materials.Colore}
            position={[0.306, -3.7, 3.477]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.442}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tenda004_Colore_0.geometry}
            material={materials.Colore}
            position={[3.814, 6.548, 3.593]}
            rotation={[0, 0, Math.PI]}
            scale={1.442}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cassetta_Colore_0.geometry}
            material={materials.Colore}
            position={[1.741, 5.745, 5.729]}
            rotation={[0, 0, -Math.PI]}
            scale={1.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cassetta2_Colore_0.geometry}
            material={materials.Colore}
            position={[1.741, 4.649, 5.729]}
            rotation={[0, 0, -Math.PI]}
            scale={1.29}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tetto004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Colore_0.geometry}
            material={materials.Colore}
            position={[2.196, -1.647, 5.537]}
            rotation={[Math.PI / 2, 0.873, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HotCoffee__0.geometry}
            material={materials.Tubes__0}
            position={[2.13, -1.863, 5.659]}
            rotation={[Math.PI / 2, 0.873, 0]}
            scale={0.703}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HotCoffee2__0.geometry}
            material={materials.Tubes__0}
            position={[2.204, -1.86, 6.299]}
            rotation={[Math.PI / 2, 0.873, 0]}
          />
        </group>
        <group
          position={[-1993.818, 124.804, -5887.445]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <group position={[0, 0, -0.043]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor001_Colore_0.geometry}
              material={materials.Colore}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Floor001_Vetro_0.geometry}
              material={materials.Vetro}
            />
            <group position={[0, 0, 25.316]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Colore_0.geometry}
                material={materials.Colore}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003_Vetro_0.geometry}
                material={materials.Vetro}
              />
            </group>
          </group>
        </group>
        <group
          position={[-842.845, 135.265, -9017.728]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base003_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[-2748.559, 226.743, -5047.626]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStop_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStop_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[-2751.139, 0.329, -4840.631]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={150.126}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign001_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[3626.396, 0.219, -9400.518]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={227.039}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign002_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[4876.328, -1.673, 1635.98]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={227.039}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[-2826.668, 39, -4851.802]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin006_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin006_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[1534.376, 38.433, 1164.681]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin007_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin007_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[5109.684, 37.909, -2249.722]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[-3142.468, 34.401, -5958.397]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[69.108, 77.743, 77.743]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bus_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Sx_Colore_0.geometry}
            material={materials.Colore}
            position={[1.709, 0.327, 0.277]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 1, 1.125]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Dx_Material_0.geometry}
            material={materials.Material}
            position={[-1.694, 0.327, -0.865]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1, 1, 1.125]}
          />
        </group>
        <group
          position={[3941.241, 195.984, -582.426]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Insegna_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Insegna_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[-3011.466, 210.359, -3534.703]}
          rotation={[-1.565, -0.099, 3.106]}
          scale={70.447}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_Vetro_0.geometry}
            material={materials.Vetro}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Posteriori_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -3.529, -2.789]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Anteriori_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -8.001, -2.807]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BIG_ICE_CREAM_Colore_0.geometry}
            material={materials.Colore}
            position={[0, -0.669, 2.569]}
            rotation={[1.209, -0.031, -0.018]}
            scale={[1, 1, 0.817]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Piatti__0.geometry}
            material={materials.Tubes__0}
            position={[0, -1.97, 0.135]}
            scale={[0.329, 0.329, 0.036]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bowl__0.geometry}
            material={materials.Tubes__0}
            position={[0.37, -1.678, 0.005]}
            scale={0.352}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bicchieri__0.geometry}
            material={materials.Tubes__0}
            position={[0.37, -1.673, 0.572]}
            scale={0.071}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Piatti2__0.geometry}
            material={materials.Tubes__0}
            position={[0, -0.593, 0.945]}
            scale={[0.329, 0.329, 0.036]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tenda007_Colore_0.geometry}
            material={materials.Colore}
            position={[-3.839, -3.036, 0.548]}
          />
        </group>
        <group
          position={[6046.101, 0.497, -3872.53]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={227.039}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign003_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[3235.156, 38.433, 1164.681]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin008_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bin008_Vetro_0.geometry}
            material={materials.Vetro}
          />
        </group>
        <group
          position={[3064.104, 283.968, -6415.861]}
          rotation={[-Math.PI, 0, -1.963]}
          scale={[-34.306, 34.306, 2.529]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-851.551, 287.424, 1556.217]}
          rotation={[0, 0, 1.179]}
          scale={[-34.306, 34.306, 2.529]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop001_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[4145.446, 283.968, -7453.346]}
          rotation={[0, 0, 1.179]}
          scale={[-34.306, 34.306, 2.529]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop002_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop002_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[-2838.282, 287.424, -7424.495]}
          rotation={[-1.179, -Math.PI / 2, 0]}
          scale={[-34.306, 34.306, 2.529]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop003_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop003_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[7096.376, 283.968, -6460.253]}
          rotation={[-Math.PI, 0, -1.963]}
          scale={[-34.306, 34.306, 2.529]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stop004_Texture_Strada_0.geometry}
            material={materials.Texture_Strada}
          />
        </group>
        <group
          position={[1899.201, 48.821, -2474.057]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={227.039}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign004_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BusStopSign004_Texture_Varie_0.geometry}
            material={materials.Texture_Varie}
          />
        </group>
        <group
          position={[6382.219, 28.666, -5232.888]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[69.108, 77.743, 77.743]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bus001_Colore_0.geometry}
            material={materials.Colore}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Sx001_Colore_0.geometry}
            material={materials.Colore}
            position={[1.709, 0.327, 0.277]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1, 1, 1.125]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ruote_Dx001_Material_0.geometry}
            material={materials.Material}
            position={[-1.694, 0.327, -0.865]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1, 1, 1.125]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003_Colore_0.geometry}
          material={materials.Colore}
          position={[-1466.531, 22.712, -43.183]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={187.103}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_Colore_0.geometry}
          material={materials.Colore}
          position={[-1259.633, 22.712, -2144.902]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={187.103}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere010_Colore_0.geometry}
          material={materials.Colore}
          position={[-2480.231, 22.712, -987.754]}
          rotation={[-Math.PI / 2, 0, -2.668]}
          scale={124.208}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_Colore_0.geometry}
          material={materials.Colore}
          position={[-2567.819, 22.711, -3056.881]}
          rotation={[-Math.PI / 2, 0, 0.08]}
          scale={124.208}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli001_Colore_0.geometry}
          material={materials.Colore}
          position={[5715.333, -0.427, 884.698]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={168.244}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli003_Colore_0.geometry}
          material={materials.Colore}
          position={[4554.785, -12.542, 889.517]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={143.421}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli004_Colore_0.geometry}
          material={materials.Colore}
          position={[4554.785, -12.542, 889.517]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={143.421}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli005_Colore_0.geometry}
          material={materials.Colore}
          position={[4612.649, -12.542, -253.055]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={143.421}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli006_Colore_0.geometry}
          material={materials.Colore}
          position={[4612.649, -12.542, -253.055]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={143.421}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli007_Colore_0.geometry}
          material={materials.Colore}
          position={[6898.718, -7.553, 420.346]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={143.421}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli008_Colore_0.geometry}
          material={materials.Colore}
          position={[6898.718, -7.553, 420.346]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={143.421}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli009_Colore_0.geometry}
          material={materials.Colore}
          position={[2316.557, -15.947, -2342.286]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={177.79}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vasi_e_Cespugli010_Colore_0.geometry}
          material={materials.Colore}
          position={[4361.21, -3.818, -619.803]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={105.852}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone_Colore_0.geometry}
          material={materials.Colore}
          position={[1848.875, 337.97, -1882.102]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone2_Colore_0.geometry}
          material={materials.Colore}
          position={[2445.449, 337.97, -1882.102]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tenda002_Colore_0.geometry}
          material={materials.Colore}
          position={[1842.758, 218.237, -1726.089]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[127.229, 134.311, 139.858]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tetto_Colore_0.geometry}
          material={materials.Colore}
          position={[2191.978, 859.569, -2015.695]}
          rotation={[-Math.PI / 4, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tubes__0.geometry}
          material={materials.Tubes__0}
          position={[1265.64, 454.376, -1973.342]}
          rotation={[0, 0, -1.294]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane_Colore_0.geometry}
          material={materials.Colore}
          position={[2290.861, 117.978, -1757.889]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane001_Colore_0.geometry}
          material={materials.Colore}
          position={[2883.657, 117.978, -1755.483]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane002_Colore_0.geometry}
          material={materials.Colore}
          position={[2743.376, 448.427, -1785.785]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)_Colore_0"].geometry}
          material={materials.Colore}
          position={[2914.366, 16.382, -1759.793]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Plant(Sphere)_Colore_0"].geometry}
          material={materials.Colore}
          position={[2911.819, 50.697, -1759.273]}
          rotation={[-Math.PI / 2, -0.051, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone001_Colore_0.geometry}
          material={materials.Colore}
          position={[2391.01, 337.97, -460.561]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone2001_Colore_0.geometry}
          material={materials.Colore}
          position={[1794.435, 337.97, -460.561]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tenda001_Colore_0.geometry}
          material={materials.Colore}
          position={[1753.215, 218.237, -597.803]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[88.238, 93.149, 96.996]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tetto003_Colore_0.geometry}
          material={materials.Colore}
          position={[2047.906, 859.569, -326.969]}
          rotation={[-2.356, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tubes001__0.geometry}
          material={materials.Tubes__0}
          position={[2974.244, 454.376, -369.322]}
          rotation={[-Math.PI, 0, 1.847]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane003_Colore_0.geometry}
          material={materials.Colore}
          position={[1949.023, 117.978, -584.775]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane004_Colore_0.geometry}
          material={materials.Colore}
          position={[1356.227, 117.978, -587.181]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane005_Colore_0.geometry}
          material={materials.Colore}
          position={[1496.508, 448.427, -556.879]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)001_Colore_0"].geometry}
          material={materials.Colore}
          position={[1325.518, 16.382, -582.87]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Plant(Sphere)001_Colore_0"].geometry}
          material={materials.Colore}
          position={[1328.065, 50.697, -583.391]}
          rotation={[-Math.PI / 2, 0.051, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone002_Colore_0.geometry}
          material={materials.Colore}
          position={[1809.607, 337.97, 1007.062]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone2002_Colore_0.geometry}
          material={materials.Colore}
          position={[2406.182, 337.97, 1007.062]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tetto007_Colore_0.geometry}
          material={materials.Colore}
          position={[2152.711, 859.569, 873.47]}
          rotation={[-Math.PI / 4, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tubes002__0.geometry}
          material={materials.Tubes__0}
          position={[1226.373, 454.376, 915.822]}
          rotation={[0, 0, -1.294]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane006_Colore_0.geometry}
          material={materials.Colore}
          position={[2251.594, 117.978, 1131.275]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane007_Colore_0.geometry}
          material={materials.Colore}
          position={[2844.39, 117.978, 1133.682]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane008_Colore_0.geometry}
          material={materials.Colore}
          position={[2704.109, 448.427, 1103.379]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone003_Colore_0.geometry}
          material={materials.Colore}
          position={[4064.191, 337.97, -463.466]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone2003_Colore_0.geometry}
          material={materials.Colore}
          position={[3467.616, 337.97, -463.466]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tetto008_Colore_0.geometry}
          material={materials.Colore}
          position={[3721.087, 859.569, -329.874]}
          rotation={[-2.356, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tubes003__0.geometry}
          material={materials.Tubes__0}
          position={[4647.425, 454.376, -372.227]}
          rotation={[-Math.PI, 0, 1.847]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane009_Colore_0.geometry}
          material={materials.Colore}
          position={[3622.204, 117.978, -587.679]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane010_Colore_0.geometry}
          material={materials.Colore}
          position={[3029.408, 117.978, -590.086]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane011_Colore_0.geometry}
          material={materials.Colore}
          position={[3169.689, 448.427, -559.783]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone004_Colore_0.geometry}
          material={materials.Colore}
          position={[3453.599, 337.97, 1010.108]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balcone2004_Colore_0.geometry}
          material={materials.Colore}
          position={[4050.173, 337.97, 1010.108]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tetto009_Colore_0.geometry}
          material={materials.Colore}
          position={[3796.703, 859.569, 876.516]}
          rotation={[-Math.PI / 4, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tubes004__0.geometry}
          material={materials.Tubes__0}
          position={[2870.364, 454.376, 918.869]}
          rotation={[0, 0, -1.294]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane012_Colore_0.geometry}
          material={materials.Colore}
          position={[3895.586, 117.978, 1134.322]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane013_Colore_0.geometry}
          material={materials.Colore}
          position={[4488.381, 117.978, 1136.728]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Persiane014_Colore_0.geometry}
          material={materials.Colore}
          position={[4348.1, 448.427, 1106.425]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)002_Colore_0"].geometry}
          material={materials.Colore}
          position={[-2173.925, 25.706, -5396.656]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)003_Colore_0"].geometry}
          material={materials.Colore}
          position={[-1822.766, 25.706, -5396.656]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)004_Colore_0"].geometry}
          material={materials.Colore}
          position={[-309.049, 26.702, -4379.145]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)005_Colore_0"].geometry}
          material={materials.Colore}
          position={[-301.286, 26.702, -4016.187]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)006_Colore_0"].geometry}
          material={materials.Colore}
          position={[583.86, 25.696, 1252.751]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)007_Colore_0"].geometry}
          material={materials.Colore}
          position={[583.86, 25.696, 1348.662]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)008_Colore_0"].geometry}
          material={materials.Colore}
          position={[959.71, 25.696, 1348.662]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)009_Colore_0"].geometry}
          material={materials.Colore}
          position={[968.133, 25.696, 1252.751]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tenda005_Colore_0.geometry}
          material={materials.Colore}
          position={[1753.215, 224.849, 1147.581]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[88.238, 93.149, 96.996]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tenda006_Colore_0.geometry}
          material={materials.Colore}
          position={[3389.322, 224.849, 1147.581]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[88.238, 93.149, 96.996]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tenda008_Colore_0.geometry}
          material={materials.Colore}
          position={[4126.053, 215.319, -603.985]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[88.238, 93.149, 96.996]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)010_Colore_0"].geometry}
          material={materials.Colore}
          position={[2607.134, 16.606, -620.988]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={74.832}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)011_Colore_0"].geometry}
          material={materials.Colore}
          position={[1600.862, -25.892, -579.26]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)012_Colore_0"].geometry}
          material={materials.Colore}
          position={[2124.987, 26.975, -1738.39]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)013_Colore_0"].geometry}
          material={materials.Colore}
          position={[2341.876, 26.975, -1742.872]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)014_Colore_0"].geometry}
          material={materials.Colore}
          position={[3567.44, 26.975, -617.024]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)015_Colore_0"].geometry}
          material={materials.Colore}
          position={[2299.12, 16.606, 1140.141]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={74.832}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)016_Colore_0"].geometry}
          material={materials.Colore}
          position={[1613.518, -25.892, 1146.292]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Vase(Simple)017_Colore_0"].geometry}
          material={materials.Colore}
          position={[4246.726, 26.975, 1154.385]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dumpster001_Colore_0.geometry}
          material={materials.Colore}
          position={[2730.66, 128.758, -7994.209]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dumpster002_Colore_0.geometry}
          material={materials.Colore}
          position={[2730.66, 128.758, -8342.715]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree002_Colore_0.geometry}
          material={materials.Colore}
          position={[5678.362, -1.68, 1446.131]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={71.784}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree003_Colore_0.geometry}
          material={materials.Colore}
          position={[2950.652, -1.924, 1492.196]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={55.826}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree004_Colore_0.geometry}
          material={materials.Colore}
          position={[2023.56, -1.924, -3513.034]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[91.932, 91.932, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree005_Colore_0.geometry}
          material={materials.Colore}
          position={[5226.739, -27.989, -9020.324]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree001_Colore_0.geometry}
          material={materials.Colore}
          position={[-1383.971, 237.622, -4580.907]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={309.966}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree002_Colore_0.geometry}
          material={materials.Colore}
          position={[-2549.906, 176.779, -3953.246]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[309.966, 309.966, 245.187]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PineTree001_Colore_0.geometry}
          material={materials.Colore}
          position={[5679.282, 173.042, 1449.77]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={45.712}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree004_Colore_0.geometry}
          material={materials.Colore}
          position={[2949.602, 262.556, 1498.692]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree005_Colore_0.geometry}
          material={materials.Colore}
          position={[1975.304, 505.879, -3544.622]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[96.142, 96.142, 136.521]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree006_Colore_0.geometry}
          material={materials.Colore}
          position={[-1295.584, 347.951, -379.236]}
          rotation={[-Math.PI / 2, 0, -1.566]}
          scale={[97.921, 97.921, 69.446]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PineTree_Colore_0.geometry}
          material={materials.Colore}
          position={[-1058.302, 229.789, -4164.258]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={63.68}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PineTree002_Colore_0.geometry}
          material={materials.Colore}
          position={[-1357.104, 229.789, -2933.442]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={63.68}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree007_Colore_0.geometry}
          material={materials.Colore}
          position={[5226.048, 329.145, -9020.771]}
          rotation={[-Math.PI / 2, 0, -3.137]}
          scale={[97.921, 97.921, 69.446]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree008_Colore_0.geometry}
          material={materials.Colore}
          position={[-2174.78, 114.534, -5394.02]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree009_Colore_0.geometry}
          material={materials.Colore}
          position={[-1823.621, 114.534, -5394.02]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree006_Colore_0.geometry}
          material={materials.Colore}
          position={[3247.291, -1.924, -2115.553]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree010_Colore_0.geometry}
          material={materials.Colore}
          position={[3239.707, 359.637, -2119.447]}
          rotation={[-Math.PI / 2, 0, 0.004]}
          scale={[97.921, 97.921, 69.446]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree011_Colore_0.geometry}
          material={materials.Colore}
          position={[-328.789, 157.319, -4382.399]}
          rotation={[-Math.PI / 2, 0, -1.841]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree012_Colore_0.geometry}
          material={materials.Colore}
          position={[-286.592, 157.319, -4019.508]}
          rotation={[-Math.PI / 2, 0, 1.786]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree009_Colore_0.geometry}
          material={materials.Colore}
          position={[4794.031, 0.246, -428.517]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={78.083}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree015_Colore_0.geometry}
          material={materials.Colore}
          position={[4785.639, 430.356, -436.936]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree010_Colore_0.geometry}
          material={materials.Colore}
          position={[3965.226, -1.924, -7584.426]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree016_Colore_0.geometry}
          material={materials.Colore}
          position={[3964.176, 262.556, -7568.913]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree012_Colore_0.geometry}
          material={materials.Colore}
          position={[3965.226, -1.924, -9295.247]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree018_Colore_0.geometry}
          material={materials.Colore}
          position={[3964.176, 262.556, -9279.733]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree019_Colore_0.geometry}
          material={materials.Colore}
          position={[583.5, 111.818, 1250.873]}
          rotation={[-Math.PI / 2, 0, -1.566]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree020_Colore_0.geometry}
          material={materials.Colore}
          position={[583.5, 144.47, 1351.151]}
          rotation={[-Math.PI / 2, 0, -1.566]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree021_Colore_0.geometry}
          material={materials.Colore}
          position={[972.338, 157.601, 1270.157]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[126.32, 126.32, 130.433]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PineTree003_Colore_0.geometry}
          material={materials.Colore}
          position={[964.154, 110.512, 1353.106]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={63.68}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree001_Colore_0.geometry}
          material={materials.Colore}
          position={[1289.858, -1.924, 1492.196]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={55.826}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree003_Colore_0.geometry}
          material={materials.Colore}
          position={[1288.808, 166.399, 1498.692]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree011_Colore_0.geometry}
          material={materials.Colore}
          position={[4266.129, -1.924, 1492.196]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={55.826}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree017_Colore_0.geometry}
          material={materials.Colore}
          position={[4265.079, 262.556, 1498.692]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree023_Colore_0.geometry}
          material={materials.Colore}
          position={[-1531.466, 416.5, -1489.726]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree024_Colore_0.geometry}
          material={materials.Colore}
          position={[2564.64, 505.879, -9279.386]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[96.142, 96.142, 136.521]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree014_Colore_0.geometry}
          material={materials.Colore}
          position={[2574.044, -1.924, -9295.247]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree025_Colore_0.geometry}
          material={materials.Colore}
          position={[2441.946, 505.879, -7576.793]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[96.142, 96.142, 136.521]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree015_Colore_0.geometry}
          material={materials.Colore}
          position={[2451.35, -1.924, -7592.654]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_Tree016_Colore_0.geometry}
          material={materials.Colore}
          position={[5954.988, 0.246, -2119.948]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={78.083}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree026_Colore_0.geometry}
          material={materials.Colore}
          position={[5946.569, 430.356, -2111.555]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree029_Colore_0.geometry}
          material={materials.Colore}
          position={[2606.865, 105.486, -619.126]}
          rotation={[-Math.PI / 2, 0, -1.566]}
          scale={74.832}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree030_Colore_0.geometry}
          material={materials.Colore}
          position={[1596.657, 106.013, -596.666]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[126.32, 126.32, 130.433]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree031_Colore_0.geometry}
          material={materials.Colore}
          position={[2124.627, 113.097, -1740.268]}
          rotation={[-Math.PI / 2, 0, -1.566]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PineTree004_Colore_0.geometry}
          material={materials.Colore}
          position={[2346.319, 111.791, -1738.428]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={63.68}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree032_Colore_0.geometry}
          material={materials.Colore}
          position={[3565.973, 129.001, -615.815]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={28.065}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree033_Colore_0.geometry}
          material={materials.Colore}
          position={[2298.851, 105.486, 1142.003]}
          rotation={[-Math.PI / 2, 0, -1.566]}
          scale={74.832}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree034_Colore_0.geometry}
          material={materials.Colore}
          position={[1617.723, 106.013, 1163.698]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[126.32, 126.32, 130.433]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree035_Colore_0.geometry}
          material={materials.Colore}
          position={[4245.259, 129.001, 1155.594]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={28.065}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005_Colore_0.geometry}
          material={materials.Colore}
          position={[-2809.267, 63.357, 1326.122]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[76.301, 76.301, 54.743]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere006_Colore_0.geometry}
          material={materials.Colore}
          position={[-2558.558, 63.357, 1454.891]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[76.301, 76.301, 54.743]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere007_Colore_0.geometry}
          material={materials.Colore}
          position={[-996.612, 63.357, -313.055]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[76.301, 76.301, 54.743]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere008_Colore_0.geometry}
          material={materials.Colore}
          position={[-1155.096, 63.357, -567.623]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[76.301, 76.301, 54.743]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gates_Colore_0.geometry}
          material={materials.Colore}
          position={[-1662.965, 95.938, 1437.95]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sdraio002_Colore_0.geometry}
          material={materials.Colore}
          position={[-1444.207, 20.365, -1070.225]}
          rotation={[-Math.PI / 2, 0, 2.309]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere012_Colore_0.geometry}
          material={materials.Colore}
          position={[-1331.192, 63.357, -4577.894]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[59.07, 59.07, 42.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere011_Colore_0.geometry}
          material={materials.Colore}
          position={[-1535.635, 63.357, -4247.81]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[59.07, 59.07, 42.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere013_Colore_0.geometry}
          material={materials.Colore}
          position={[-569.075, 63.357, -3701.379]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[59.07, 59.07, 42.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere014_Colore_0.geometry}
          material={materials.Colore}
          position={[-1099.324, 63.357, -3358.878]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[59.07, 59.07, 42.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere015_Colore_0.geometry}
          material={materials.Colore}
          position={[-1330.475, 63.357, -3628.522]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[59.07, 59.07, 42.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere016_Colore_0.geometry}
          material={materials.Colore}
          position={[-1062.601, 63.357, -4052.654]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[59.07, 59.07, 42.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sdraio003_Colore_0.geometry}
          material={materials.Colore}
          position={[-1444.207, 20.365, -2604.947]}
          rotation={[-Math.PI / 2, 0, 1.303]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fences_Colore_0.geometry}
          material={materials.Colore}
          position={[-1090.477, 85, -792.574]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fences001_Colore_0.geometry}
          material={materials.Colore}
          position={[-2850.246, 85, -776.49]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fences002_Colore_0.geometry}
          material={materials.Colore}
          position={[-1111.448, 85, -3214.53]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fences003_Colore_0.geometry}
          material={materials.Colore}
          position={[-2850.246, 85, -1984.649]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fences004_Colore_0.geometry}
          material={materials.Colore}
          position={[-2857.848, 85, -3194.488]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LetterBox_Colore_0.geometry}
          material={materials.Colore}
          position={[-2815.356, 1.391, -2904.662]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={130.868}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LetterBox001_Colore_0.geometry}
          material={materials.Colore}
          position={[-2815.356, 1.391, -1648.274]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={130.868}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base001_Colore_0.geometry}
          material={materials.Colore}
          position={[4667.045, 18.824, -4551.717]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 171.948, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Colonne_Colore_0.geometry}
          material={materials.Colore}
          position={[4667.045, 433.615, -4551.717]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ciminiere_Colore_0.geometry}
          material={materials.Colore}
          position={[-440.392, 834, -8232.64]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel_Colore_0.geometry}
          material={materials.Colore}
          position={[-1925.291, 323.254, -7986.168]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel003_Colore_0.geometry}
          material={materials.Colore}
          position={[-2228.489, 106.31, -7986.168]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel004_Colore_0.geometry}
          material={materials.Colore}
          position={[-2228.489, 319.944, -7986.168]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel005_Colore_0.geometry}
          material={materials.Colore}
          position={[-2074.347, 109.62, -7986.168]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel006_Colore_0.geometry}
          material={materials.Colore}
          position={[-1925.291, 109.62, -7986.168]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel007_Colore_0.geometry}
          material={materials.Colore}
          position={[-2368.975, 106.31, -7986.168]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel013_Colore_0.geometry}
          material={materials.Colore}
          position={[-2540.669, 106.31, -8199.937]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel014_Colore_0.geometry}
          material={materials.Colore}
          position={[-2564.024, 106.31, -8377.614]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel015_Colore_0.geometry}
          material={materials.Colore}
          position={[-2369.61, 319.965, -7986.168]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel016_Colore_0.geometry}
          material={materials.Colore}
          position={[-2665.251, 106.31, -8082.51]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel017_Colore_0.geometry}
          material={materials.Colore}
          position={[-2514.802, 109.62, -8027.451]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel018_Colore_0.geometry}
          material={materials.Colore}
          position={[-2661.9, 106.31, -8284.917]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[7615.341, -25.053, -9923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[6615.341, -25.053, -7923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[6615.341, -25.053, -8923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane054_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[7615.341, -25.053, -8923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[5615.341, -25.053, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[6615.341, -25.053, -7923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane059_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[6615.341, -25.053, -8923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane065_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[7615.341, -25.053, -8923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[5615.341, -25.053, -9923.003]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[2615.341, 0, -7923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[2615.341, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[3615.341, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[2615.341, 0, -7923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[2615.341, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[3615.341, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[-384.659, 0, -7923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane147_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[-384.659, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[615.341, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane149_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[-384.659, 0, -7923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[-384.659, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[615.341, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane152_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[-2384.659, 0, -7923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane153_ContornoEdifici_0.geometry}
          material={materials.ContornoEdifici}
          position={[-2384.659, 0, -8923.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[3508.015, 0, -2815.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[4615.341, -5, -4923.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[508.015, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1308.015, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2108.015, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2908.015, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[508.015, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[508.015, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[508.015, 0, -1215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[508.015, 0, -2015.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1308.015, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1308.015, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1308.015, 0, -1215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1308.015, 0, -2015.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2108.015, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2108.015, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2108.015, 0, -1215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2108.015, 0, -2015.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2908.015, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2908.015, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2908.015, 0, -1215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[2908.015, 0, -2015.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[3708.015, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[3708.015, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[3708.015, 0, -1215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[3708.015, 0, -2015.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[4508.016, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane104_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[4508.016, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[4508.016, 0, -1215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane106_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[4508.016, 0, -2015.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[5308.016, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[5308.016, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[5308.016, 0, -1215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[5308.016, 0, -2015.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[4308.016, 0, -2815.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[5108.016, 0, -2815.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[5908.016, 0, -2815.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[5308.016, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[4508.016, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[3708.015, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[6108.016, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[6108.016, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1708.015, 0, -3815.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1708.015, 0, -4615.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1708.015, 0, -5415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[1708.015, 0, -6215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[908.015, 0, -3815.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[908.015, 0, -4615.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[908.015, 0, -5415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[908.015, 0, -6215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[108.015, 0, -3815.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[108.015, 0, -4615.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[108.015, 0, -5415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[108.015, 0, -6215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[-2491.985, 0, -6015.678]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane132_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[-1691.985, 0, -6015.678]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane133_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[-891.985, 0, -6015.678]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[6908.016, 0, 384.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[6908.016, 0, 1184.322]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane137_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[6908.016, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane138_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[6108.016, 0, -1215.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane139_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[6108.016, 0, -415.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[6108.016, 0, -2015.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_Colore_0.geometry}
          material={materials.Colore}
          position={[-2384.659, 0, -3824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane159_Colore_0.geometry}
          material={materials.Colore}
          position={[-2384.659, 0, -2824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane160_Colore_0.geometry}
          material={materials.Colore}
          position={[-2384.659, 0, -1824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane161_Colore_0.geometry}
          material={materials.Colore}
          position={[-2384.659, 0, -824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane162_Colore_0.geometry}
          material={materials.Colore}
          position={[-2384.659, 0, 175.898]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane163_Colore_0.geometry}
          material={materials.Colore}
          position={[-2384.659, 0, 1175.898]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane164_Colore_0.geometry}
          material={materials.Colore}
          position={[-1384.659, 0, 175.898]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane165_Colore_0.geometry}
          material={materials.Colore}
          position={[-1384.659, 0, 1175.898]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane166_Colore_0.geometry}
          material={materials.Colore}
          position={[-1384.659, 0, -1824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane167_Colore_0.geometry}
          material={materials.Colore}
          position={[-1384.659, 0, -824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane168_Colore_0.geometry}
          material={materials.Colore}
          position={[-1384.659, 0, -3824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane169_Colore_0.geometry}
          material={materials.Colore}
          position={[-1384.659, 0, -2824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane170_Colore_0.geometry}
          material={materials.Colore}
          position={[-2384.659, 0, -4824.102]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane171_Marcapiede_0.geometry}
          material={materials.Marcapiede}
          position={[-706.636, 0, -5215.678]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane172__0.geometry}
          material={materials.Tubes__0}
          position={[-1623.22, 10.938, 1476.997]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[177.609, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane173__0.geometry}
          material={materials.Tubes__0}
          position={[681.045, 10.938, -7523.003]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[177.609, 100, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PicnicTable001_Colore_0.geometry}
          material={materials.Colore}
          position={[650.972, -35.692, -649.297]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={111.214}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pizza_Colore_0.geometry}
          material={materials.Colore}
          position={[585.332, 618.499, 181.809]}
          rotation={[-Math.PI / 2, -0.484, -0.81]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tubes005_Colore_0.geometry}
          material={materials.Colore}
          position={[498.471, 528.181, -38.264]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[5.615, 5.615, 39.204]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table_Colore_0.geometry}
          material={materials.Colore}
          position={[6435.615, 27.437, -0.996]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair2_Colore_0.geometry}
          material={materials.Colore}
          position={[6592.595, 92.532, -0.996]}
          rotation={[-Math.PI / 2, 0, 0.087]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_Colore_0.geometry}
          material={materials.Colore}
          position={[6301.39, 92.532, -0.996]}
          rotation={[-Math.PI / 2, 0, -3.054]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dumpster_Colore_0.geometry}
          material={materials.Colore}
          position={[6116.921, 128.747, 1313.471]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dumpster003_Colore_0.geometry}
          material={materials.Colore}
          position={[1620.468, 127.231, 32.805]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Table001_Colore_0.geometry}
          material={materials.Colore}
          position={[610.278, 31.14, -1817.256]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair2001_Colore_0.geometry}
          material={materials.Colore}
          position={[767.258, 96.235, -1817.256]}
          rotation={[-Math.PI / 2, 0, 0.087]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair001_Colore_0.geometry}
          material={materials.Colore}
          position={[476.053, 96.235, -1817.256]}
          rotation={[-Math.PI / 2, 0, -3.054]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dumpster004_Colore_0.geometry}
          material={materials.Colore}
          position={[3338.132, 127.231, 478.495]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dumpster005_Colore_0.geometry}
          material={materials.Colore}
          position={[428.933, 104.22, -5186.965]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={80.169}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dumpster006_Colore_0.geometry}
          material={materials.Colore}
          position={[908.503, 104.22, -4840.367]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={80.169}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dumpster007_Colore_0.geometry}
          material={materials.Colore}
          position={[985.752, 127.231, 212.111]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_Colore_0.geometry}
          material={materials.Colore}
          position={[7547.903, 86.633, -3707.38]}
          rotation={[0, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel001_Colore_0.geometry}
          material={materials.Colore}
          position={[7872.235, 106.31, -2504.22]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel002_Colore_0.geometry}
          material={materials.Colore}
          position={[8034.988, 106.31, -2504.22]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel008_Colore_0.geometry}
          material={materials.Colore}
          position={[8035.505, 315.6, -2504.22]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel009_Colore_0.geometry}
          material={materials.Colore}
          position={[7190.321, 106.31, -2342.797]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel010_Colore_0.geometry}
          material={materials.Colore}
          position={[8034.988, 106.31, -2363.244]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel011_Colore_0.geometry}
          material={materials.Colore}
          position={[7317.033, 106.31, -2443.534]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OilBarrel012_Colore_0.geometry}
          material={materials.Colore}
          position={[7193.757, 109.62, -2504.22]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench001_Colore_0.geometry}
          material={materials.Colore}
          position={[1594.867, -7.916, -1742.186]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[236.53, 287.197, 287.197]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench_Colore_0.geometry}
          material={materials.Colore}
          position={[-1587.133, 75.029, -5330.259]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={119.951}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fontana_Colore_0.geometry}
          material={materials.Colore}
          position={[4623.058, 65, -2227.498]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PicnicTable_Colore_0.geometry}
          material={materials.Colore}
          position={[-1944.028, -35.682, -3750.884]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole_Colore_0.geometry}
          material={materials.Colore}
          position={[142.32, 208.994, -2040.02]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench002_Colore_0.geometry}
          material={materials.Colore}
          position={[4669.645, -2.263, 1591.193]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[310.815, 377.395, 377.395]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench003_Colore_0.geometry}
          material={materials.Colore}
          position={[-1539.028, 75.029, -4041.833]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={119.951}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench004_Colore_0.geometry}
          material={materials.Colore}
          position={[4624.904, -2.263, -1687.953]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[310.815, 377.395, 377.395]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench005_Colore_0.geometry}
          material={materials.Colore}
          position={[4145.449, -2.263, -2015.826]}
          rotation={[-Math.PI / 2, 0, -2.705]}
          scale={[310.815, 377.395, 377.395]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench006_Colore_0.geometry}
          material={materials.Colore}
          position={[5078.179, -2.263, -2003.18]}
          rotation={[-Math.PI / 2, 0, 2.705]}
          scale={[310.815, 377.395, 377.395]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole001_Colore_0.geometry}
          material={materials.Colore}
          position={[142.32, 208.994, -655.406]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole002_Colore_0.geometry}
          material={materials.Colore}
          position={[142.32, 208.994, 507.501]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole003_Colore_0.geometry}
          material={materials.Colore}
          position={[142.32, 208.994, 1537.242]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole004_Colore_0.geometry}
          material={materials.Colore}
          position={[-2742.705, 208.994, 1606.453]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole005_Colore_0.geometry}
          material={materials.Colore}
          position={[-975.56, 208.994, 1606.453]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole006_Colore_0.geometry}
          material={materials.Colore}
          position={[1700.583, 208.994, 1606.453]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole007_Colore_0.geometry}
          material={materials.Colore}
          position={[2730.926, 208.994, 1606.453]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole008_Colore_0.geometry}
          material={materials.Colore}
          position={[4454.847, 208.994, 1606.453]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole009_Colore_0.geometry}
          material={materials.Colore}
          position={[6422.081, 208.994, 1606.453]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole010_Colore_0.geometry}
          material={materials.Colore}
          position={[7095.906, 208.994, -403.711]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole011_Colore_0.geometry}
          material={materials.Colore}
          position={[3126.061, 208.994, -3456.013]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole012_Colore_0.geometry}
          material={materials.Colore}
          position={[3149.621, 208.994, -5976.402]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole013_Colore_0.geometry}
          material={materials.Colore}
          position={[2088.498, 208.994, -4802.854]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole014_Colore_0.geometry}
          material={materials.Colore}
          position={[-2841.982, 208.994, -3268.735]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole015_Colore_0.geometry}
          material={materials.Colore}
          position={[-2841.982, 208.994, -5452.701]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole016_Colore_0.geometry}
          material={materials.Colore}
          position={[-2841.982, 208.994, -7532.118]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole017_Colore_0.geometry}
          material={materials.Colore}
          position={[-2841.982, 208.994, -9216.579]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole018_Colore_0.geometry}
          material={materials.Colore}
          position={[5174.344, 208.994, -9442.188]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole019_Colore_0.geometry}
          material={materials.Colore}
          position={[5077.779, 247.397, -7398.27]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole020_Colore_0.geometry}
          material={materials.Colore}
          position={[7201.293, 208.994, -6463.847]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole021_Colore_0.geometry}
          material={materials.Colore}
          position={[6051.198, 208.994, -6456.931]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole022_Colore_0.geometry}
          material={materials.Colore}
          position={[3327.025, 208.994, -6385.271]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole023_Colore_0.geometry}
          material={materials.Colore}
          position={[2020.996, 208.994, -6385.271]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole024_Colore_0.geometry}
          material={materials.Colore}
          position={[628.694, 208.994, -6385.271]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole025_Colore_0.geometry}
          material={materials.Colore}
          position={[-953.652, 208.994, -6385.271]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole026_Colore_0.geometry}
          material={materials.Colore}
          position={[-2808.162, 208.994, -6385.271]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole027_Colore_0.geometry}
          material={materials.Colore}
          position={[6142.475, 208.994, -4802.854]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole028_Colore_0.geometry}
          material={materials.Colore}
          position={[6142.475, 208.994, -2960.716]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole029_Colore_0.geometry}
          material={materials.Colore}
          position={[6142.475, 208.994, -1358.996]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole030_Colore_0.geometry}
          material={materials.Colore}
          position={[7082.16, 208.994, -3456.013]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole031_Colore_0.geometry}
          material={materials.Colore}
          position={[7082.16, 208.994, -1771.992]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole032_Colore_0.geometry}
          material={materials.Colore}
          position={[7082.16, 208.994, -5239.178]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bin001_Colore_0.geometry}
          material={materials.Colore}
          position={[2993.7, 56.575, -1820.454]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bin002_Colore_0.geometry}
          material={materials.Colore}
          position={[3077.51, 56.575, -592.652]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bin003_Colore_0.geometry}
          material={materials.Colore}
          position={[4333.948, 56.575, -1758.794]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bin004_Colore_0.geometry}
          material={materials.Colore}
          position={[5794.008, 72.505, 407.801]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
          scale={128.176}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bin005_Colore_0.geometry}
          material={materials.Colore}
          position={[4437.697, 56.575, 1147.182]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container_Colore_0.geometry}
          material={materials.Colore}
          position={[7357.565, 149.083, -5445.637]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container001_Colore_0.geometry}
          material={materials.Colore}
          position={[7650.259, 149.083, -5445.637]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container002_Colore_0.geometry}
          material={materials.Colore}
          position={[7650.258, 435.558, -5445.172]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container003_Colore_0.geometry}
          material={materials.Colore}
          position={[7945.543, 435.558, -5445.172]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container004_Colore_0.geometry}
          material={materials.Colore}
          position={[7945.543, 149.083, -5445.172]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container005_Colore_0.geometry}
          material={materials.Colore}
          position={[7716.375, 149.083, -5958.6]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container006_Colore_0.geometry}
          material={materials.Colore}
          position={[7716.375, 149.083, -6252.981]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Container007_Colore_0.geometry}
          material={materials.Colore}
          position={[7716.375, 435.558, -6252.981]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ParkingLot_Colore_0.geometry}
          material={materials.Colore}
          position={[6411.856, -0.053, -8125.619]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={106.553}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ParkingLot001_Colore_0.geometry}
          material={materials.Colore}
          position={[5055.622, -0.053, -8130.393]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={106.553}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ParkingLot002_Colore_0.geometry}
          material={materials.Colore}
          position={[7646.361, -0.053, -8130.393]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={106.553}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ParkingLot003_Colore_0.geometry}
          material={materials.Colore}
          position={[7646.361, -0.053, -9606.682]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={106.553}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ParkingLot004_Colore_0.geometry}
          material={materials.Colore}
          position={[6216.01, -0.053, -10390.056]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={106.553}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ParkingLot005_Colore_0.geometry}
          material={materials.Colore}
          position={[1791.044, 6.842, -4227.948]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[106.553, 106.553, 27.37]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ParkingLot006_Colore_0.geometry}
          material={materials.Colore}
          position={[1461.588, 10.589, -3745.551]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[106.553, 106.553, 42.357]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench007_Colore_0.geometry}
          material={materials.Colore}
          position={[429.035, 36.001, -3467.475]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={119.951}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench008_Colore_0.geometry}
          material={materials.Colore}
          position={[5902.911, -7.916, -5390.249]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench009_Colore_0.geometry}
          material={materials.Colore}
          position={[5901.304, -7.916, -4911.947]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench010_Colore_0.geometry}
          material={materials.Colore}
          position={[6009.074, -7.916, -4081.371]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench011_Colore_0.geometry}
          material={materials.Colore}
          position={[3963.365, -7.916, -7969.161]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_Colore_0.geometry}
          material={materials.Colore}
          position={[3566.766, 5258.987, -3897.554]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere002_Colore_0.geometry}
          material={materials.Colore}
          position={[-665.699, 2573.632, -8609.938]}
          rotation={[-0.582, -0.198, -0.755]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere004_Colore_0.geometry}
          material={materials.Colore}
          position={[-2060.396, 810.389, -2354.175]}
          rotation={[-2.535, 0.33, 2.294]}
          scale={22.846}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere017_Colore_0.geometry}
          material={materials.Colore}
          position={[-2062.399, 779.052, -1046.576]}
          rotation={[0.59, 0.573, -1.209]}
          scale={22.846}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench012_Colore_0.geometry}
          material={materials.Colore}
          position={[3384.421, 36.001, -9341.453]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={119.951}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench013_Colore_0.geometry}
          material={materials.Colore}
          position={[5951.692, -7.916, -1571.249]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench014_Colore_0.geometry}
          material={materials.Colore}
          position={[5951.692, -7.916, -597.738]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench015_Colore_0.geometry}
          material={materials.Colore}
          position={[3255.644, -7.916, -2644.902]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench016_Colore_0.geometry}
          material={materials.Colore}
          position={[3255.644, -7.916, -2988.193]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench017_Colore_0.geometry}
          material={materials.Colore}
          position={[3868.145, 40.263, -640.869]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[119.951, 34.057, 119.951]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench018_Colore_0.geometry}
          material={materials.Colore}
          position={[3791.352, 40.263, -640.869]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[119.951, 34.057, 119.951]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench019_Colore_0.geometry}
          material={materials.Colore}
          position={[3272.448, 40.263, -640.869]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[119.951, 34.057, 119.951]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench020_Colore_0.geometry}
          material={materials.Colore}
          position={[2153.11, 4.199, -609.268]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[210.399, 255.469, 255.469]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench021_Colore_0.geometry}
          material={materials.Colore}
          position={[2062.237, -0.063, 1149.712]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[210.399, 255.469, 255.469]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench022_Colore_0.geometry}
          material={materials.Colore}
          position={[3698.26, -0.629, 1149.712]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[210.399, 255.469, 255.469]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench023_Colore_0.geometry}
          material={materials.Colore}
          position={[3141.397, 10.631, 1550.461]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[210.399, 255.469, 255.469]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole033_Color_0.geometry}
          material={materials.Color}
          position={[2773.07, 0.183, -6421.226]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={25.906}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005__0.geometry}
          material={materials.Tubes__0}
          position={[-851.485, 3.716, 1562.774]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={25.906}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole034_Color_0.geometry}
          material={materials.Color}
          position={[4145.446, 157.661, -7447.982]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={25.906}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006__0.geometry}
          material={materials.Tubes__0}
          position={[-2844.839, 3.716, -7424.429]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={25.906}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pole035_Color_0.geometry}
          material={materials.Color}
          position={[7096.376, 157.661, -6465.617]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={25.906}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench024_Colore_0.geometry}
          material={materials.Colore}
          position={[2692.903, -7.916, -2348.4]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench025_Colore_0.geometry}
          material={materials.Colore}
          position={[1614.774, -7.916, -2348.451]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench026_Colore_0.geometry}
          material={materials.Colore}
          position={[3450.812, -7.916, -5154.688]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench027_Colore_0.geometry}
          material={materials.Colore}
          position={[3449.205, -7.916, -4676.386]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench028_Colore_0.geometry}
          material={materials.Colore}
          position={[3532.791, -7.916, -5998.755]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bench029_Colore_0.geometry}
          material={materials.Colore}
          position={[5773.367, -7.916, -5998.755]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[325.239, 394.908, 394.908]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane174_Colore_0.geometry}
          material={materials.Colore}
          position={[3794.939, -1420.337, 1103.765]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere018_Colore_0.geometry}
          material={materials.Colore}
          position={[-3882.244, -274.695, -10307.208]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere019_Colore_0.geometry}
          material={materials.Colore}
          position={[-3683.272, -525.456, -10434.354]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere020_Colore_0.geometry}
          material={materials.Colore}
          position={[8107.149, -369.971, -10307.208]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere021_Colore_0.geometry}
          material={materials.Colore}
          position={[-3683.272, -525.456, 2548.053]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/low_poly_city.glb");
