import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CellValue = number | null;
type BoardState = CellValue[][];

interface SudokuState {
  board: BoardState;
}

const initialState: SudokuState = {
  board: [
    [2, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [2, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, 4, null, null],
    [null, null, null, null, null, null, null, 6, null],
    [2, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
  ],
};

const sudokuSlice = createSlice({
  name: 'sudoku',
  initialState,
  reducers: {
    updateCell: (state, action: PayloadAction<{ row: number; col: number; value: CellValue }>) => {
      const { row, col, value } = action.payload;
      state.board[row][col] = value;
    },
    resetBoard: (state, action: PayloadAction<BoardState>) => {
      state.board = action.payload;
    },
  },
});

export const { updateCell, resetBoard } = sudokuSlice.actions;

export default sudokuSlice.reducer;
