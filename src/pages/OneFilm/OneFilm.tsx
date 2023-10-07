import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';

export const OneFilm = () => {
  const { filmId } = useParams();
  return <div className={classNames(styles['one-film'], 'container')}>{filmId}</div>;
};
