import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

const cesaro: Configuration = {
  name: 'Cesàro fractal',
  axiom: 'F',
  productions: {
    F: [{ successor: 'F+F--F+F', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    '+': [{ type: 'turn', xDegrees: 85 }],
    '-': [{ type: 'turn', xDegrees: -85 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default cesaro;
