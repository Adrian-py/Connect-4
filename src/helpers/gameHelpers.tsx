// Check board condition (win or draw)
function handleCheckBoard(
  board: number[][],
  col: number,
  row: number,
  currentTurn: number
) {
  if (handleCheckWin(board, col, row, currentTurn)) return "win";
  else if (handleCheckDraw(board)) return "draw";
  return "continue";
}

// Check if current move produces a win
function handleCheckWin(
  board: number[][],
  col: number,
  row: number,
  currentTurn: number
) {
  let maxTileCount = 0,
    tileCount = 1;

  // check horizontal
  for (let i = col + 1; i <= 4 && col - i < 4; i++) {
    if (board[i][row] === currentTurn) {
      tileCount++;
      continue;
    }
    break;
  }
  for (let i = col - 1; i >= 0 && col - i < 4; i--) {
    if (board[i][row] === currentTurn) {
      tileCount++;
      continue;
    }
    break;
  }
  maxTileCount = Math.max(maxTileCount, tileCount);
  tileCount = 1;

  // check vertical
  for (let i = row + 1; i <= 4 && col - i < 4; i++) {
    if (board[col][i] === currentTurn) {
      tileCount++;
      continue;
    }
    break;
  }
  for (let i = row - 1; i >= 0 && col - i < 4; i--) {
    if (board[col][i] === currentTurn) {
      tileCount++;
      continue;
    }

    break;
  }

  maxTileCount = Math.max(maxTileCount, tileCount);
  tileCount = 1;

  // check diagonals
  // top-right to bottom-left
  for (let i = 1; i <= 4 && row + i <= 4 && col + i <= 4; i++) {
    if (board[col + i][row + i] === currentTurn) {
      tileCount++;
      continue;
    }

    break;
  }
  for (let i = 1; i <= 4 && row - i >= 0 && col - i >= 0; i++) {
    if (board[col - i][row - i] === currentTurn) {
      tileCount++;
      continue;
    }

    break;
  }

  maxTileCount = Math.max(maxTileCount, tileCount);
  tileCount = 1;

  // top-left to bottom-right
  for (let i = 1; i <= 4 && row - i >= 0 && col + i <= 4; i++) {
    if (board[col + i][row - i] === currentTurn) {
      tileCount++;
      continue;
    }

    break;
  }
  for (let i = 1; i <= 4 && row + i <= 4 && col - i >= 0; i++) {
    if (board[col - i][row + i] === currentTurn) {
      tileCount++;
      continue;
    }

    break;
  }
  maxTileCount = Math.max(maxTileCount, tileCount);

  if (maxTileCount >= 4) return true;
  return false;
}

// Check if board if full
function handleCheckDraw(board: number[][]) {
  for (let i = 0; i <= 4; i++) {
    if (!board[i][0]) return 0;
  }

  return 1;
}

export { handleCheckBoard };
