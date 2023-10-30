function possible(board, y, x, n) {
  for (let i = 0; i < 9; i++) {
    if (board[y][i] === n || board[i][x] === n) {
      return false;
    }
  }

  const xSquare = Math.floor(x / 3) * 3;
  const ySquare = Math.floor(y / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[ySquare + i][xSquare + j] === n) {
        return false;
      }
    }
  }

  return true;
}

function solveSudoku(board) {
  const solutions = [];

  function backtrack(board, y, x) {
    if (y === 9) {
      solutions.push(JSON.parse(JSON.stringify(board)));
      return;
    }

    if (board[y][x] !== 0) {
      if (x === 8) {
        backtrack(board, y + 1, 0);
      } else {
        backtrack(board, y, x + 1);
      }
      return;
    }

    for (let n = 1; n <= 9; n++) {
      if (possible(board, y, x, n)) {
        board[y][x] = n;

        if (x === 8) {
          backtrack(board, y + 1, 0);
        } else {
          backtrack(board, y, x + 1);
        }

        board[y][x] = 0;
      }
    }
  }

  backtrack(board, 0, 0);

  return solutions;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }

  return true;
}

function generateSudoku() {
  const board = Array(9)
    .fill()
    .map(() => Array(9).fill(0));

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffle(nums);
  for (let i = 0; i < 9; i++) {
    board[0][i] = nums[i];
  }

  function fill(row, col) {
    if (col === 9) {
      col = 0;
      row++;
    }
    if (row === 9) {
      return true;
    }
    if (board[row][col] !== 0) {
      return fill(row, col + 1);
    }
    shuffle(nums);
    for (let i = 0; i < 9; i++) {
      if (isValid(board, row, col, nums[i])) {
        board[row][col] = nums[i];
        if (fill(row, col + 1)) {
          return true;
        }
        board[row][col] = 0;
      }
    }
    return false;
  }

  fill(1, 0);
  return board;
}

function removeValues(board, vals) {
  const newBoard = board.map((row) => row.slice());
  while (vals > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (newBoard[row][col] !== 0) {
      newBoard[row][col] = 0;
      vals--;
    }
  }
  return newBoard;
}

function generateSudokuPuzzle(difficulty) {
  const solved = generateSudoku();
  const n = difficulty === 'easy' ? 45 : difficulty === 'medium' ? 40 : 35;
  const puzzle = removeValues(solved, n);
  return puzzle;
}

// Example usage
//<div class='cell'><input type='text' id='" + (count + 2) + "' class='input'></div>

let variable = [0];
let z = -1;
let z2 = false;

for (let i = 1; i <= 81; i++) {
  while (true) {
    z = Math.floor(Math.random() * 81 + 1);
    for (let x of variable) {
      if (x == z) {
        z2 = true;
      }
    }
    if (z2 == false) {
      break;
    }
    z2 = false;
  }
  document.getElementById('main').innerHTML =
    document.getElementById('main').innerHTML +
    `<input type="number" value="" id="${i}" class="input" oninput="this.value = this.value.slice(-1)" onkeydown="disableArrow(event)" style="--i:${z}" readonly="true">`;
}

for (let i = 1; i <= 81; i++) {
  let x = document.getElementById(i.toString());
  if (i % 9 == 3 || i % 9 == 6) {
    x.style.marginRight = '.4rem';
  }
  if ((i >= 19 && i <= 27) || (i >= 46 && i <= 54)) {
    x.style.marginBottom = '.6rem';
  }
}

function help() {
  window.open('https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/', '_blank');
}

const timer = () => {
  let sec = 0;
  let min = 0;
  let timeId = setInterval(() => {
    sec += 1;
    if (sec > 59) {
      min += 1;
      sec = 0;
    }

    const inMin = document.getElementById('time_min');
    const inSec = document.getElementById('time_sec');

    inMin.innerHTML = min < 10 ? '0' + min : min;
    inSec.innerHTML = sec < 10 ? '0' + sec : sec;

    if (min >= 2 && (sec == 10 || sec == 20 || sec == 30 || sec == 40 || sec == 50 || sec == 59)) {
      if (score > 0) {
        score -= 2;
        document.getElementById('score').innerHTML = score < 10 ? '0' + score : score;
        if (score <= 20) {
          document.getElementById('score').style.color = 'red';
        }
      }
    }
  }, 1000);

  return timeId;
};

