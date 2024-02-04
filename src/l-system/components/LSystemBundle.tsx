import { useState } from 'react';
import * as LSystem from '../logic/LSystem';
import RendererFrame from './RendererFrame';
import ProductionsController from './controllers/ProductionsController';
import StateDisplay from './StateDisplay';
import IterationController from './controllers/IterationController';
import InstructionController from './controllers/InstructionController';
import AxiomController from './controllers/AxiomController';
import Columns from './utilities/Columns';
import CameraController from './controllers/CameraController';
import configurations from '../logic/configurtations/configurations';
import ConfigController from './controllers/ConfigController';
import '../lsystem.css';

const LSystemBundle = () => {
  const defaultConfig = configurations.blank;

  const [axiom, setAxiom] = useState(defaultConfig.axiom);
  const [productions, setProductions] = useState(defaultConfig.productions);
  const [instructions, setInstructions] = useState(defaultConfig.instructions);
  const [cameraPosition, setCameraPosition] = useState(defaultConfig.cameraPosition);
  const [systemState, setSystemState] = useState(
    LSystem.stringToLSystemTokenList(defaultConfig.axiom, 1),
  );

  document.querySelector('body')?.setAttribute('style', 'background-color: #1c3242;');
  return (
    <main style={{ all: 'initial', fontSize: '.8rem' }}>
      <section>
        <Columns>
          <ConfigController
            {...{
              setAxiom, setProductions, setInstructions, setCameraPosition, setSystemState,
            }}
          />
          <AxiomController axiom={axiom} setAxiom={setAxiom} />
          <IterationController
            {...{
              productions, axiom, systemState, setSystemState, instructions,
            }}
          />
          <ProductionsController productions={productions} setProductions={setProductions} />
          <InstructionController instructions={instructions} setInstructions={setInstructions} />
        </Columns>

        <StateDisplay systemState={systemState} />
        <RendererFrame state={systemState} instructions={instructions} position={cameraPosition} />
        <CameraController position={cameraPosition} setPosition={setCameraPosition} />
      </section>
    </main>
  );
};

export default LSystemBundle;
