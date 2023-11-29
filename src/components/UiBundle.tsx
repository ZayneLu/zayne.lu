/* eslint-disable quote-props */
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

function UiBundle() {
  const defaultConfig = configurations.blank;

  const [axiom, setAxiom] = useState(defaultConfig.axiom);
  const [productions, setProductions] = useState(defaultConfig.productions);
  const [instructions, setInstructions] = useState(defaultConfig.instructions);
  const [cameraPosition, setCameraPosition] = useState(defaultConfig.cameraPosition);
  const [systemState, setSystemState] = useState(
    LSystem.stringToLSystemTokenList(defaultConfig.axiom, 1),
  );

  // console.log({
  //   axiom, productions, instructions, systemState, cameraPosition,
  // });

  return (
    <>
      <Columns>
        <div>
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
        </div>
        <ProductionsController productions={productions} setProductions={setProductions} />
      </Columns>
      <InstructionController instructions={instructions} setInstructions={setInstructions} />
      <StateDisplay systemState={systemState} />
      <RendererFrame state={systemState} instructions={instructions} position={cameraPosition} />
      <CameraController position={cameraPosition} setPosition={setCameraPosition} />
    </>
  );
}

export default UiBundle;
