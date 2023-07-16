export const size = 3;

export const winningCombos = [
  ...Array.from(new Array(size), (_, i) => Array.from(new Array(size), (_, j) => i * size + j)),
  ...Array.from(new Array(size), (_, i) => Array.from(new Array(size), (_, j) => j * size + i)),
  Array.from(new Array(size), (_, i) => i * size + i),
  Array.from(new Array(size), (_, i) => i * size + size - i - 1),
];

export const initialArray = Array(size * size).fill(null);
