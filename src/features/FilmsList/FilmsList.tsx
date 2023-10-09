import styles from './styles.module.scss';

import { Button } from '@/shared/ui';

import { useFilmsList } from './lib/useFilmsList';
import { FilmCard } from './ui';

export const FilmsList = () => {
  const { films, title, isAdditionalLoading, ref, totalPages, currentPage, handleClick } =
    useFilmsList();

  return (
    <section className={styles['film-list']}>
      <h1 className={styles['film-list__title']}>{title}</h1>
      <ul className={styles['film-list__list']}>
        {films.map((film, index) => (
          <li key={`${film.filmId}${index}`}>
            <FilmCard {...film} count={index} />
          </li>
        ))}
      </ul>
      {totalPages !== currentPage && films.length && (
        <Button
          onClick={handleClick}
          classes={styles['film-list__button-load']}
          isLoading={isAdditionalLoading}
          ref={ref}
        >
          Загрузить
        </Button>
      )}
    </section>
  );
};
