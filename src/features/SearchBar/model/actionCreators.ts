import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/shared/configs/axios';
import { KeyWordSearchInterface } from '@/shared/types';

interface IThunk {
  signal: AbortSignal;
}

export const fetchFilms = createAsyncThunk<KeyWordSearchInterface, IThunk>(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const word = '1';
      const page = '1';
      const { data } = await axios.get(
        `/v2.1/films/search-by-keyword?keyword=${word}&page=${page}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить фильмы');
    }
  }
);