import {
  ChangeEvent,
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { Productions } from '../../logic/LSystem';
import SectionWrapper from '../utilities/SectionWrapper';

interface ProductionsControllerProps{
  productions: Productions
  setProductions: Dispatch<SetStateAction<Productions>>
}

interface ProductionNode{
  symbol: string,
  index: number,
  successor: string,
  weight: number,
}

interface CellRenderProps{
  node: ProductionNode,
  productions: Productions,
  setProductions: Dispatch<SetStateAction<Productions>>
}

const SuccessorCell = ({ node, productions, setProductions }: CellRenderProps) => {
  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === productions[node.symbol]![node.index].successor) { return; }
    const newProductions = structuredClone(productions);
    newProductions[node.symbol]![node.index].successor = e.target.value;
    setProductions(newProductions);
  };

  return (
    <input
      value={node.successor}
      onChange={handleUpdate}
      style={{ width: '12ch' }}
      maxLength={20}
    />
  );
};

const SymbolCell = ({ node, productions, setProductions }: CellRenderProps) => {
  const handleUpdate = (newSymbol: string) => {
    if (newSymbol === node.symbol) { return; }

    const newProductions = structuredClone(productions);
    if (newProductions[newSymbol] === undefined) { newProductions[newSymbol] = []; }
    newProductions[newSymbol]!.push({ successor: node.successor, weight: node.weight });
    newProductions[node.symbol]?.splice(node.index, 1);
    setProductions(newProductions);
  };

  return (
    <input
      value={node.symbol}
      onChange={(e) => handleUpdate(e.target.value)}
      style={{ width: '8ch' }}
      maxLength={1}
    />
  );
};

const WeightCell = ({ node, productions, setProductions }: CellRenderProps) => {
  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === productions[node.symbol]![node.index].weight.toString()) {
      return;
    }

    const newProductions = structuredClone(productions);
    newProductions[node.symbol]![node.index].weight = parseFloat(e.target.value);
    setProductions(newProductions);
  };

  return (
    <input
      type="number"
      min="0"
      style={{ width: '8ch' }}
      defaultValue={node.weight}
      onChange={handleUpdate}
    />
  );
};

const RemoveCell = ({ node, productions, setProductions }: CellRenderProps) => (
  <button
    type="button"
    onClick={() => {
      const newProductions = structuredClone(productions);
      newProductions[node.symbol]!.splice(node.index, 1);

      Object.keys(newProductions).forEach((key) => {
        if (newProductions[key]!.length === 0) {
          delete newProductions[key];
        }
      });

      setProductions(newProductions);
    }}
    style={{ backgroundColor: 'salmon', color: 'white' }}
  >
    X
  </button>
);

const ProductionsController = ({ productions, setProductions }: ProductionsControllerProps) => {
  const theme = useTheme(getTheme());

  const cellProps = { productions, setProductions };

  const columns = [
    { label: 'Symbol', renderCell: (node: ProductionNode) => SymbolCell({ node, ...cellProps }) },
    { label: 'Successor', renderCell: (node: ProductionNode) => SuccessorCell({ node, ...cellProps }), resize: true },
    { label: 'Weight', renderCell: (node: ProductionNode) => WeightCell({ node, ...cellProps }), resize: true },
    { label: 'Remove', renderCell: (node: ProductionNode) => RemoveCell({ node, ...cellProps }), resize: true },
  ];

  const [rows, setRows] = useState([] as ProductionNode[]);

  useEffect(() => {
    setRows(Object.keys(productions).flatMap((symbol) => (
    productions[symbol]!.map((production, index) => ({
      symbol,
      index,
      successor: production.successor,
      weight: production.weight,
    }))
    )));
  }, [productions]);

  return (
    <SectionWrapper>
      <div style={{ overflowY: 'auto', height: '300px' }}>
        <h3 style={{ display: 'inline', padding: '5px' }}>Production Rules:</h3>
        <CompactTable columns={columns} data={{ nodes: rows }} theme={theme} />
        <button
          type="button"
          onClick={() => {
            const newProductions = structuredClone(productions);
            const symbols = Object.keys(productions);
            const lastSymbol = symbols[symbols.length - 1];
            if (lastSymbol !== undefined) {
            newProductions[lastSymbol]!.push({ successor: lastSymbol, weight: 1 });
            } else {
              newProductions.A = [{ successor: 'A', weight: 1 }];
            }
            setProductions(newProductions);
          }}
          style={{ backgroundColor: 'darkgreen', color: 'white' }}
        >
          Add Row
        </button>
      </div>
    </SectionWrapper>
  );
};

export default ProductionsController;
