import { InputHTMLAttributes, forwardRef } from 'react';
import './style.scss';
import classNames from 'classnames';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames('shared-input', { [`${className}`]: Boolean(className.length) })}
        {...props}
      />
    );
  }
);
