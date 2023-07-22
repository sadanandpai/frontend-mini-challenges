const symbols = [
  '🍇',
  '🍉',
  '🚗',
  '🍌',
  '🏠',
  '🥭',
  '🍎',
  '🐯',
  '🍒',
  '🍓',
  '🐵',
  '🥝',
  '🍿',
  '🏀',
  '🎱',
  '🐻',
  '🍜',
  '🍢',
  '🎓',
  '🍤',
  '🦀',
  '🍦',
  '🍩',
  '🎂',
  '🍫',
  '🍭',
  '🍼',
  '🪔',
  '🍺',
  '🐱',
  '🐶',
];

export const getRandomSymbols = (n = 8, shouldBeUnique = false) => {
  const mySymbols: string[] = [];
  const set = new Set<number>();

  for (let i = 0; i < n; ) {
    const randomPos = Math.floor(Math.random() * symbols.length);
    if (shouldBeUnique && set.has(randomPos)) {
      continue;
    }

    mySymbols.push(symbols[randomPos]);
    set.add(randomPos);
    i++;
  }

  return mySymbols;
};

export const shuffleArrayRandomly = <T>(items: Array<T>) => {
  const n = items.length;
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * (n - i));

    // swap values
    const temp = items[n - i - 1];
    items[n - i - 1] = items[idx];
    items[idx] = temp;
  }

  return items;
};

export const getShuffledSymbols = (n: number, shouldBeUnique = false) => {
  const symbols = getRandomSymbols(n, shouldBeUnique);
  const doubleSymbols = symbols.concat(symbols);
  return shuffleArrayRandomly(doubleSymbols);
};
