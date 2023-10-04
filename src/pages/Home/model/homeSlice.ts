import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

export default homeSlice.reducer;
