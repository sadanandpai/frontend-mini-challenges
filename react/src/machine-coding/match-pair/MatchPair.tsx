import { useEffect, useRef, useState } from 'react';

import Grid from './components/Grid';
import { getShuffledSymbols } from './helpers/symbol.helper';
import styles from './styles.module.css';

const getTiles = (size: number) =>
  getShuffledSymbols((size * size) / 2, true).map((symbol) => ({ symbol, isOpen: false }));

function MatchPair() {
  const size = 4;
  const [tiles, setTiles] = useState(() => getTiles(size));
  const [isOver, setIsOver] = useState(false);
  const [openTiles, setOpenTiles] = useState<number[]>([]);
  const timerId = useRef<any>();
  const attempts = useRef<number>(0);
  const matches = useRef<number>(0);
  const isResetting = useRef(false);

  const resetGrid = () => {
    timerId.current = null;
    attempts.current = 0;
    matches.current = 0;

    isResetting.current = true;
    setTiles((tiles) => tiles.map((t) => ({ symbol: t.symbol, isOpen: false })));
    setTimeout(() => {
      setTiles(getTiles(size));
      isResetting.current = false;
    }, 500);
  };

  const closePreviousTiles = () => {
    if (openTiles.length < 2) {
      return;
    }

    const [idx0, idx1] = openTiles;
    setTiles((tiles) => {
      const newTiles = [...tiles];
      newTiles[idx0] = { symbol: tiles[idx0].symbol, isOpen: false };
      newTiles[idx1] = { symbol: tiles[idx1].symbol, isOpen: false };
      setOpenTiles(openTiles.slice(2));
      return newTiles;
    });
  };

  const onTileClick = (idx: number) => {
    // If tile is already open
    if (tiles[idx].isOpen || isResetting.current) {
      return;
    }

    attempts.current++;
    setOpenTiles([...openTiles, idx]);
    setTiles((tiles) => {
      const newTiles = [...tiles];
      newTiles[idx] = { ...newTiles[idx], isOpen: true };
      return newTiles;
    });
  };

  useEffect(() => {
    // If previous tiles are matching close them
    if (openTiles.length === 2) {
      if (tiles[openTiles[0]].symbol === tiles[openTiles[1]].symbol) {
        setOpenTiles([]);
        matches.current += 2;
      } else {
        timerId.current = setTimeout(() => {
          closePreviousTiles();
        }, 3000);
      }
    }

    if (openTiles.length === 3) {
      clearTimeout(timerId.current);
      closePreviousTiles();
    }
  }, [tiles]);

  return (
    <div className={styles.layout}>
      <Grid size={size} tiles={tiles} onTileClick={onTileClick} />
      <div>
        <button className={styles.button} onClick={resetGrid}>
          Reset
        </button>
      </div>
      <output>
        <p>Attempts : {attempts.current}</p>
        <p>{matches.current === size * size && 'Congratulations'}</p>
      </output>
    </div>
  );
}

export default MatchPair;
