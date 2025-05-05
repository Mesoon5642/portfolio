// EarthSphere.jsx
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import * as THREE from 'three';

export default function Ball({ position = [0, 0, 0], ...props }) {  // Default position to (0,0,0)
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/portfolio/Mason-139.jpg");

  // Tile the texture 4x4
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 5); // change 4, 4 to any tiling amount you want

  // Spin slowly
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={ref} position={position}>  {/* Pass position explicitly here */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
