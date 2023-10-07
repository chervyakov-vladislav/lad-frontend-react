import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import searchbarSlice from '@/features/SearchBar/model/searchbarSlice';
import topFilmSlice from '@/features/TopFilms/model/topFilmSlice';
import filmspageSlice from '@/features/FilmsList/model/filmspageSlice';

export const store = configureStore({
  reducer: {
    searchbar: searchbarSlice,
    topFilms: topFilmSlice,
    filmspage: filmspageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
