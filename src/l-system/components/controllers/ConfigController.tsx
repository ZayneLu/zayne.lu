import { Dispatch, SetStateAction } from 'react';
import { Vector3 } from 'three';
import configurations from '../../logic/configurtations/configurations';
import { Productions, Token } from '../../logic/LSystem';
import Instructions from '../../logic/InstructionTypes';
import * as LSystem from '../../logic/LSystem';
import SectionWrapper from '../utilities/SectionWrapper';

interface ConfigControllerProps{
  setAxiom: Dispatch<SetStateAction<string>>;
  setProductions: Dispatch<SetStateAction<Productions>>;
  setInstructions: Dispatch<SetStateAction<Instructions>>;
  setCameraPosition: Dispatch<SetStateAction<Vector3>>;
  setSystemState: Dispatch<SetStateAction<Token[]>>
}

const ConfigController = ({
  setAxiom, setCameraPosition, setInstructions, setProductions, setSystemState,
}: ConfigControllerProps) => {
  const configs = {
    botanical: {
      shrub: configurations.shrub,
      weed1: configurations.weed1,
      weed2: configurations.weed2,
      weed3: configurations.weed3,
      weed4: configurations.weed4,
      weed5: configurations.weed5,
      weed6: configurations.weed6,
    },
    geometric: {
      binarytree: configurations.binarytree,
      dragon: configurations.dragon,
      seadragon: configurations.seadragon,
      fractalcanopy: configurations.fractalcanopy,
      hilbert: configurations.hilbert,
      htree: configurations.htree,
      sierpinski: configurations.sierpinski,
      levy: configurations.levy,
      kochcurve: configurations.kochcurve,
      kochsnowflake: configurations.kochsnowflake,
      cesaro: configurations.cesaro,
      squaredance: configurations.squaredance,
    },
  };

  return (
    <SectionWrapper>
      <h3 style={{ display: 'inline', padding: '5px' }}>Preset:</h3>
      <select
        aria-label="Select type"
        onChange={(e) => {
          const config = configurations[e.target.value as keyof typeof configurations];
          setAxiom(config.axiom);
          setCameraPosition(structuredClone(config.cameraPosition));
          setInstructions(structuredClone(config.instructions));
          setProductions(structuredClone(config.productions));
          setSystemState(LSystem.stringToLSystemTokenList(structuredClone(config.axiom), 1));
        }}
      >
        <option value="blank" key="blank"> blank </option>
        {Object.keys(configs).map((category) => (
          <optgroup label={category} key={category}>
            {Object.keys(configs[category as keyof typeof configs]).map((config) => (
              <option value={config} key={config}>
                {configurations[config as keyof typeof configurations].name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </SectionWrapper>
  );
};

export default ConfigController;
