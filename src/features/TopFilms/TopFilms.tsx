import React from 'react';
import styles from './style.module.scss';

import { IconTopFilms } from '@/shared/assets';
import { TopFilmCard } from '@/entities';

interface ITopFilms {
  title: string;
  query: string;
}

export const TopFilms: React.FC<ITopFilms> = ({ title, query }) => {
  console.log(query);

  return (
    <article className={styles['top-films']}>
      <header className={styles['top-films__header']}>
        <h2 className={styles['top-films__title']}>{title}</h2>
        <IconTopFilms className={styles['top-films__icon']} />
      </header>
      <ul>
        <li>
          <TopFilmCard />
        </li>
        <li>
          <TopFilmCard />
        </li>
        <li>
          <TopFilmCard />
        </li>
        <li>
          <TopFilmCard />
        </li>
      </ul>
    </article>
  );
};
