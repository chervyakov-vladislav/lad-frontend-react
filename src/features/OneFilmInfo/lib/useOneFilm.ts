import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { fetchOneFilm } from '@/shared/api/fetchOneFilm';

export const useOneFilm = () => {
  const { filmId } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, film } = useAppSelector((state) => state.onefilm);

  useEffect(() => {
    dispatch(fetchOneFilm(filmId ?? '1'));
  }, [filmId]);

  return {
    isLoading,
    film,
  };
};
