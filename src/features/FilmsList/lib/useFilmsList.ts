import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';

import { fetchFilms } from '../model/acyncActions';

export const useFilmsList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, films, title, currentPage } = useAppSelector((state) => state.filmspage);

  useEffect(() => {
    if (!films.length) {
      dispatch(fetchFilms());
    }
  }, [dispatch, fetchFilms]);

  return {
    films,
    title,
    isLoading,
    currentPage,
  };
};
