import { Vector3 } from 'three';
import Instructions from '../InstructionTypes';
import { Productions } from '../LSystem';

interface Configuration{
  name: string
  axiom: string,
  productions: Productions,
  instructions: Instructions,
  cameraPosition: Vector3
}

export default Configuration;
