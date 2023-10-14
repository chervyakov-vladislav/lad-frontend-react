import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createUser, signInUser } from '@/shared/api/authUser';

interface IUser {
  email: string | null;
  token: string | null;
  id: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: IUser = {
  email: null,
  token: null,
  id: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.error = null;
    },
    setError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.id = action.payload.user.uid;
        state.token = action.payload.user.accessToken;
        state.isLoading = false;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка';
        state.isLoading = false;
      })
      .addCase(signInUser.pending, (state) => {
        state.isLoading = true;
      });

    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.id = action.payload.user.uid;
        state.token = action.payload.user.accessToken;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка';
        state.isLoading = false;
      })
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { removeUser, setError, clearError } = userSlice.actions;
export default userSlice.reducer;
