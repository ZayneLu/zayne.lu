import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

const kochcurve: Configuration = {
  name: 'Koch curve',
  axiom: 'F',
  productions: {
    F: [{ successor: 'F+F--F+F', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    '+': [{ type: 'turn', xDegrees: 60 }],
    '-': [{ type: 'turn', xDegrees: -60 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default kochcurve;
