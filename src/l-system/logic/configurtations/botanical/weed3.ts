import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 25
const weed3: Configuration = {
  name: 'weed 3',
  axiom: 'F',
  productions: {
    F: [{ successor: 'FF+[+F-F-F]-[-F+F+F]', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 1.5, thickness: 0.3,
    }],
    '+': [{ type: 'turn', xDegrees: 22.5 }],
    '-': [{ type: 'turn', xDegrees: -22.5 }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default weed3;
