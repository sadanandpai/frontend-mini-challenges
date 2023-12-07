import { useEffect, useRef } from 'react';

import styles from '../styles.module.css';

interface Props {
  tile: { symbol: string; isOpen: boolean };
  onTileClick: (idx: number) => void;
  idx: number;
}

function Tile({ tile, onTileClick, idx }: Props) {
  const frontFaceRef = useRef<HTMLDivElement>(null);
  const backFaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (frontFaceRef.current && backFaceRef.current) {
      if (tile.isOpen) {
        frontFaceRef.current.style.transform = 'rotateY(180deg)';
        backFaceRef.current.style.transform = 'rotateY(0deg)';
      } else {
        frontFaceRef.current.style.transform = 'rotateY(0deg)';
        backFaceRef.current.style.transform = 'rotateY(180deg)';
      }
    }
  }, [tile.isOpen]);

  return (
    <div
      className={styles.tile}
      onClick={() => {
        onTileClick(idx);
      }}
    >
      <div className={styles.frontface + ' ' + styles.tile} ref={frontFaceRef}></div>
      <div className={styles.backface + ' ' + styles.tile} ref={backFaceRef}>
        {tile.symbol}
      </div>
    </div>
  );
}

export default Tile;
