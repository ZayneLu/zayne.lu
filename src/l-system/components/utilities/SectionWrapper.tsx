import { ReactNode } from 'react';

interface SectionWrapperProps{
  children: ReactNode
}

const SectionWrapper = ({ children }: SectionWrapperProps) => (
  <div style={{
    border: '1px solid gray',
    backgroundColor: 'white',
    padding: '10px',
    margin: '10px',
    textAlign: 'left',
    borderRadius: '4px',
  }}
  >
    {children}
  </div>
);

export default SectionWrapper;
