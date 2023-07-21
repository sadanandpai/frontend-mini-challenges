import React, { useEffect, useRef, useState } from 'react';
import styles from './tictactoe.module.css';
import * as utils from './tictactoeUtils';

const App = () => {
  const [board, setBoard] = useState([]);
  const player = useRef('X');
  const [wins, setWins] = useState({ X: 0, O: 0, D: 0 });
  const filled = useRef(0);
  const [gameEnd, setGameEnd] = useState(false);

  const createNewGame = () => {
    const newBoard = [];
    for (let i = 0; i < 3; i++) {
      newBoard.push([null, null, null]);
    }
    setBoard(newBoard);
  };

  const delayedCreate = (delay) => {
    setTimeout(() => {
      createNewGame();
    }, delay);
  };

  const displayBoard = () => {
    if (board.length < 1 || board[0].length < 1) return;
    return [0, 1, 2].map((i) => {
      return (
        <div className={styles['cell']} key={i}>
          {[0, 1, 2].map((j) => {
            return (
              <div className={styles['cell']} key={j} onClick={() => placeItem(i, j)}>
                <div className={styles['pos']}>{board[i][j]}</div>
              </div>
            );
          })}
        </div>
      );
    });
  };

  const placeItem = (i, j) => {
    if (board[i][j] !== null) return;
    const temp = [...board];
    temp[i][j] = player.current;
    player.current = player.current === 'X' ? 'O' : 'X';
    filled.current++;
    setBoard(temp);
  };

  useEffect(() => {
    createNewGame();
  }, []);

  useEffect(() => {
    if (board.length < 1 || board[0].length < 1) return;
    if (
      utils.checkDiagonals(board) ||
      utils.checkAntiDiagonals(board) ||
      utils.checkColumn(board) ||
      utils.checkRow(board)
    ) {
      const currentWinner = player.current === 'X' ? 'O' : 'X';
      setWins((prevState) => ({ ...prevState, [currentWinner]: prevState[currentWinner] + 1 }));
      player.current = 'X';
      filled.current = 0;
      delayedCreate(200);
      setGameEnd(true);
    } else if (filled.current === 9) {
      filled.current = 0;
      player.current = 'X';
      setWins((prevState) => ({ ...prevState, D: prevState['D'] + 1 }));
      setGameEnd(true);
      delayedCreate(200);
    }
  }, [board]);

  useEffect(() => {
    if (gameEnd) {
      const id = setTimeout(() => {
        setGameEnd(false);
      }, 8000);
    }
  }, [gameEnd]);

  return (
    <div className={styles['game']}>
      <div className={styles['scoreBoard']}>
        <h2>Scores</h2>
        {Object.keys(wins).map((p) => (
          <div key={p} className={styles['score']}>
            {p === 'D' ? 'Draws' : p}
          </div>
        ))}
        <br />
        {Object.keys(wins).map((p) => (
          <div key={p} className={styles['score']}>
            {wins[p]}
          </div>
        ))}
      </div>
      <div className={styles['board']}>{displayBoard()}</div>
    </div>
  );
};

export default App;
