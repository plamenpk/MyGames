import { RootState } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  value: string | null
}

const initialState: userState = {
  value: null
}

export const userStateSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetUserState: (state) => {
      state.value = null; 
    }
  }
});

export const { setUserState, resetUserState } = userStateSlice.actions;
export const selectValue = (state: RootState) => state.userState.value;
export default userStateSlice.reducer;