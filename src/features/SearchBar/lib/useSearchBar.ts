import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { useEffect } from 'react';
import { fetchFilms } from '../model/actionCreators';

export const useSearchBar = () => {
  const dispatch = useAppDispatch();
  const { films } = useAppSelector((state) => state.searchbar);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchParams = {
      signal: abortController.signal,
    };

    dispatch(fetchFilms(fetchParams));
    return () => abortController.abort();
  }, [dispatch]);

  useEffect(() => {
    console.log(films);
  }, [films]);
};
