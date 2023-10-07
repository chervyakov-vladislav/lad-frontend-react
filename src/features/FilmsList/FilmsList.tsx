import styles from './styles.module.scss';

import { Spinner } from '@/shared/ui';

import { useFilmsList } from './lib/useFilmsList';
import { FilmCard } from './ui';

export const FilmsList = () => {
  const { isLoading, films, title } = useFilmsList();

  return isLoading ? (
    <Spinner />
  ) : (
    <section className={styles['film-list']}>
      <h1 className={styles['film-list__title']}>{title}</h1>
      <ul className={styles['film-list__list']}>
        {films.map((film, index) => (
          <li key={film.filmId}>
            <FilmCard {...film} count={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};
