import Board from '@/challenges/15puzzle/components/Board';

export default function FifteenPuzzle() {
  return (
    <div>
      <div>
        <p style={{ textAlign: 'center' }}>Click on the box to move it and sort row-wise</p>
      </div>
      <Board />
    </div>
  );
}
