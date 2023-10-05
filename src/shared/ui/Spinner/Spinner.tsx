import classNames from 'classnames';
import styles from './styles.module.scss';

import { HTMLAttributes } from 'react';

export const Spinner: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      <div className={styles['lds-ring']}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
