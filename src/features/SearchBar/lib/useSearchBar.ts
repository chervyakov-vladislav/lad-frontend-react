import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { useDebounce } from '@/shared/lib';

import { fetchFilms } from '../model/actionCreators';

export const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.searchbar);

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

    if (debouncedValue.length) {
      dispatch(fetchFilms(fetchParams));
    }
    return () => abortController.abort();
  }, [dispatch, debouncedValue]);

  return {
    isLoading,
    searchValue,
    handleInput,
  };
};
