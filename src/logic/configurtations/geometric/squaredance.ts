import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Przemyslaw Prusinkiewicz and James Hanan, pp. 16
const squaredance: Configuration = {
  name: 'square dance',
  axiom: 'F+F+F+F',
  productions: {
    F: [{ successor: 'FF+F+F+F+FF', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 1, thickness: 0.5,
    }],
    '+': [{ type: 'turn', xDegrees: 90 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default squaredance;
