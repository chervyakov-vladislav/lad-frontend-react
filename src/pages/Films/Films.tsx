import styles from './style.module.scss';
import classNames from 'classnames';

import { FilmsList } from '@/features';

export const Films = () => {
  return (
    <section className={classNames('container', styles.films)}>
      <FilmsList />
    </section>
  );
};
