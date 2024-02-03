/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import {
  ChangeEvent,
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { CompactTable } from '@table-library/react-table-library/compact';
import Instructions, { DrawInstruction, Instruction, TurnInstruction } from '../../logic/InstructionTypes';
import SectionWrapper from '../utilities/SectionWrapper';

interface SymbolInterpretationControllerProps{
  instructions: Instructions
  setInstructions: Dispatch<SetStateAction<Instructions>>
}

interface InstructionNode{
  symbol: string,
  index: number,
  type: Instruction['type']
  params: (string | number)[],
}

interface CellRenderProps{
  node: InstructionNode,

  instructions: Instructions,

  setInstructions: Dispatch<SetStateAction<Instructions>>
}

const AngleSelectorCell = ({
  node, instructions, setInstructions, dimension,
}: CellRenderProps & {dimension: number}) => {
  const updateAngle = (newVal: string) => {
    const angle = parseFloat(newVal);
    const newInstructions = structuredClone(instructions);
    let property: 'xDegrees' | 'yDegrees' | 'zDegrees';
    switch (dimension) {
      case 0: property = 'xDegrees'; break;
      case 1: property = 'yDegrees'; break;
      case 2: property = 'zDegrees'; break;
      default: property = 'xDegrees'; break;
    }

    (newInstructions[node.symbol]![node.index] as TurnInstruction)[property] = angle;
    setInstructions(newInstructions);
  };

  return (
    <div>
      {['X', 'Y', 'Z'][dimension]}
      :
      <input
        value={node.params[dimension]}
        type="number"
        maxLength={6}
        style={{ width: '8ch' }}
        onChange={(e) => updateAngle(e.target.value)}
      />
      {' '}
      degrees
    </div>
  );
};

const ShapeSelectorCell = (props: CellRenderProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newShape = e.target.value as 'rectangle' | 'cylinder';
    const newInstructions = structuredClone(props.instructions);
    const instruction = newInstructions[props.node.symbol]![props.node.index] as DrawInstruction;

    instruction.shape = newShape;
    props.setInstructions(newInstructions);
  };

  return (
    <div>
      shape:
      <select value={props.node.params[0]} onChange={handleChange}>
        <option value="rectangle">rectangle</option>
        <option value="cylinder">cylinder</option>

      </select>
    </div>
  );
};

const SizeSelectorCell = ({
  node, instructions, setInstructions, dimension,
}: CellRenderProps & {dimension: number}) => {
  const thicknessLabel = node.params[0] === 'rectangle' ? 'thickness' : 'diameter';

  const updateDimension = (newVal: string) => {
    const angle = parseFloat(newVal);
    const newInstructions = structuredClone(instructions);
    let property: 'length' | 'thickness';
    switch (dimension) {
      case 1: property = 'length'; break;
      case 2: property = 'thickness'; break;
      default: throw new Error('Invalid dimension');
    }

    (newInstructions[node.symbol]![node.index] as DrawInstruction)[property] = angle;
    setInstructions(newInstructions);
  };

  return (
    <div>
      {dimension === 1 ? 'length' : thicknessLabel}
      :
      <input
        value={node.params[dimension]}
        type="number"
        maxLength={6}
        style={{ width: '8ch' }}
        step={0.25}
        min={0}
        onChange={(e) => updateDimension(e.target.value)}
      />

    </div>
  );
};

const ParameterRenderMethods = (props: CellRenderProps & {column: number}) => {
  if (props.node.type === 'turn') {
    return <AngleSelectorCell {...props} dimension={props.column} />;
  }
  if (props.node.type === 'draw') {
    switch (props.column) {
      case 0:
        return <ShapeSelectorCell {...props} />;
      case 1:
      case 2:
        return <SizeSelectorCell {...props} dimension={props.column} />;
      default:
        throw new Error('Somehow, an invalid column was passed into the instruction controller');
    }
  }

  return null;
};

const SymbolCell = ({ node, instructions, setInstructions }: CellRenderProps) => {
  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const newSymbol = e.target.value;
    if (newSymbol === node.symbol) { return; }

    const newInstructions = structuredClone(instructions);
    if (newInstructions[newSymbol] === undefined) { newInstructions[newSymbol] = []; }
    newInstructions[newSymbol]!.push(newInstructions[node.symbol]![node.index]);
    newInstructions[node.symbol]?.splice(node.index, 1);
    setInstructions(newInstructions);
  };

  return (
    <input
      value={node.symbol}
      style={{ width: '8ch' }}
      onChange={handleUpdate}
      maxLength={1}
    />
  );
};

