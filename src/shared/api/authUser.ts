import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@/shared/configs/firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IAuth {
  email: string;
  password: string;
}

export const signInUser = createAsyncThunk<UserCredential, IAuth, { rejectValue: string }>(
  'user/signIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка авторизации');
    }
  }
);

export const createUser = createAsyncThunk<UserCredential, IAuth, { rejectValue: string }>(
  'user/createNewUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка регистрации');
    }
  }
);
