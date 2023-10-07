import styles from './style.module.scss';
import classNames from 'classnames';

export const Films = () => {
  return <div className={classNames('container', styles.films)}>FilmsList</div>;
};