const TypeCell = ({ node, instructions, setInstructions }: CellRenderProps) => {
  const handleUpdate = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === instructions[node.symbol]![node.index].type) { return; }
    const newInstructions = structuredClone(instructions);

    const newType = e.target.value as Instruction['type'];
    let newInstruction: Instruction = { type: 'push' };
    switch (newType) {
      case 'draw':
        newInstruction = {
          type: 'draw',
          shape: 'rectangle',
          length: 0.5,
          thickness: 0.25,
        };
        break;
      case 'turn':
        newInstruction = {
          type: 'turn',
          xDegrees: 0,
          yDegrees: 0,
          zDegrees: 0,
        };
        break;
      case 'push':
        newInstruction = {
          type: 'push',
        };
        break;
      case 'pop':
        newInstruction = {
          type: 'pop',
        };
        break;
      default:
    }

    newInstructions[node.symbol]![node.index] = newInstruction;
    setInstructions(newInstructions);
  };

  return (
    <select
      aria-label="Select type"
      value={node.type}
      onChange={handleUpdate}
    >
      <option value="turn">turn</option>
      <option value="draw">draw</option>
      <option value="push">push</option>
      <option value="pop">pop</option>
      <option value="changeColor">change color</option>
    </select>
  );
};

const RemoveCell = ({ node, instructions, setInstructions }: CellRenderProps) => (
  <button
    type="button"
    onClick={() => {
      const newInstructions = structuredClone(instructions);
        newInstructions[node.symbol]!.splice(node.index, 1);

        Object.keys(newInstructions).forEach((key) => {
          if (newInstructions[key]!.length === 0) {
            delete newInstructions[key];
          }
        });

        setInstructions(newInstructions);
    }}
    style={{ backgroundColor: 'salmon', color: 'white' }}
  >
    X
  </button>
);

const InstructionController = ({ instructions, setInstructions }: SymbolInterpretationControllerProps) => {
  const theme = useTheme(getTheme());

  const cellProps = { instructions, setInstructions };
  const columns = [
    { label: 'Symbol', renderCell: (node: InstructionNode) => SymbolCell({ node, ...cellProps }) },
    { label: 'Type', renderCell: (node: InstructionNode) => TypeCell({ node, ...cellProps }) },
    { label: 'Parameters', renderCell: (node: InstructionNode) => ParameterRenderMethods({ node, ...cellProps, column: 0 }) },
    { renderCell: (node: InstructionNode) => ParameterRenderMethods({ node, ...cellProps, column: 1 }) },
    { renderCell: (node: InstructionNode) => ParameterRenderMethods({ node, ...cellProps, column: 2 }) },
    { label: 'Remove', renderCell: (node: InstructionNode) => RemoveCell({ node, ...cellProps }) },
  ];

  const [rows, setRows] = useState([] as InstructionNode[]);

  useEffect(() => {
    setRows(Object.keys(instructions).flatMap((symbol) => (
      instructions[symbol]!.map((instruction, index) => {
        const node: InstructionNode = {
          symbol, index, type: instruction.type, params: [],
        };
        switch (instruction.type) {
          case 'push':
            break;
          case 'pop':
            break;
          case 'draw':
            node.params = [
              instruction.shape,
              instruction.length,
              instruction.thickness,
            ];
            break;
          case 'changeColor':
            break;
          case 'turn':
            node.params = [
              instruction.xDegrees ?? 0,
              instruction.yDegrees ?? 0,
              instruction.zDegrees ?? 0,
            ];
            break;
          default:
            throw new Error(`Error in instruction controller: '${instruction}' is not a valid instruction type`);
        }

        return node;
      })
    )));
  }, [instructions]);

  return (
    <SectionWrapper>
      <div style={{ overflowY: 'auto', height: '300px' }}>
        <h3 style={{ display: 'inline', padding: '5px' }}>Drawing Instructions:</h3>
        <CompactTable columns={columns} data={{ nodes: rows }} theme={theme} />
        <button
          type="button"
          onClick={() => {
            const newInstructions = structuredClone(instructions);
            const symbols = Object.keys(instructions);
            const lastSymbol = symbols[symbols.length - 1];
            if (lastSymbol !== undefined) {
            newInstructions[lastSymbol]!.push({ type: 'turn' });
            } else {
              newInstructions.A = [{ type: 'turn' }];
            }
            setInstructions(newInstructions);
          }}
          style={{ backgroundColor: 'darkgreen', color: 'white' }}
        >
          Add Row
        </button>
      </div>
    </SectionWrapper>
  );
};

export default InstructionController;
