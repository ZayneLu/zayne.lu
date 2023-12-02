import { Token } from '../logic/LSystem';
import SectionWrapper from './utilities/SectionWrapper';
import * as LSystem from '../logic/LSystem';

interface StateDisplayProps{
  systemState: Token[]
}

function StateDisplay({ systemState }: StateDisplayProps) {
  return (
    <SectionWrapper>
      <div style={{
        overflowX: 'auto', textAlign: 'left',
      }}
      >
        <h3 style={{ display: 'inline', padding: '5px', whiteSpace: 'nowrap' }}>System State:</h3>
        <span style={{
          fontFamily: 'monospace', overflowX: 'auto', whiteSpace: 'nowrap', fontSize: '20pt',
        }}
        >
          {LSystem.toString(systemState)}
        </span>
      </div>
    </SectionWrapper>
  );
}

export default StateDisplay;
