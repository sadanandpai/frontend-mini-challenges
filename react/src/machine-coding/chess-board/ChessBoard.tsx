import { FC } from 'react';
import styles from './chess-board.module.scss';
import { colorTile } from './utils';

const ChessBoard: FC = () => {
  //instead of using an object here we can use Map too
  //reference: https://qwerty.dev/chess-symbols-to-copy-and-paste
  /**
   * R - Rook
   * N - Knight
   * B - Bishop
   * Q - Queen
   * K - King
   * P - Pawn
   */
  const chessPieces: { readonly [key: string]: string } = {
    R: '♜',
    N: '♞',
    B: '♝',
    Q: '♛',
    K: '♚',
    P: '♟',
    r: '♖',
    n: '♘',
    b: '♗',
    q: '♕',
    k: '♔',
    p: '♙',
    ' ': ' ',
  };

  const boardRows =
    'RNBQKBNR' + 'PPPPPPPP' + '        ' + '        ' + '        ' + '        ' + 'pppppppp' + 'rnbqkbnr';

  return (
    <section className={styles.chess}>
      {boardRows.split('').map((piece: string, i: number) => {
        return (
          <div key={i} className={`${styles.tile} ${colorTile(i) ? styles.tile_color : ''}`}>
            {chessPieces[piece]}
          </div>
        );
      })}
    </section>
  );
};

export default ChessBoard;
