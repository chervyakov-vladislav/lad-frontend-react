import React from 'react';
import { useOneFilm } from './lib/useOneFilm';

export const OneFilmInfo = () => {
  const { isLoading, film } = useOneFilm();

  return <div>тут верстка по фильму {film?.nameRu}</div>;
};
