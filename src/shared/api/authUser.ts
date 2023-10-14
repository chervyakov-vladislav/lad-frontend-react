import {
  User,
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

interface IResponse {
  operationType: string;
  user: {
    accessToken: string;
    uid: string;
    email: string;
  };
}

export const signInUser = createAsyncThunk<IResponse, IAuth, { rejectValue: string }>(
  'user/signIn',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user: User = userCredential.user;
      const tokenResult = await user.getIdTokenResult();
      const response: IResponse = {
        operationType: userCredential.operationType,
        user: {
          accessToken: tokenResult.token,
          uid: user.uid,
          email: user.email ?? '',
        },
      };
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка авторизации');
    }
  }
);

export const createUser = createAsyncThunk<IResponse, IAuth, { rejectValue: string }>(
  'user/createNewUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user: User = userCredential.user;
      const tokenResult = await user.getIdTokenResult();
      const response: IResponse = {
        operationType: userCredential.operationType,
        user: {
          accessToken: tokenResult.token,
          uid: user.uid,
          email: user.email ?? '',
        },
      };
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка регистрации');
    }
  }
);
