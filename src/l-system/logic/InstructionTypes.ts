interface TurnInstruction{
  type: 'turn'
  xDegrees?: number;
  yDegrees?: number;
  zDegrees?: number;
}

interface DrawInstruction{
  type: 'draw'
  shape: 'rectangle' | 'cylinder'
  thickness: number,
  length: number,
}

interface ChangeColorInstruction{
  type: 'changeColor',
  r: number,
  g: number,
  b: number
}

interface UnparameterizedInstruction{
  type: 'push' | 'pop'
}

type Instruction =
  TurnInstruction
  | DrawInstruction
  | ChangeColorInstruction
  | UnparameterizedInstruction

interface Instructions{
  [symbol: string]: Instruction[] | undefined;
}

export type { Instruction, DrawInstruction, TurnInstruction };
export default Instructions;
