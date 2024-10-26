import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { sudokuTemplate } from '@/common/sudoku/data';
import { SudokuBoard, SudokuCell } from '@/common/sudoku/interfaces';

interface SudokuState {
  board: SudokuBoard;
}

const initialState: SudokuState = {
  board: sudokuTemplate
};

const sudokuSlice = createSlice({
  name: 'sudoku',
  initialState,
  reducers: {
    updateCell: (state, action: PayloadAction<{ row: number; col: number; value: SudokuCell }>) => {
      const { row, col, value } = action.payload;
      state.board[row][col] = value;
    },
    resetCell: (state, action: PayloadAction<{ row: number; col: number }>) => {
      const { row, col } = action.payload;
      state.board[row][col] = null;
    },
    updateBoard: (state, action: PayloadAction<SudokuCell[][]>) => {
      state.board = action.payload;
    }
  },
});

export const { updateCell, resetCell, updateBoard } = sudokuSlice.actions;
export const selectBoard = (state: RootState) => state.sudoku.board;
export default sudokuSlice.reducer;
