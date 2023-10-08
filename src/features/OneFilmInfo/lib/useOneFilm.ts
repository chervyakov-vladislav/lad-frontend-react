import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { fetchOneFilm } from '@/shared/api/fetchOneFilm';

import { clearData } from '../model/oneFilmSIice';

export const useOneFilm = () => {
  const { filmId } = useParams();
  const dispatch = useAppDispatch();

  const { isLoading, film } = useAppSelector((state) => state.onefilm);

  useEffect(() => {
    dispatch(fetchOneFilm(filmId ?? '1'));

    return () => {
      dispatch(clearData());
    };
  }, [filmId]);

  return {
    isLoading,
    film,
  };
};