let level = 'not-set';
let ques;
let solution;
let id;
let timeId;
let score = 100;
document.getElementById('score').innerHTML = score;

const checkSudoku = () => {
  let x = 1;
  let possible = true;
  const userSolution = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = document.getElementById(x.toString()).value;
      userSolution[i][j] = Number.parseInt(value);

      if (isNaN(userSolution[i][j])) {
        possible = false;
        break;
      }
      x += 1;
    }
    if (!possible) {
      break;
    }
  }

  if (possible) {
    for (x = 0; x < solution.length; x++) {
      let yes = true;
      ans = solution[x];

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (ans[i][j] != userSolution[i][j]) {
            yes = false;
          }
        }
      }

      if (yes == true) {
        return true;
      }
    }
  } else {
    return false;
  }
};

function answer() {
  if (confirm('do you really want to give up!!')) {
    if (level == 'not-set') {
      alert('please start a game first!!');
    } else {
      clearInterval(id);
      clearInterval(timeId);
      let ans = solution[0];
      console.log('this is just one solution, There may be more solutions possible');
      document.getElementById('score').innerHTML = '00';
      let x = 1;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          document.getElementById(x.toString()).value = ans[i][j];
          document.getElementById(x.toString()).readOnly = true;
          x += 1;
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName('label')[i].setAttribute('onclick', 'return true;');
    }

    document.getElementById('start').setAttribute('onclick', 'start()');
  }
}

//checking answer

const interval = () => {
  id = setInterval(() => {
    if (document.activeElement.className == 'input') {
      if (checkSudoku()) {
        clearInterval(id);
        const currentScore = Number.parseInt(document.getElementById('score').innerHTML);

        try {
          let name = localStorage.getItem('name');
          let score = Number.parseInt(localStorage.getItem('score'));

          if (isNaN(score)) {
            throw 'not a number';
          } else {
            if (score < currentScore) {
              alert(
                `Congratulations, you beat the high score !!.....\nYour score = ${currentScore}\nHigh score = ${score}\n\nYour name = ${name}`
              );
              localStorage.setItem('score', currentScore);
            } else {
              alert(
                `Congratulations, you win!....\nYour score = ${currentScore}\nHigh score = ${score}\n\nYour name = ${name}`
              );
            }
          }
        } catch (err) {
          console.log('no user found in local storage');
          let name = prompt(
            `Congratulations you win!....\nYour score = ${currentScore}\n\nEnter your name: `
          );

          localStorage.setItem('name', name);
          localStorage.setItem('score', currentScore);
        }

        window.location.reload();
      }
    }
  }, 500);

  return id;
};

function start() {
  timeId = timer();

  for (let i = 0; i < 3; i++) {
    document.getElementsByClassName('label')[i].setAttribute('onclick', 'return false;');
  }

  if (document.getElementById('easy').checked) {
    level = 'easy';
    ques = generateSudokuPuzzle('easy');
  } else if (document.getElementById('medium').checked) {
    level = 'medium';
    ques = generateSudokuPuzzle('medium');
  } else {
    level = 'hard';
    ques = generateSudokuPuzzle('hard');
  }

  let x = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (ques[i][j].toString() != '0') {
        document.getElementById((x + 1).toString()).value = ques[i][j];
        document.getElementById((x + 1).toString()).readOnly = true;
        document.getElementById((x + 1).toString()).style.backgroundColor = '#0b1c49';
      } else {
        document.getElementById((x + 1).toString()).readOnly = false;
        document.getElementById((x + 1).toString()).style.backgroundColor = '#0f2a72';
        document.getElementById((x + 1).toString()).value = '';
      }
      x += 1;
    }
  }

  interval();

  solution = solveSudoku(ques);

  document.getElementById('start').removeAttribute('onclick');
}

function replay() {
  clearInterval(timeId);
  clearInterval(id);
  for (let i = 1; i <= 81; i++) {
    document.getElementById(i.toString()).value = '';
    document.getElementById(i.toString()).style.backgroundColor = '#0f2a72';
    document.getElementById(i.toString()).readOnly = false;
  }
  start();
}

const disableArrow = (event) => {
  const element = event.target;
  if (
    element.tagName === 'INPUT' &&
    element.type === 'number' &&
    (event.key === 'ArrowUp' || event.key === 'ArrowDown')
  ) {
    event.preventDefault();
  }
};
