import Tile from './Tile';
import styles from '../styles.module.css';

interface Props {
  size: number;
  tiles: { symbol: string; isOpen: boolean }[];
  onTileClick: (idx: number) => void;
}

function Grid({ size, tiles, onTileClick }: Props) {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateRows: `repeat(${size}, min(${80 / size}vmin, 6rem))`,
        gridTemplateColumns: `repeat(${size}, min(${80 / size}vmin, 6rem))`,
        gap: `${10 / size}vmin`,
      }}
    >
      {tiles.map((tile, idx) => (
        <Tile key={idx} tile={tile} onTileClick={onTileClick} idx={idx} />
      ))}
    </div>
  );
}

export default Grid;
