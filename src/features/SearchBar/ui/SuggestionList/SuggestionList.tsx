import styles from './styles.module.scss';

import { useSuggestionList } from './lib';

export const SuggestionList = () => {
  const { films, ref, getGenresString } = useSuggestionList();

  return (
    <ul className={styles.suggestions} ref={ref}>
      {films &&
        films?.map((film) => (
          <li key={film.filmId} className={styles.suggestions__card}>
            <img
              className={styles.suggestions__image}
              src={film.posterUrlPreview}
              alt={film.nameEn}
            />
            <div className={styles.suggestions__description}>
              <h3 className={styles.suggestions__header}>{film.nameRu}</h3>
              <p className={styles.suggestions__string}>
                {film.rating !== 'null' && (
                  <span
                    className={
                      parseFloat(film.rating) <= 7.4
                        ? styles.suggestions__rating
                        : styles.suggestions__green
                    }
                  >
                    {film.rating}
                  </span>
                )}
                <span className={styles.suggestions__type}>{getGenresString(film.genres)}</span>
              </p>
            </div>
          </li>
        ))}
      {films && films.length === 0 && (
        <h3 className={styles.suggestions__card}>Ничего не найдено</h3>
      )}
    </ul>
  );
};
