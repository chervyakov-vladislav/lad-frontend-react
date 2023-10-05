import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { useDebounce } from '@/shared/lib';

import { fetchFilms } from '../model/actionCreators';

export const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const dispatch = useAppDispatch();
  const { films } = useAppSelector((state) => state.searchbar);

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchParams = {
      searchValue: debouncedValue,
      signal: abortController.signal,
    };

    dispatch(fetchFilms(fetchParams));
    return () => abortController.abort();
  }, [dispatch, debouncedValue]);

  return {
    films,
    searchValue,
    handleInput,
  };
};
