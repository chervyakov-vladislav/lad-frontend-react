import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/shared/configs/axios';
import { ITopData, ITopFilm } from '@/shared/types';

interface IThunk {
  query: string;
  signal?: AbortSignal;
}

interface IResponse {
  data: ITopFilm[];
  query: string;
}

export const fetchTopFilms = createAsyncThunk<IResponse, IThunk>(
  'user/fetchAll',
  async ({ query, signal }, thunkAPI) => {
    try {
      const page = '1';
      const { data } = await axios.get<ITopData>(`/v2.2/films/top?type=${query}&page=${page}`, {
        signal,
      });
      return {
        data: data.films,
        query,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить фильмы');
    }
  }
);
