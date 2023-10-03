import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import homeSlice from '@/pages/Home/model/homeSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
