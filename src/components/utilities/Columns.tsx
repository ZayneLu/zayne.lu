import { ReactNode } from 'react';

interface ColumnsProps{
  children: ReactNode
}

function Columns({ children }: ColumnsProps) {
  return (
    <div style={{ display: 'flex' }}>
      {children}
    </div>
  );
}

export default Columns;
