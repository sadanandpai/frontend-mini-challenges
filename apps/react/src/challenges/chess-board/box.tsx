import classes from './chess-board.module.scss';

interface Props {
  row: number;
  col: number;
  selectedTile: { row: number; col: number } | null;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Box({ row, col, selectedTile, onClick }: Props) {
  let className = classes.box;
  if (selectedTile) {
    if (
      row - col === selectedTile.row - selectedTile.col ||
      row + col === selectedTile.row + selectedTile.col
    ) {
      className += ' ' + classes.selected;
    }
    if (row === selectedTile.row && col === selectedTile.col) {
      className += ' ' + classes.clicked;
    }
  }

  return <button key={col} className={className} data-row={row} data-col={col} onClick={onClick} />;
}
