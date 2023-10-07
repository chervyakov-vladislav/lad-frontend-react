import styles from './styles.module.scss';

import { useSuggestionList } from './lib';

export const SuggestionList = () => {
  const { films, ref, getGenresString, handleNavigate } = useSuggestionList();

  return (
    <ul className={styles.suggestions} ref={ref}>
      {films &&
        films?.map(({ filmId, nameRu, posterUrlPreview, rating, genres }) => (
          <li
            key={filmId}
            className={styles.suggestions__card}
            onClick={() => handleNavigate(filmId)}
          >
            <img className={styles.suggestions__image} src={posterUrlPreview} alt={nameRu} />
            <div className={styles.suggestions__description}>
              <h3 className={styles.suggestions__header}>{nameRu}</h3>
              <p className={styles.suggestions__string}>
                {rating !== 'null' && (
                  <span
                    className={
                      parseFloat(rating) <= 7.4
                        ? styles.suggestions__rating
                        : styles.suggestions__green
                    }
                  >
                    {rating}
                  </span>
                )}
                <span className={styles.suggestions__type}>{getGenresString(genres)}</span>
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
