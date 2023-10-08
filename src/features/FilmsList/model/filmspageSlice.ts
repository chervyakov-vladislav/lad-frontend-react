import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ITopFilm } from '@/shared/types';
import { fetchTopFilms } from '../../../shared/api';

enum QUERY_TOP_FILMS {
  POPULAR100 = 'TOP_100_POPULAR_FILMS',
  BEST250 = 'TOP_250_BEST_FILMS',
}

interface IPayload {
  films: ITopFilm[];
  title: string;
  query: QUERY_TOP_FILMS;
  pagesCount: number;
}

interface IFilms {
  films: ITopFilm[];
  isLoading: boolean;
  title: string;
  query: QUERY_TOP_FILMS;
  currentPage: number;
  totalPages: number;
  isAdditionalLoading: boolean;
}

const initialState: IFilms = {
  films: [],
  isLoading: false,
  title: 'Рекомендации',
  query: QUERY_TOP_FILMS.POPULAR100,
  currentPage: 1,
  totalPages: 2,
  isAdditionalLoading: false,
};

export const filmspageSlice = createSlice({
  name: 'filmspage',
  initialState,
  reducers: {
    setFilms(state, { payload }: PayloadAction<IPayload>) {
      state.films = payload.films;
      state.title = payload.title;
      state.query = payload.query;
      state.totalPages = payload.pagesCount;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopFilms.fulfilled, (state, action) => {
      state.films = [...state.films, ...action.payload.data];
      state.query = action.payload.query;
      state.isAdditionalLoading = false;
      state.currentPage += 1;
      state.totalPages = action.payload.pagesCount;
    });
    builder.addCase(fetchTopFilms.rejected, (state) => {
      state.isAdditionalLoading = false;
    });
    builder.addCase(fetchTopFilms.pending, (state) => {
      state.isAdditionalLoading = false;
    });
  },
});

export const { setFilms } = filmspageSlice.actions;
export default filmspageSlice.reducer;
