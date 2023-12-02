import { Vector3 } from 'three';
import Configuration from './ConfigurationTypes';

// Lindenmayer/Prusinkiewicz, pg. 11
// Przemyslaw Prusinkiewicz and James Hanan, pp. 17
const dragon: Configuration = {
  name: 'blank',
  axiom: '',
  productions: {},
  instructions: {},
  cameraPosition: new Vector3(0, 0, 5),
};

export default dragon;
