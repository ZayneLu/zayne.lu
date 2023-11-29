import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 11
const levy: Configuration = {
  name: 'Lévy C Curve',
  axiom: 'F',
  productions: {
    F: [{ successor: '-F++F-', weight: 1 }],
  },
  instructions: {
    F: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    '+': [{ type: 'turn', xDegrees: 45 }],
    '-': [{ type: 'turn', xDegrees: -45 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default levy;
