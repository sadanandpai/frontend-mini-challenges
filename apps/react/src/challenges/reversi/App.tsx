import { BoardType, CellValue } from './constants';
import { countPieces, createInitialBoard, hasValidMoves, isValidMove } from './helpers';
import { useEffect, useState } from 'react';

import { makeMove } from './helpers';
import styles from './styles.module.scss';

export default function Reversi() {
  const [board, setBoard] = useState<BoardType>(createInitialBoard());
  const [currentPlayer, setCurrentPlayer] = useState<CellValue>(CellValue.black);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState({ black: 2, white: 2 });

  useEffect(() => {
    const { black, white } = countPieces(board);
    setScores({ black, white });

    const currentPlayerCanMove = hasValidMoves(board, currentPlayer);
    if (!currentPlayerCanMove) {
      const nextPlayer = currentPlayer === CellValue.black ? CellValue.white : CellValue.black;
      const nextPlayerCanMove = hasValidMoves(board, nextPlayer);

      if (!nextPlayerCanMove) {
        setGameOver(true);
      } else {
        setCurrentPlayer(nextPlayer);
      }
    }
  }, [board, currentPlayer]);

  const handleCellClick = (row: number, col: number) => {
    if (gameOver || !isValidMove(board, row, col, currentPlayer)) return;

    const newBoard = makeMove(board, row, col, currentPlayer);
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === CellValue.black ? CellValue.white : CellValue.black);
  };

  const resetGame = () => {
    setBoard(createInitialBoard());
    setCurrentPlayer(CellValue.black);
    setGameOver(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.scoreboard}>
        <div className={styles.score}>
          <div className={`${styles.piece} ${styles.black}`}></div>
          <span>{scores.black}</span>
        </div>
        <div className={styles.score}>
          <div className={`${styles.piece} ${styles.white}`}></div>
          <span>{scores.white}</span>
        </div>
        {gameOver && (
          <div className={styles.gameOver}>
            Game Over! {scores.black > scores.white ? 'Black' : 'White'} wins!
          </div>
        )}
        <button onClick={resetGame} className={styles.resetButton}>
          New Game
        </button>
      </div>

      <div className={styles.board}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`${styles.cell} ${
                  isValidMove(board, rowIndex, colIndex, currentPlayer) ? styles.validMove : ''
                }`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell && <div className={`${styles.piece} ${styles[cell]}`} />}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.status}>
        {!gameOver && (
          <>
            Current turn:
            <div className={`${styles.piece} ${styles[currentPlayer]}`}></div>
            {!hasValidMoves(board, currentPlayer) && ' (No valid moves, passing turn)'}
          </>
        )}
      </div>
    </div>
  );
}
