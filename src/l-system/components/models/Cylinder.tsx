/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface CylinderProps{
  position: [x: number, y: number, z: number];
  dimensions: [height: number, diameter: number];
  rotation: [x: number, y: number, z: number];
}

function Cylinder({ position, dimensions, rotation }: CylinderProps) {
  const meshRef = useRef<THREE.Mesh>(null);
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
      <cylinderGeometry args={[dimensions[1] / 2, dimensions[1] / 2, dimensions[0]]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default Cylinder;
