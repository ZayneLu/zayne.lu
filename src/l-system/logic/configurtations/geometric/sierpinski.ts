import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 11
const sierpinski: Configuration = {
  name: 'Sierpiński triangle',
  axiom: 'R',
  productions: {
    L: [{ successor: 'R+L+R', weight: 1 }],
    R: [{ successor: 'L-R-L', weight: 1 }],
  },
  instructions: {
    L: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    R: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    '+': [{ type: 'turn', xDegrees: 60 }],
    '-': [{ type: 'turn', xDegrees: -60 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default sierpinski;
