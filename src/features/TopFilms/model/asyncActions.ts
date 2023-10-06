import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '@/shared/configs/axios';
import { ITopData, ITopFilm } from '@/shared/types';
import { QUERY_TOP_FILMS } from '@/pages';

interface IResponse {
  data: ITopFilm[];
  query: string;
}

export const fetchTopFilms = createAsyncThunk<IResponse, QUERY_TOP_FILMS>(
  'topFilms/fetchTopFilms',
  async (query, thunkAPI) => {
    try {
      const page = '1';
      const { data } = await axios.get<ITopData>(`/v2.2/films/top?type=${query}&page=${page}`);
      return {
        data: data.films,
        query,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить фильмы');
    }
  }
);
