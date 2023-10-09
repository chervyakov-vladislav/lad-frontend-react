import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { fetchOneFilm } from '@/shared/api/fetchOneFilm';

import { clearData } from '../model/oneFilmSIice';

export const useOneFilm = () => {
  const { filmId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, film, error } = useAppSelector((state) => state.onefilm);

  useEffect(() => {
    dispatch(fetchOneFilm(filmId ?? '1'));

    return () => {
      dispatch(clearData());
    };
  }, [filmId]);

  useEffect(() => {
    if (error.length) {
      navigate('/404');
    }
  }, [film]);

  return {
    isLoading,
    film,
  };
};
