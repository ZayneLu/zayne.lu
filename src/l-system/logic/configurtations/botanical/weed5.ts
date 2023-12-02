import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 25
const weed5: Configuration = {
  name: 'weed 5',
  axiom: 'X',
  productions: {
    X: [{ successor: 'F[-X][+X]FX', weight: 1 }],
    F: [{ successor: 'FF', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 1.5, thickness: 0.4,
    }],
    '+': [{ type: 'turn', xDegrees: 25.7 }],
    '-': [{ type: 'turn', xDegrees: -25.7 }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default weed5;
