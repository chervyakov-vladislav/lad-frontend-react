import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import homeSlice from '@/pages/Home/model/homeSlice';
import searchbarSlice from '@/features/SearchBar/model/searchbarSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
    searchbar: searchbarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
