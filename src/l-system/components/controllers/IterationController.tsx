import React, { useState } from 'react';
import * as LSystem from '../../logic/LSystem';
import SectionWrapper from '../utilities/SectionWrapper';
import Instructions from '../../logic/InstructionTypes';

interface ControlsProps{
  systemState: LSystem.Token[]
  setSystemState: React.Dispatch<React.SetStateAction<LSystem.Token[]>>
  productions: LSystem.Productions
  instructions: Instructions
  axiom: string
}

const IterationController = ({
  systemState, setSystemState, productions, axiom, instructions,
}: ControlsProps) => {
  const [isGrowEnabled, setIsGrowEnabled] = useState(false);
  const [duration, setDuration] = useState(3);
  const [desiredFps, setDesiredFps] = useState(30);
  const [numIterations, setNumIterations] = useState(1);
  const [growFromFinalIteration, setGrowFromFinalIteration] = useState(false);

  const handleGrow = () => {
    let newState = LSystem.iterate(systemState, productions, instructions);

    if (!isGrowEnabled) {
      setSystemState(LSystem.age(newState, 1));
      return;
    }

    if (growFromFinalIteration) {
      for (let i = 0; i < numIterations - 1; i += 1) {
        newState = LSystem.iterate(newState, productions, instructions);
      }
    }

    const numFrames = desiredFps * duration;

    for (let i = 0; i < numFrames; i += 1) {
      if (
        !growFromFinalIteration
        && i !== 0
        && (i % Math.floor(numFrames / numIterations) === 0)
      ) {
        newState = LSystem.age(newState, 1);
        newState = LSystem.iterate(newState, productions, instructions);
        const stateAtPoint = structuredClone(newState);
        setTimeout(() => {
          setSystemState(stateAtPoint);
        }, (duration / numFrames) * (i) * 1000);
      } else {
        let ageAmount = 1 / (numFrames - 1);
        if (!growFromFinalIteration) {
          ageAmount *= numIterations;
        }
        newState = LSystem.age(newState, ageAmount);
        const stateAtPoint = structuredClone(newState);
        setTimeout(() => setSystemState(stateAtPoint), (duration / numFrames) * (i) * 1000);
      }
    }
    newState = LSystem.age(newState, 1);
    const stateAtPoint = structuredClone(newState);
    setTimeout(() => setSystemState(stateAtPoint), duration * 1000);
  };

  return (
    <SectionWrapper>
      <h3 style={{ display: 'inline', padding: '5px' }}>Update:</h3>
      <div>
        <button
          type="button"
          onClick={handleGrow}
          style={{ margin: '5px' }}
        >
          {isGrowEnabled ? 'grow' : 'iterate'}
        </button>
        <button
          type="button"
          style={{ margin: '5px' }}
          onClick={() => setSystemState(LSystem.stringToLSystemTokenList(axiom, 1))}
        >
          reset
        </button>
      </div>
      <div>
        grow:
        <input
          type="checkbox"
          checked={isGrowEnabled}
          onChange={(e) => setIsGrowEnabled(e.target.checked)}
        />
      </div>
      <div>
        duration (s):
        <input
          type="number"
          value={duration}
          min={0}
          max={1000}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
          disabled={!isGrowEnabled}
        />
      </div>
      <div>
        desired fps:
        <input
          type="number"
          value={desiredFps}
          min={1}
          max={300}
          onChange={(e) => setDesiredFps(parseFloat(e.target.value))}
          disabled={!isGrowEnabled}
        />
      </div>
      <div>
        number of iterations:
        <input
          type="number"
          value={numIterations}
          max={30}
          min={1}
          step={1}
          onChange={(e) => setNumIterations(parseFloat(e.target.value))}
          disabled={!isGrowEnabled}
        />
      </div>
      <div>
        grow from final iteration:
        <input
          type="checkbox"
          checked={growFromFinalIteration}
          onChange={(e) => setGrowFromFinalIteration(e.target.checked)}
          disabled={!isGrowEnabled}
        />
      </div>
    </SectionWrapper>
  );
};
export default IterationController;
