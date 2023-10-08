import React from 'react';
import styles from './style.module.scss';
import { JSONAny } from '@/shared/types';

interface IProps {
  title: string;
  value: JSONAny | undefined;
}

export const DataElement: React.FC<IProps> = ({ title, value }) => {
  if (!value) return null;
  return (
    <div className={styles.data}>
      <div>{title}:</div>
      <div>{value?.toString()}</div>
    </div>
  );
};
