import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 11
// Przemyslaw Prusinkiewicz and James Hanan, pp. 17
const dragon: Configuration = {
  name: 'dragon curve',
  axiom: 'L',
  productions: {
    L: [{ successor: 'L+R+', weight: 1 }],
    R: [{ successor: '-L-R', weight: 1 }],
  },
  instructions: {
    L: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    R: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    '-': [{ type: 'turn', xDegrees: 90 }],
    '+': [{ type: 'turn', xDegrees: -90 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default dragon;
