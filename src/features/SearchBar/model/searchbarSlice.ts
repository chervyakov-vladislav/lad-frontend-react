import { createSlice } from '@reduxjs/toolkit';
import { KeyWordSearchInterface } from '@/shared/types';
import { fetchFilms } from './actionCreators';

interface IUsers {
  films: KeyWordSearchInterface | null;
  isLoading: boolean;
  error: string;
}

const initialState: IUsers = {
  films: null,
  isLoading: false,
  error: '',
};

export const searchbarSlice = createSlice({
  name: 'headerFilms',
  initialState,
  reducers: {
    resetSuggestionFilms(state) {
      state.films = null;
      state.isLoading = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchFilms.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { resetSuggestionFilms } = searchbarSlice.actions;
export default searchbarSlice.reducer;
