import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

const fractalcanopy: Configuration = {
  name: 'fractal canopy',
  axiom: '0',
  productions: {
    0: [{ successor: '1[-0]+0', weight: 1 }],
    1: [{ successor: '11', weight: 1 }],
  },
  instructions: {
    0: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    1: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    2: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
    '+': [{ type: 'turn', xDegrees: 30 }],
    '-': [{ type: 'turn', xDegrees: -30 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default fractalcanopy;
