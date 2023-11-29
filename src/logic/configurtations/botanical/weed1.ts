import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 25
const weed1: Configuration = {
  name: 'weed 1',
  axiom: 'F',
  productions: {
    F: [{ successor: 'F[-F]F[+F]F', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 2, thickness: 0.2,
    }],
    '+': [{ type: 'turn', xDegrees: 25.7 }],
    '-': [{ type: 'turn', xDegrees: -25.7 }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default weed1;
