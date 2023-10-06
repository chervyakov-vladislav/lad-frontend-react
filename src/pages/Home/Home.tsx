import classNames from 'classnames';
import styles from './style.module.scss';

import { TopFilms } from '@/features/TopFilms';

enum QUERY {
  POPULAR100 = 'TOP_100_POPULAR_FILMS',
  BEST250 = 'TOP_250_BEST_FILMS',
}
enum TITLE {
  POPULAR100 = 'Рекомендации',
  BEST250 = 'Лучшие фильмы',
}

export const Home = () => {
  return (
    <div className={classNames('container', styles.home)}>
      <TopFilms title={TITLE.POPULAR100} query={QUERY.POPULAR100} />
      <TopFilms title={TITLE.BEST250} query={QUERY.BEST250} />
    </div>
  );
};
