import { createSlice } from '@reduxjs/toolkit';

import { QUERY_TOP_FILMS } from '@/pages';
import { ITopFilm } from '@/shared/types';

import { fetchTopFilms } from '@/shared/api';

interface IFilms {
  films_best: ITopFilm[];
  films_top: ITopFilm[];
  isLoading: boolean;
  pagesCountBest: number;
  pagesCountTop: number;
}

const initialState: IFilms = {
  films_best: [],
  films_top: [],
  isLoading: false,
  pagesCountBest: 0,
  pagesCountTop: 0,
};

export const topFilmsSlice = createSlice({
  name: 'topFilms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopFilms.fulfilled, (state, { payload: { data, query, pagesCount } }) => {
      if (query === QUERY_TOP_FILMS.BEST250) {
        state.films_best = data;
        state.pagesCountBest = pagesCount;
      } else if (query === QUERY_TOP_FILMS.POPULAR100) {
        state.films_top = data;
        state.pagesCountTop = pagesCount;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchTopFilms.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchTopFilms.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default topFilmsSlice.reducer;
