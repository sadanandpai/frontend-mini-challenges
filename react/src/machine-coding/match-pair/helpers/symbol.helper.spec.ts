import { getRandomSymbols, shuffleArrayRandomly } from './symbol.helper';

import { getShuffledSymbols } from './symbol.helper';

describe('getSymbols', () => {
  it('should return symbols', () => {
    let n = 2;
    let symbols = getRandomSymbols(n, true);
    expect(symbols).toHaveLength(n);

    n = 8;
    symbols = getRandomSymbols(n);
    expect(symbols).toHaveLength(n);

    n = 18;
    symbols = getRandomSymbols(n);
    expect(symbols).toHaveLength(n);
  });

  it('should return unique symbols', () => {
    const n = 18;
    for (let i = 0; i < 10; i++) {
      const symbols = getRandomSymbols(n, true);
      const set = new Set(symbols);
      expect(set.size).toEqual(n);
    }
  });

  it('should shuffle the symbols', () => {
    const n = 18;
    const symbols = getRandomSymbols(n, true);
    const doubleSymbols = symbols.concat(symbols);
    const shuffledSymbols = shuffleArrayRandomly([...doubleSymbols]);

    expect(shuffledSymbols).toHaveLength(doubleSymbols.length);
    const isSame = doubleSymbols.every((symbol, idx) => symbol === shuffledSymbols[idx]);
    expect(isSame).toBeFalsy();

    // check if all symbols repeat twice
    const map = new Map();
    doubleSymbols.forEach(symbol => map.set(symbol, (map.get(symbol) ?? 0) + 1));
    expect(map).toHaveLength(n);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_, value] of map.entries()) {
      expect(value).toEqual(2);
    }
  });

  it('should return shuffled symbols', () => {
    const n = 18;
    const symbols = getShuffledSymbols(n, true);
    expect(symbols).toHaveLength(n * 2);

    // check if all symbols repeat twice
    const map = new Map();
    symbols.forEach(symbol => map.set(symbol, (map.get(symbol) ?? 0) + 1));
    expect(map).toHaveLength(n);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [_, value] of map.entries()) {
      expect(value).toEqual(2);
    }
  });
});
