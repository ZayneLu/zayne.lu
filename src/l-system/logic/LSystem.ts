/* eslint-disable no-plusplus */

import Instructions from './InstructionTypes';

interface Production{
  weight: number;
  successor: string;
}

interface Productions{
  [predecessor: string]: Production[] | undefined
}

interface Token{
  symbol: string,
  age: number,
}

// Randomly choose a production rule, according to their weights
const chooseProduction = (
  productions: Production[],
  instructions: Instructions,
  age: number,
): Token[] => {
  const cumulativeWeight = productions.reduce((sum, production) => sum + production.weight, 0);

  const random = Math.random() * cumulativeWeight;
  let i = 0;
  let sum = 0;
  for (; i < productions.length; i++) {
    sum += productions[i].weight;
    if (sum > random) break;
  }

  const chosenProduction = productions[i];

  const tokenStrings = chosenProduction.successor.split('');

  const tokenLengths: number[] = [];
  tokenStrings.forEach((token, index) => {
    tokenLengths[index] = 0;
    instructions[token]?.forEach((instruction) => {
      switch (instruction.type) {
        case 'draw':
          tokenLengths[index] += instruction.length;
          break;
        case 'turn':
          break;
        default:
      }
    });
  });

  const cumulativeLength = Object.values(tokenLengths).reduce((total, val) => total + val, 0);

  return tokenStrings.map((tokenString, index) => ({
    symbol: tokenString,
    age: ((tokenLengths[index] ?? 0) / cumulativeLength) * age,
  }));
};

const stringToLSystemTokenList = (tokens: string, startAge?: number): Token[] => (
  tokens.split('').map((token) => ({ symbol: token, age: startAge ?? 0 }))
);

const toString = (tokens: Token[]): string => tokens.map((token) => token.symbol).join('');

// takes state, applies productions to it, and returns result
const iterate = (
  state: Token[],
  productions: Productions,
  instructions: Instructions,
): Token[] => state.flatMap((token) => {
  const prods = productions[token.symbol];
  return (prods && prods.length > 0)
    ? chooseProduction(prods!, instructions, token.age)
    : [token];
}, []);

const age = (state: Token[], delta: number) => state.map(
  (token) => ({ symbol: token.symbol, age: Math.min(token.age + delta, 1) }),
);

export type { Productions, Token };
export {
  stringToLSystemTokenList, toString, iterate, age,
};
