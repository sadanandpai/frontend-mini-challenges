export const checkDiagonals = (board) => {
  let xCount = 0,
    oCount = 0;
  for (let i = 0; i < 3; i++) {
    if (!board[i][i]) continue;
    if (board[i][i] === 'X') xCount++;
    else oCount++;
  }
  return xCount === 3 || oCount === 3;
};

export const checkAntiDiagonals = (board) => {
  let xCount = 0,
    oCount = 0;
  let j = 0;
  for (let i = 2; i >= 0; i--, j++) {
    if (!board[j][i]) continue;
    if (board[j][i] === 'X') xCount++;
    else oCount++;
  }
  return xCount === 3 || oCount === 3;
};

export const checkRow = (board) => {
  for (let i = 0; i < 3; i++) {
    let xCount = 0,
      oCount = 0;
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) continue;
      if (board[i][j] === 'X') xCount++;
      else oCount++;
    }
    if (xCount === 3 || oCount === 3) return true;
  }
  return false;
};

export const checkColumn = (board) => {
  for (let i = 0; i < 3; i++) {
    let xCount = 0,
      oCount = 0;
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === null) continue;
      if (board[j][i] === 'X') xCount++;
      else oCount++;
    }
    if (xCount === 3 || oCount === 3) return true;
  }
  return false;
};
