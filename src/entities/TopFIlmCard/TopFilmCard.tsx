import React from 'react';
import styles from './style.module.scss';

import { ITopFilm } from '@/shared/types';

export const TopFilmCard: React.FC<ITopFilm> = ({ posterUrlPreview, nameRu, genres, year }) => {
  return (
    <article className={styles['top-film-card']}>
      <div className={styles['top-film-card__img-container']}>
        <img className={styles['top-film-card__img']} src={posterUrlPreview} alt={nameRu} />
      </div>
      <h2 className={styles['top-film-card__title']}>{nameRu}</h2>
      <footer className={styles['top-film-card__desc']}>
        <p className={styles['top-film-card__year']}>{year}</p>
        <p className={styles['top-film-card__genre']}>{genres[0].genre}</p>
      </footer>
    </article>
  );
};
