import { useCallback, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { useDebounce } from '@/shared/lib';

import { fetchFilmsSearchbar } from '@/shared/api';

export const useSearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const abortFuncs = useRef<(() => void)[]>([]);
  const debouncedValue = useDebounce<string>(searchValue, 500);

  const dispatch = useAppDispatch();
  const { isLoading, films } = useAppSelector((state) => state.searchbar);

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  }, []);

  const handleSearch = () => {
    const abortController = new AbortController();
    const fetchParams = {
      searchValue: debouncedValue,
      signal: abortController.signal,
    };

    if (debouncedValue.length) {
      dispatch(fetchFilmsSearchbar(fetchParams));
    }

    if (abortFuncs.current && debouncedValue.length) {
      abortFuncs.current.unshift(abortController.abort.bind(abortController));
    }

    if (abortFuncs.current.length > 1) {
      const abort = abortFuncs.current.pop();
      if (abort) {
        abort();
      }
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const fetchParams = {
      searchValue: debouncedValue,
      signal: abortController.signal,
    };

    if (debouncedValue.length) {
      dispatch(fetchFilmsSearchbar(fetchParams));
    }

    if (abortFuncs.current && debouncedValue.length) {
      abortFuncs.current.unshift(abortController.abort.bind(abortController));
    }

    if (abortFuncs.current.length > 1) {
      const abort = abortFuncs.current.pop();
      if (abort) {
        abort();
      }
    }
    return () => abortController.abort();
  }, [dispatch, debouncedValue]);

  return {
    isLoading,
    searchValue,
    handleInput,
    handleSearch,
    films,
  };
};
