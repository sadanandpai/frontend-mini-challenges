
export const colorTile = (n: number): boolean => {
  /**
   * shorthand 
   * return (n % 2 ^ ((n / 8) % 2 < 1) ? true : false;
   */
  const isEvenRow = Math.floor(n / 8) % 2 === 0;
  const isEvenTile = n % 2 === 0;

  return (isEvenRow && isEvenTile) || (!isEvenRow && !isEvenTile)
    ? true
    : false;
} 