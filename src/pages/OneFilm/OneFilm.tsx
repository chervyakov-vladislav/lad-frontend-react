import classNames from 'classnames';
import styles from './styles.module.scss';

import { OneFilmInfo } from '@/features';

export const OneFilm = () => {
  return (
    <section className={classNames(styles['one-film'], 'container')}>
      <OneFilmInfo />
    </section>
  );
};
