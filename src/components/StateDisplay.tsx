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
        width: '1200px', overflowX: 'auto', textAlign: 'left',
      }}
      >
        <h3 style={{ display: 'inline', padding: '5px' }}>System State:</h3>
        <span style={{ fontFamily: 'monospace', overflowX: 'auto', whiteSpace: 'nowrap' }}>
          {LSystem.toString(systemState)}
        </span>
      </div>
    </SectionWrapper>
  );
}

export default StateDisplay;
