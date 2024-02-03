import { Vector3 } from 'three';
import Configuration from '../ConfigurationTypes';

const htree: Configuration = {
  name: 'H-tree',
  axiom: '[<0]>0',
  productions: {
    0: [{ successor: '1[<0]>0', weight: 1 }],
    1: [{ successor: '11', weight: 1 }],
  },
  instructions: {
    0: [{
      type: 'draw', shape: 'rectangle', length: Math.sqrt(2), thickness: 0.25,
    }],
    1: [{
      type: 'draw', shape: 'rectangle', length: Math.sqrt(2), thickness: 0.25,
    }],
    '[': [{ type: 'push' }],
    ']': [{ type: 'pop' }],
    '<': [{ type: 'turn', xDegrees: 90 }],
    '>': [{ type: 'turn', xDegrees: -90 }],
  },
  cameraPosition: new Vector3(0, 0, 5),
};

export default htree;
