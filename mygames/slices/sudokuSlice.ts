import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { sudokuTemplate } from '@/common/sudoku/data';

type CellValue = number | null;
type BoardState = CellValue[][];

interface SudokuState {
  board: BoardState;
}

const initialState: SudokuState = {
  board: sudokuTemplate
};

const sudokuSlice = createSlice({
  name: 'sudoku',
  initialState,
  reducers: {
    updateCell: (state, action: PayloadAction<{ row: number; col: number; value: CellValue }>) => {
      const { row, col, value } = action.payload;
      state.board[row][col] = value;
    },
    resetCell: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload;
      state.board[row][col] = null;
    },
  },
});

export const { updateCell, resetCell } = sudokuSlice.actions;
export const selectBoard = (state: RootState) => state.sudoku.board;
export default sudokuSlice.reducer;
