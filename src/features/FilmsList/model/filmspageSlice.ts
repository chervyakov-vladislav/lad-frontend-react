import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ITopFilm } from '@/shared/types';
import { fetchFilms } from './acyncActions';

enum QUERY_TOP_FILMS {
  POPULAR100 = 'TOP_100_POPULAR_FILMS',
  BEST250 = 'TOP_250_BEST_FILMS',
}

interface IPayload {
  films: ITopFilm[];
  title: string;
  query: QUERY_TOP_FILMS;
}

interface IFilms {
  films: ITopFilm[];
  isLoading: boolean;
  title: string;
  query: QUERY_TOP_FILMS;
  currentPage: 1;
}

const initialState: IFilms = {
  films: [],
  isLoading: false,
  title: 'Рекомендации',
  query: QUERY_TOP_FILMS.POPULAR100,
  currentPage: 1,
};

export const filmspageSlice = createSlice({
  name: 'filmspage',
  initialState,
  reducers: {
    setFilms(state, { payload }: PayloadAction<IPayload>) {
      state.films = payload.films;
      state.title = payload.title;
      state.query = payload.query;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload.data;
      state.title = 'Рекомендации';
      state.query = QUERY_TOP_FILMS.POPULAR100;
      state.isLoading = false;
      state.currentPage = 1;
    });
    builder.addCase(fetchFilms.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchFilms.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { setFilms } = filmspageSlice.actions;
export default filmspageSlice.reducer;
