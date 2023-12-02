import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 25
const weed4: Configuration = {
  name: 'weed 4',
  axiom: 'X',
  productions: {
    X: [{ successor: 'F[-X]F[+X]-X', weight: 1 }],
    F: [{ successor: 'FF', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 1.5, thickness: 0.4,
    }],
    '+': [{ type: 'turn', xDegrees: 20 }],
    '-': [{ type: 'turn', xDegrees: -20 }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default weed4;
