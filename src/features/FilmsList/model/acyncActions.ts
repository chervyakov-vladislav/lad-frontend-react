import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '@/shared/configs/axios';
import { ITopData, ITopFilm } from '@/shared/types';
import { QUERY_TOP_FILMS } from '@/pages';

interface IResponse {
  data: ITopFilm[];
}

export const fetchFilms = createAsyncThunk<IResponse>(
  'filmspage/fetchFilms',
  async (_, thunkAPI) => {
    try {
      const page = '1';
      const { data } = await axios.get<ITopData>(
        `/v2.2/films/top?type=${QUERY_TOP_FILMS.POPULAR100}&page=${page}`
      );
      return {
        data: data.films,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить фильмы');
    }
  }
);
