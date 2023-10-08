import { createSlice } from '@reduxjs/toolkit';
import { IFilmData } from '@/shared/types';
import { fetchOneFilm } from '../../../shared/api/fetchOneFilm';

interface IFilms {
  film: IFilmData | null;
  isLoading: boolean;
  error: string;
}

const initialState: IFilms = {
  film: null,
  isLoading: false,
  error: '',
};

export const oneFilmSlice = createSlice({
  name: 'onefilm',
  initialState,
  reducers: {
    clearData(state) {
      state.film = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOneFilm.fulfilled, (state, action) => {
      state.film = action.payload;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(fetchOneFilm.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchOneFilm.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { clearData } = oneFilmSlice.actions;
export default oneFilmSlice.reducer;
