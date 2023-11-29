/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/extensions */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */
import { Canvas, useThree } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Box from './models/Box';
import Lighting from './models/Lighting';
import Cylinder from './models/Cylinder';
import Instructions, { DrawInstruction, Instruction } from '../logic/InstructionTypes';
import SectionWrapper from './utilities/SectionWrapper';
import { Token } from '../logic/LSystem';

const degreesToRadiansFactor = Math.PI / 180;

interface FrameProps{
  state: Token[]
  instructions: Instructions
  position : THREE.Vector3
}

interface XYZ{
  x: number,
  y: number,
  z: number
}

interface TurtleStatus{
  position: XYZ;
  rotation: XYZ;
}

const initialStatus: TurtleStatus = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
};

function saveImage(renderer?: THREE.WebGLRenderer) {
  if (!renderer) { return; }

  const source = renderer.domElement.toDataURL('image/png');
  const link = document.createElement('a');
  link.setAttribute('href', source);
  link.setAttribute('target', '_blank');
  link.setAttribute('download', 'lsystem_export.png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function attachCameraToCanvas(camera: THREE.Camera, renderer: THREE.WebGLRenderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  return () => controls.dispose();
}

function handleDrawInstruction(
  instruction: DrawInstruction,
  turtleStatus: TurtleStatus,
  objects: React.JSX.Element[],
  age: number,
) {
  if (age === 0) { return null; }

  const anglesInRads = Object.values(turtleStatus.rotation).map(
    (deg) => deg * degreesToRadiansFactor,
  );

  const direction = [
    Math.sin(anglesInRads[0]),
    Math.cos(anglesInRads[0]) * Math.cos(anglesInRads[2]),
    Math.cos(anglesInRads[0]) * Math.sin(anglesInRads[2]),
  ];

  const distances = direction.map((component) => instruction.length * component * age);

  const position: [x: number, y:number, z:number] = [
    turtleStatus.position.x + 0.5 * distances[0],
    turtleStatus.position.y + 0.5 * distances[1],
    turtleStatus.position.z + 0.5 * distances[2],
  ];

  turtleStatus.position.x += distances[0];
  turtleStatus.position.y += distances[1];
  turtleStatus.position.z += distances[2];

  const sharedProps = { position, key: objects.length };

  switch (instruction.shape) {
    case 'cylinder':
      return (
        <Cylinder
          {...structuredClone(sharedProps)}
          dimensions={[instruction.length * age, instruction.thickness]}
          rotation={[anglesInRads[2], anglesInRads[1], -anglesInRads[0]]}
        />
      );
    case 'rectangle':
      return (
        <Box
          {...structuredClone(sharedProps)}
          dimensions={[
            instruction.thickness,
            instruction.length * age,
            instruction.thickness,
          ]}
          rotation={[anglesInRads[2], anglesInRads[1], -anglesInRads[0]]}
        />
      );
    default:
      throw new Error(`Invalid draw instruction shape: ${instruction.shape}`);
  }
}

interface LinkProps{
  setRenderer: React.Dispatch<React.SetStateAction<THREE.WebGLRenderer | undefined>>
  position : THREE.Vector3
}
function Links({ setRenderer, position }: LinkProps) {
  const root = useThree();
  useEffect(() => {
    attachCameraToCanvas(root.camera, root.gl);
    setRenderer(root.gl);
    root.camera.position.set(position.x, position.y, position.z);
  }, [position]);
  return null;
}

function handleInstruction(
  instruction: Instruction,
  status:{
    turtleStatus: TurtleStatus,
    turtleStack: TurtleStatus[],
   objects: React.JSX.Element[]
  },
  age: number,
) {
  switch (instruction!.type) {
    case 'push':
      status.turtleStack.push(structuredClone(status.turtleStatus));
      break;
    case 'pop':
      status.turtleStatus = status.turtleStack.pop() ?? status.turtleStatus;
      break;
    case 'draw':
      const shape = handleDrawInstruction(instruction, status.turtleStatus, status.objects, age);
      if (shape !== null) { status.objects.push(shape); }
      break;
    case 'changeColor':
      break;
    case 'turn':
      status.turtleStatus.rotation.x += (instruction.xDegrees ?? 0) * age;
      status.turtleStatus.rotation.y += (instruction.yDegrees ?? 0) * age;
      status.turtleStatus.rotation.z += (instruction.zDegrees ?? 0) * age;
      break;
  }
}

function RendererFrame({ state, instructions, position }: FrameProps) {
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();

  const turtleStatus = structuredClone(initialStatus);
  const turtleStack: TurtleStatus[] = []; // it's turtles all the way down
  const objects: React.JSX.Element[] = [];

  const renderStatus = { turtleStatus, turtleStack, objects };

  const n = state.length;
  for (let i = 0; i < n; i++) {
    const token = state[i];
    const instructionList = instructions[token.symbol] ?? [];
    instructionList.forEach((instruction) => (
      handleInstruction(instruction, renderStatus, token.age)
    ));
  }

  return (
    <SectionWrapper>
      <div style={{ background: 'lightgrey', width: '1200px', height: '800px' }}>
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <Links position={position} setRenderer={setRenderer} />
          <primitive object={new THREE.AxesHelper(1)} />
          <Lighting />
          {objects}
        </Canvas>
      </div>
      <button type="button" onClick={() => saveImage(renderer)}>download</button>
    </SectionWrapper>
  );
}

export default RendererFrame;
