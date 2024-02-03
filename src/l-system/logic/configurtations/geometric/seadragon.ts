import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

const seadragon: Configuration = {
  name: 'dragon, spiralized',
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
    '-': [{ type: 'turn', xDegrees: 90, zDegrees: 0.5 }],
    '+': [{ type: 'turn', xDegrees: -90, zDegrees: 0.5 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default seadragon;
