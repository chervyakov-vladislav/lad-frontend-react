import { ComponentProps, ElementType, ReactNode } from 'react';

import style from './style.module.scss';
import classNames from 'classnames';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode;
  classes?: string;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export function Button<E extends ElementType = typeof defaultElement>({
  children,
  classes = '',
  as,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName className={classNames(style.button, classes)} {...otherProps}>
      {children}
    </TagName>
  );
}
