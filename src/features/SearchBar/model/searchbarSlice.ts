import { createSlice } from '@reduxjs/toolkit';
import { KeyWordSearchInterface } from '@/shared/types';
import { fetchFilmsSearchbar } from '@/shared/api';

interface IFilms {
  films: KeyWordSearchInterface | null;
  isLoading: boolean;
  error: string;
}

const initialState: IFilms = {
  films: null,
  isLoading: false,
  error: '',
};

export const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    resetSuggestionFilms(state) {
      state.films = null;
      state.isLoading = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilmsSearchbar.fulfilled, (state, action) => {
      state.films = action.payload;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(fetchFilmsSearchbar.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchFilmsSearchbar.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { resetSuggestionFilms } = searchbarSlice.actions;
export default searchbarSlice.reducer;
