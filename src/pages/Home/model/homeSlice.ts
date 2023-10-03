import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/storeProvider';

const initialState = {
  count: 0,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCount: (state: typeof initialState, { payload }: PayloadAction<number>) => {
      state.count = payload;
    },
  },
});

export const selectEditor = (state: RootState) => state.home;

export default homeSlice.reducer;
