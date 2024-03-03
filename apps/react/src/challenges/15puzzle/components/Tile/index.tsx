import { AnimationDirection } from '@/challenges/15puzzle/utils/models';
import styles from './tile.module.css';

export default function Tile({
  digit,
  onClick,
  isOnCorrectPoz,
  animDirection,
}: {
  digit: number;
  onClick: () => void;
  isOnCorrectPoz: boolean;
  animDirection?: AnimationDirection | '';
}) {
  return (
    <div
      className={`${styles.tile} ${digit === 0 ? styles.empty : ''} ${isOnCorrectPoz ? styles.correctTilePoz : ''} ${animDirection ? styles[`move${animDirection}`] : ''}`}
      key={digit}
      onClick={onClick}
    >
      {!!digit && digit}
    </div>
  );
}
