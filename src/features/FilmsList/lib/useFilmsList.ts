import { useCallback, useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { fetchTopFilms } from '@/shared/api';
import { useUpdateEffect, useIntersectionObserver } from '@/shared/lib';

export const useFilmsList = () => {
  const dispatch = useAppDispatch();
  const { films, title, currentPage, isAdditionalLoading, query, totalPages } = useAppSelector(
    (state) => state.filmspage
  );

  const ref = useRef<HTMLButtonElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = Boolean(entry?.isIntersecting);

  useUpdateEffect(() => {
    if (currentPage < totalPages && films.length && isVisible === true && !isAdditionalLoading) {
      dispatch(fetchTopFilms({ query, page: currentPage + 1 }));
    }
  }, [isVisible]);

  useEffect(() => {
    if (!films.length) {
      dispatch(fetchTopFilms({}));
    }
  }, [dispatch]);

  const handleClick = useCallback(() => {
    dispatch(fetchTopFilms({ query, page: currentPage + 1 }));
  }, []);

  return {
    films,
    title,
    isAdditionalLoading,
    ref,
    totalPages,
    currentPage,
    handleClick,
  };
};
