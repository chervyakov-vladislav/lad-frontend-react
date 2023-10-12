import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialState: IUser = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;
export default userSlice.reducer;
