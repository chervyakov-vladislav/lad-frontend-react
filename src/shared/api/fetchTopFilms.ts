import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '@/shared/configs/axios';
import { ITopData, ITopFilm } from '@/shared/types';
import { QUERY_TOP_FILMS } from '@/pages';

interface IResponse {
  data: ITopFilm[];
  query: QUERY_TOP_FILMS;
  pagesCount: number;
}

interface IThunk {
  query?: QUERY_TOP_FILMS;
  page?: number;
}

export const fetchTopFilms = createAsyncThunk<IResponse, IThunk, { rejectValue: string }>(
  'topFilms/fetchTopFilms',
  async ({ query = QUERY_TOP_FILMS.POPULAR100, page = 1 }, thunkAPI) => {
    try {
      const { data } = await axios.get<ITopData>(`/v2.2/films/top?type=${query}&page=${page}`);
      return {
        data: data.films,
        query,
        pagesCount: data.pagesCount,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить фильмы');
    }
  }
);
