import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { useEffect } from 'react';
import { fetchFilms } from '../model/actionCreators';

export const useSearchBar = () => {
  const dispatch = useAppDispatch();
  const { films } = useAppSelector((state) => state.searchbar);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    console.log(films);
  }, [films]);
};
