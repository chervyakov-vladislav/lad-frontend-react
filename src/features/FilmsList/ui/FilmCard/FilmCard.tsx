import React from 'react';
import styles from './style.module.scss';

import { ITopFilm } from '@/shared/types';

import { getEngnameYearTotalTime, getRating, getTypeCountry } from '../../lib/formatData';

export const FilmCard: React.FC<ITopFilm & { count: number }> = ({
  posterUrlPreview,
  nameRu,
  count,
  filmLength,
  nameEn,
  year,
  type,
  countries,
  rating,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles['card__count']}>{count + 1}</div>
      <img className={styles['card__image']} src={posterUrlPreview} alt={nameRu} />
      <div className={styles['card__desc']}>
        <div className={styles['card__title']}>{nameRu}</div>
        <div className={styles['card__info']}>
          {getEngnameYearTotalTime(nameEn, year, filmLength)}
        </div>
        <div className={styles['card__info']}>{getTypeCountry(type, countries)}</div>
      </div>
      <div className={styles['card__rating']}>{getRating(rating)}</div>
    </article>
  );
};
