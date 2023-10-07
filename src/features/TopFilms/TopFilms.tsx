import React, { useEffect } from 'react';
import styles from './style.module.scss';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { IconTopFilms } from '@/shared/assets';
import { TopFilmCard } from '@/entities';
import { QUERY_TOP_FILMS } from '@/pages';

import { fetchTopFilms } from './model/asyncActions';
import { Spinner } from '../../shared/ui';

interface ITopFilms {
  title: string;
  query: QUERY_TOP_FILMS;
}

export const TopFilms: React.FC<ITopFilms> = ({ title, query }) => {
  const dispatch = useAppDispatch();
  const { films_best, films_top, isLoading } = useAppSelector((state) => state.topFilms);

  useEffect(() => {
    dispatch(fetchTopFilms(query));
  }, [dispatch, query]);

  const data = query === QUERY_TOP_FILMS.BEST250 ? films_best : films_top;

  return (
    <article className={styles['top-films']}>
      <header className={styles['top-films__header']}>
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
