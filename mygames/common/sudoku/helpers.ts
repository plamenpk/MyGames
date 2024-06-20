import { SUDOKU_3, SUDOKU_3X3 } from "./constants";

export const isFilled = (board: (number | null)[][]) => {

  return !board.map(row => row.includes(null)).includes(true)
}

const areRowsValid = (board: (number | null)[][]) => {

  return !board
    .map(row => new Set(row).size === SUDOKU_3X3)
    .includes(false)
}

const transposeBoard = (board: (number | null)[][]) => {
  const matrix = board.map(row => [...row])
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = Array.from({ length: cols }, () => Array(rows).fill(null));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      transposed[col][row] = matrix[row][col];
    }
  }

  return transposed;
};

const areColumnsValid = (board: (number | null)[][]) => {
  const matrix = transposeBoard(board)

  return areRowsValid(matrix)
}

const isSubGridValid = (board: (number | null)[][], startRow: number, startCol: number) => {
  const subGrid = new Set();

  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let colIndex = 0; colIndex < 3; colIndex++) {
      const num = board[startRow + rowIndex][startCol + colIndex];
      subGrid.add(num);
    }
  }

  return subGrid.size === 9;
};

const isSubGridsValid = (board: (number | null)[][]) => {
  for (let row = 0; row < SUDOKU_3X3; row += SUDOKU_3) {
    for (let col = 0; col < SUDOKU_3X3; col += SUDOKU_3) {
      if (!isSubGridValid(board, row, col)) {
        return false;
      }
    }
  }

  return true;
}

export const isBoardValid = (board: (number | null)[][]) => {

  return (isFilled(board) && areRowsValid(board) && areColumnsValid(board) && isSubGridsValid(board));
}