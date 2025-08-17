import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SquareComponent } from '../square/square.component';

export const size = 3;

export const winningCombos = [
  ...Array.from(new Array(size), (_, i) => Array.from(new Array(size), (_, j) => i * size + j)),
  ...Array.from(new Array(size), (_, i) => Array.from(new Array(size), (_, j) => j * size + i)),
  Array.from(new Array(size), (_, i) => i * size + i),
  Array.from(new Array(size), (_, i) => i * size + size - i - 1),
];

export const initialArray = Array(size * size).fill(null);

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [NgFor, SquareComponent],
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent {
  squares = initialArray;
  isX = false;
  winner: 'X' | 'O' | null = null;
  xWins = 0;
  oWins = 0;
  draw = 0;
  isGameActive = true;

  calculatePlayerWin() {
    if (this.winner === 'X') {
      this.xWins++;
      this.isGameActive = false;
    } else if (this.winner === 'O') {
      this.oWins++;
      this.isGameActive = false;
    } else if (
      this.winner === null &&
      this.squares.filter((square) => square === null).length === 0
    ) {
      this.draw++;
      this.isGameActive = false;
    }
  }

  computeWin() {
    this.isX = !this.isX;
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        this.squares[a] !== null &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.winner = this.squares[a] === 1 ? 'X' : 'O';
        return;
      }
    }
  }

  updateWinner() {
    this.computeWin();
    this.calculatePlayerWin();
  }

  action(iTh: number) {
    if (!this.isGameActive) {
      return;
    }

    if (this.squares[iTh] === null && this.winner === null) {
      const _prevSquares = [...this.squares];
      _prevSquares[iTh] = this.isX ? 1 : 0;
      this.squares = _prevSquares;
    }
    this.updateWinner();
  }

  rematch() {
    this.squares = initialArray;
    this.winner = null;
    this.isGameActive = true;
  }
}
