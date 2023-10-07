import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { useOnClickOutside } from '@/shared/lib';
import { resetSuggestionFilms } from '@/features/SearchBar/model/searchbarSlice';

export const useSuggestionList = () => {
  const navigate = useNavigate();
  const { films } = useAppSelector((state) => state.searchbar);
  const dispatch = useAppDispatch();
  const ref = useRef(null);

  const handleClickOutside = () => {
    dispatch(resetSuggestionFilms());
  };

  useOnClickOutside(ref, handleClickOutside);

  function getGenresString(value: { genre: string }[]) {
    return value
      .map((item, index) => {
        if (index < 2) {
          return item.genre;
        }
      })
      .filter((item) => item?.length ?? 0 > 0)
      .join(', ');
  }

  const handleNavigate = (filmId: number) => {
    navigate(`/films/${filmId}`);
    dispatch(resetSuggestionFilms());
  };

  return {
    films: films?.films.filter((_, index) => index < 5),
    ref,
    getGenresString,
    handleNavigate,
  };
};
