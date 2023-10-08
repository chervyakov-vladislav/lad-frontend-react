import classNames from 'classnames';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <section className={classNames('container', styles.page)}>
      Тут ничего нет <Button onClick={handleClick}>На главную</Button>
    </section>
  );
};
