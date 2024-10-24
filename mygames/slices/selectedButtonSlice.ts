import { RootState } from '@/store/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectedButtonState {
  value: string;
}

const initialState: SelectedButtonState = {
  value: 'doNothing',
};

export const selectedButtonSlice = createSlice({
  name: 'selectedButton',
  initialState,
  reducers: {
    setSelectedButton: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetSelectedButton: (state) => {
      state.value = 'doNothing';
    },
  },
});

export const { setSelectedButton, resetSelectedButton } = selectedButtonSlice.actions;
export const selectButton = (state: RootState) => state.selectedButton.value;
export default selectedButtonSlice.reducer;