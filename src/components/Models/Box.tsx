/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface BoxProps{
  position: [x: number, y: number, z: number];
  dimensions: [width?: number | undefined, height?: number | undefined, depth?: number | undefined];
  rotation: [x: number, y: number, z: number];
}

function Box({ position, dimensions, rotation }: BoxProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={1}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      rotation={new THREE.Euler(...rotation)}
    >
      <boxGeometry args={dimensions} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default Box;
