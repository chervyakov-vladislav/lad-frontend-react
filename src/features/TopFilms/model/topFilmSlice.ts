import { createSlice } from '@reduxjs/toolkit';
import { ITopFilm } from '@/shared/types';
import { fetchTopFilms } from './asyncActions';

interface IUsers {
  films: ITopFilm[] | null;
  isLoading: boolean;
  error: string;
}

const initialState: IUsers = {
  films: null,
  isLoading: false,
  error: '',
};

export const topFilmsSlice = createSlice({
  name: 'headerFilms',
  initialState,
  reducers: {
    // resetSuggestionFilms(state) {
    //   state.films = null;
    //   state.isLoading = false;
    //   state.error = '';
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopFilms.fulfilled, (state, action) => {
      state.films = action.payload.data;
      state.error = '';
      state.isLoading = false;
    });
    builder.addCase(fetchTopFilms.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchTopFilms.pending, (state) => {
      state.isLoading = true;
    });
  },
});

// export const { resetSuggestionFilms } = topFilmsSlice.actions;
export default topFilmsSlice.reducer;
