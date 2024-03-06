import { isSolvable } from '../utils/helpers';

describe('15puzzle/helpers', () => {
  describe('isSolvable', () => {
    it('should return true for solvable grid', () => {
      expect(isSolvable([1, 2, 3, 4, 5, 6, 7, 8])).toBe(true);
    });

    it('should return false for unsolvable grid', () => {
      expect(isSolvable([1, 2, 3, 4, 5, 6, 8, 7])).toBe(false);
      expect(isSolvable([8, 1, 12, 3, 9, 14, 7, 2, 15, 4, 10, 5, 13, 11, 6])).toBe(false);
    });

    it('should return false for unsolvable grid', () => {
      expect(isSolvable([8, 1, 12, 3, 9, 14, 7, 2, 15, 4, 10, 5, 13, 6, 11])).toBe(true);
    });
  });
});
