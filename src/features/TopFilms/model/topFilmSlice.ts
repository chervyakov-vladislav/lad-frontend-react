import { createSlice } from '@reduxjs/toolkit';

import { QUERY_TOP_FILMS } from '@/pages';
import { ITopFilm } from '@/shared/types';

import { fetchTopFilms } from './asyncActions';

interface IUsers {
  films_best: ITopFilm[];
  films_top: ITopFilm[];
}

const initialState: IUsers = {
  films_best: [],
  films_top: [],
};

export const topFilmsSlice = createSlice({
  name: 'topFilms',
  initialState,
  reducers: {
    // resetSuggestionFilms(state) {
    //   state.films = null;
    //   state.isLoading = false;
    //   state.error = '';
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopFilms.fulfilled, (state, { payload: { data, query } }) => {
      if (query === QUERY_TOP_FILMS.BEST250) {
        state.films_best = data;
      } else if (query === QUERY_TOP_FILMS.POPULAR100) {
        state.films_top = data;
      }
    });
  },
});

// export const { resetSuggestionFilms } = topFilmsSlice.actions;
export default topFilmsSlice.reducer;
