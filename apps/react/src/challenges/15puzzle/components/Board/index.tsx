import { useEffect, useState } from 'react';
import {
  Animation,
  AnimationDirection,
  Poz,
  PrevMoves,
  possibleMoves,
} from '@/challenges/15puzzle/utils/models';
import Tile from '@/challenges/15puzzle/components/Tile';
import styles from './board.module.css';
import { generateNewGrid } from '../../utils/helpers';

export default function Board() {
  const [grid, setGrid] = useState<number[][]>([]);
  const [totalMoves, setTotalMoves] = useState(0);
  const [isGridSorted, setIsGridSorted] = useState(false);
  const [prevMoves, setPrevMoves] = useState<PrevMoves>({ moves: [], capacity: 5 });
  const [animation, setAnimation] = useState<Animation>({ element: null, type: '' });

  const addPrevMove = (move: Poz) => {
    const { moves, capacity } = prevMoves;
    if (moves.length === capacity) moves.shift();
    moves.push(move);
  };

  const swap = (from: Poz, to: Poz) => {
    const tempGrid = grid.map((row) => [...row]);

    [tempGrid[from.row][from.col], tempGrid[to.row][to.col]] = [
      tempGrid[to.row][to.col],
      tempGrid[from.row][from.col],
    ];

    setGrid(tempGrid);
  };

  const moveTile = (el: Poz, moveTo: Poz, animationDirection: AnimationDirection) => {
    swap(el, moveTo);
    setAnimation({ element: moveTo, type: animationDirection });
    setTimeout(() => {
      setAnimation({ element: null, type: '' });
    }, 300);
  };

  const handleTileMove = (order: Poz, saveMove: boolean = true) => {
    if (animation.element) return;

    possibleMoves.forEach((possibleMove) => {
      const { direction, delta } = possibleMove;
      const newRow = order.row + delta[0];
      const newCol = order.col + delta[1];

      if (newRow >= 0 && newRow < 4 && newCol >= 0 && newCol < 4 && grid[newRow][newCol] === 0) {
        moveTile(order, { row: newRow, col: newCol }, direction);
        if (saveMove) {
          addPrevMove({ row: newRow, col: newCol });
          setTotalMoves(totalMoves + 1);
          return;
        }

        setTotalMoves(totalMoves - 1);
      }
    });
  };

  const handleUndo = () => {
    const { moves } = prevMoves;
    if (animation.element || moves.length === 0) {
      return;
    }

    const prevMove = moves[moves.length - 1];
    handleTileMove(prevMove, false);
    setPrevMoves({ ...prevMoves, moves: moves.slice(0, moves.length - 1) });
  };

  const handleReset = () => {
    setGrid(generateNewGrid(4, 4));
    setTotalMoves(0);
    setPrevMoves({ ...prevMoves, moves: [] });
  };

  useEffect(() => {
    setGrid(generateNewGrid(4, 4));
  }, []);

  useEffect(() => {
    const isGridSorted = grid.flat().every((digit, i, arr) => {
      return digit === i + 1 || i === arr.length - 1;
    });

    setIsGridSorted(isGridSorted);
  }, [grid]);

  return (
    <div>
      <div className={styles.grid}>
        {grid.map((row, rowI) =>
          row.map((digit, colI) => {
            return (
              <Tile
                key={digit}
                animDirection={
                  animation.element &&
                  animation.element.col === colI &&
                  animation.element.row === rowI
                    ? animation.type
                    : ''
                }
                digit={digit}
                onClick={() => handleTileMove({ row: rowI, col: colI })}
                isOnCorrectPoz={rowI * 3 + colI + rowI + 1 === digit}
              />
            );
          })
        )}
      </div>
      <div className={styles.menu}>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="button" disabled={prevMoves.moves.length === 0} onClick={handleUndo}>
          Undo
        </button>
        <p>
          {isGridSorted ? 'Congrats.' : ''} Total moves: {totalMoves}
        </p>
      </div>
    </div>
  );
}
