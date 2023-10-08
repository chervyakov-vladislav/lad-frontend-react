import { ComponentProps, ElementType, ReactNode, forwardRef, Ref } from 'react';

import style from './style.module.scss';
import classNames from 'classnames';
import { Spinner } from '../Spinner';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  isLoading?: boolean;
  classes?: string;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export function ButtonComponent<E extends ElementType = typeof defaultElement>(
  { children, isLoading = false, classes = '', as, ...otherProps }: ButtonProps<E>,
  ref: Ref<HTMLButtonElement>
) {
  const TagName = as || defaultElement;

  return (
    <TagName ref={ref} className={classNames(style.button, classes)} {...otherProps}>
      {isLoading ? <Spinner /> : children}
    </TagName>
  );
}

const Button = forwardRef(ButtonComponent);

export { Button };
