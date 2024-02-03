import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 25
const weed6: Configuration = {
  name: 'weed 6',
  axiom: 'X',
  productions: {
    X: [{ successor: 'F+[[X]-X]-F[-FX]+X', weight: 1 }],
    F: [{ successor: 'FF', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 1.5, thickness: 0.4,
    }],
    '+': [{ type: 'turn', xDegrees: 22.5 }],
    '-': [{ type: 'turn', xDegrees: -22.5 }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default weed6;
