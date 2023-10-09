import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '@/shared/configs/axios';
import { IFilmData } from '@/shared/types';

export const fetchOneFilm = createAsyncThunk<IFilmData, string, { rejectValue: string }>(
  'onefilm/fetchOne',
  async (filmId, thunkAPI) => {
    try {
      const { data } = await axios.get<IFilmData>(`/v2.2/films/${filmId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить фильм');
    }
  }
);
