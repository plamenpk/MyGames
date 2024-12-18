import { SudokuCell } from '@/common/sudoku/interfaces';
import { RootState } from '@/store/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedNumberState {
  value: SudokuCell;
}

const initialState: SelectedNumberState = {
  value: null,
};

export const selectedNumberSlice = createSlice({
  name: 'selectedNumber',
  initialState,
  reducers: {
    setSelectedNumber: (state, action: PayloadAction<SudokuCell>) => {
      state.value = action.payload;
    },
    resetSelectedNumber: (state) => {
      state.value = null;
    },
  },
});

export const { setSelectedNumber, resetSelectedNumber } = selectedNumberSlice.actions;
export const selectNumber = (state: RootState) => state.selectedNumber.value;
export default selectedNumberSlice.reducer;
