import { Outlet } from 'react-router-dom';
import styles from './style.module.scss';

import { Header } from '@/widgets';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
    </div>
  );
};
