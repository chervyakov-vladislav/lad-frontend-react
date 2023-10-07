import { createSlice } from '@reduxjs/toolkit';

import { QUERY_TOP_FILMS } from '@/pages';
import { ITopFilm } from '@/shared/types';

import { fetchTopFilms } from './asyncActions';

interface IFilms {
  films_best: ITopFilm[];
  films_top: ITopFilm[];
  isLoading: boolean;
}

const initialState: IFilms = {
  films_best: [],
  films_top: [],
  isLoading: false,
};

export const topFilmsSlice = createSlice({
  name: 'topFilms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopFilms.fulfilled, (state, { payload: { data, query } }) => {
      if (query === QUERY_TOP_FILMS.BEST250) {
        state.films_best = data;
      } else if (query === QUERY_TOP_FILMS.POPULAR100) {
        state.films_top = data;
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

// export const { resetSuggestionFilms } = topFilmsSlice.actions;
export default topFilmsSlice.reducer;
