import styles from './style.module.scss';

import { getYear } from '@/shared/utils';
import { Spinner } from '@/shared/ui';

import { useOneFilm } from './lib/useOneFilm';
import { DataElement } from './ui';

export const OneFilmInfo = () => {
  const { film, isLoading } = useOneFilm();

  return isLoading ? (
    <Spinner />
  ) : (
    <article className={styles['one-film']}>
      <img className={styles['one-film__image']} src={film?.posterUrlPreview} alt={film?.nameRu} />
      <div className={styles['one-film__main']}>
        <h1 className={styles['one-film__title']}>{film?.nameRu}</h1>
        <div className={styles['one-film__info-table']}>
          <span className={styles['one-film__subtitle']}>О фильме</span>
          <div className={styles['one-film__data']}>
            <DataElement title='Год производства' value={getYear(film?.year ?? 1)} />
            <div className={styles['one-film__desc']}>{film?.description}</div>
          </div>
        </div>
      </div>
    </article>
  );
};
