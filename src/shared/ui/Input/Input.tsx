import React, { InputHTMLAttributes, forwardRef } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => {
    return <input ref={ref} className={classNames(styles['shared-input'], className)} {...props} />;
  }
);
