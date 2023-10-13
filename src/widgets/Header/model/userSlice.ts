import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signInUser } from '@/shared/api/authUser';

interface IUser {
  email: string | null;
  token: string | null;
  id: string | null;
  error: string | null;
}

const initialState: IUser = {
  email: null,
  token: null,
  id: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<IUser>) {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
      state.error = null;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.id = action.payload.user.uid;
        console.log(action.payload);
      })
      .addCase(signInUser.rejected, (state) => {
        state.error = 'Ошибка';
      });
  },
});

export const { removeUser, setUser } = userSlice.actions;
export default userSlice.reducer;
