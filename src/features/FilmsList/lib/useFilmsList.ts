import { useEffect, useRef } from 'react';

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

  console.log(isVisible);

  useUpdateEffect(() => {
    if (currentPage < totalPages && !isAdditionalLoading && films.length > 0) {
      dispatch(fetchTopFilms({ query, page: currentPage + 1 }));
    }
  }, [isVisible]);

  useEffect(() => {
    if (!films.length) {
      dispatch(fetchTopFilms({}));
    }
  }, [dispatch]);

  return {
    films,
    title,
    isAdditionalLoading,
    ref,
    totalPages,
    currentPage,
  };
};
