import React, { useEffect } from 'react';
import styles from './style.module.scss';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { IconTopFilms } from '@/shared/assets';
import { TopFilmCard } from '@/entities';
import { QUERY_TOP_FILMS } from '@/pages';
import { setFilms } from '@/features/FilmsList/model/filmspageSlice';
import { Spinner } from '@/shared/ui';

import { fetchTopFilms } from '@/shared/api';
import { useNavigate } from 'react-router-dom';

interface ITopFilms {
  title: string;
  query: QUERY_TOP_FILMS;
}

export const TopFilms: React.FC<ITopFilms> = ({ title, query }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { films_best, films_top, isLoading, pagesCountBest, pagesCountTop } = useAppSelector(
    (state) => state.topFilms
  );

  useEffect(() => {
    if (!films_best.length || !films_top.length) dispatch(fetchTopFilms({ query }));
  }, []);

  const data = query === QUERY_TOP_FILMS.BEST250 ? films_best : films_top;

  const handleNavigate = () => {
    dispatch(
      setFilms({
        films: data,
        query,
        title,
        pagesCount: query === QUERY_TOP_FILMS.BEST250 ? pagesCountBest : pagesCountTop,
      })
    );
    navigate('/films');
  };

  return (
    <article className={styles['top-films']}>
      <header onClick={handleNavigate} className={styles['top-films__header']}>
        <h2 className={styles['top-films__title']}>{title}</h2>
        <IconTopFilms className={styles['top-films__icon']} />
      </header>

      {isLoading ? (
        <div className={styles['top-films__loading']}>
          <Spinner />
        </div>
      ) : (
        <ul className={styles['top-films__list']}>
          {data.map((film, index) => {
            if (index < 7) {
              return (
                <li key={film.filmId}>
                  <TopFilmCard {...film} />
                </li>
              );
            }
          })}
        </ul>
      )}
    </article>
  );
};
