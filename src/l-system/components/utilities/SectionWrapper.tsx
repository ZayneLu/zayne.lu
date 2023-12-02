import { ReactNode } from 'react';

interface SectionWrapperProps{
  children: ReactNode
}

function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div style={{
      border: '1px solid black', padding: '10px', margin: '10px', textAlign: 'left',
    }}
    >
      {children}
    </div>
  );
}

export default SectionWrapper;
