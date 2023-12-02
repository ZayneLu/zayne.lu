import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

const hilbert: Configuration = {
  name: 'Hilbert curve',
  axiom: 'Y',
  productions: {
    Y: [{ successor: '-XF+YFY+FX-', weight: 1 }],
    X: [{ successor: '+YF-XFX-FY+', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 1.5, thickness: 0.4,
    }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
    '+': [{ type: 'turn', xDegrees: 90 }],
    '-': [{ type: 'turn', xDegrees: -90 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default hilbert;
