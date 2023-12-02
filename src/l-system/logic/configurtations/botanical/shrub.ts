import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

const shrub: Configuration = {
  name: 'shrub',
  axiom: '1[<0]>0',
  productions: {
    0: [{ successor: '1[<0]>0', weight: 1 }, { successor: '1[u0]n0', weight: 1 }],
    1: [{ successor: '21', weight: 8 }, { successor: '1[u0]1', weight: 1 }, { successor: '1[n0]1', weight: 1 }],
  },
  instructions: {
    0: [{
      type: 'draw', shape: 'rectangle', length: 1.25, thickness: 0.5,
    }],
    1: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    2: [{
      type: 'draw', shape: 'rectangle', length: 0.5, thickness: 0.25,
    }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
    '<': [{ type: 'turn', xDegrees: 30 }],
    '>': [{ type: 'turn', xDegrees: -30 }],
    u: [{ type: 'turn', zDegrees: 30 }],
    n: [{ type: 'turn', zDegrees: -30 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default shrub;
