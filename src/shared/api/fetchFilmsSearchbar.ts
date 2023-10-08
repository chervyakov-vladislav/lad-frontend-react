import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/shared/configs/axios';
import { KeyWordSearchInterface } from '@/shared/types';

interface IThunk {
  searchValue: string;
  signal?: AbortSignal;
}

export const fetchFilmsSearchbar = createAsyncThunk<KeyWordSearchInterface, IThunk>(
  'searchbar/fetchSearchbar',
  async ({ searchValue, signal }, thunkAPI) => {
    try {
      const page = '1';
      const { data } = await axios.get(
        `/v2.1/films/search-by-keyword?keyword=${searchValue}&page=${page}`,
        { signal }
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить фильмы');
    }
  }
);
