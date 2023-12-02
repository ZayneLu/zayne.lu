import { Dispatch, SetStateAction } from 'react';

import SectionWrapper from '../utilities/SectionWrapper';

interface AxiomControllerProps{
  axiom: string
  setAxiom: Dispatch<SetStateAction<string>>

}

const cellStyle = {
  border: '1px solid lightgrey',
  fontSize: '1rem',
  margin: 0,
  padding: '5px',
  width: '20ch',
};

function AxiomController({ axiom, setAxiom }: AxiomControllerProps) {
  return (
    <SectionWrapper>
      <div>
        <h3 style={{ display: 'inline', padding: '5px' }}>Axiom:</h3>
        <input
          type="text"
          style={cellStyle}
          value={axiom}
          onChange={(e) => setAxiom(e.target.value)}
        />
      </div>

    </SectionWrapper>
  );
}

export default AxiomController;
