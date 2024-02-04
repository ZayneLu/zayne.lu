import { ReactNode } from 'react';

interface ColumnsProps{
  children: ReactNode
}

const Columns = ({ children }: ColumnsProps) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center' }}>
    {children}
  </div>
);

export default Columns;
