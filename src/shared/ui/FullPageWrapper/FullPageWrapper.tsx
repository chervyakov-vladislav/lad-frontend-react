import { ReactNode } from 'react';
import styles from './style.module.scss';

type FullPageWrapperProps = {
  children: ReactNode;
};

export const FullPageWrapper: React.FC<FullPageWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
