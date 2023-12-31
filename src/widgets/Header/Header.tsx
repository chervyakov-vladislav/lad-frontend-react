import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { SearchBar } from '@/features';
import { LoginButton } from '@/features';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={classNames(style['header__container'], 'container')}>
        <Link to={'/'}>
          <img
            className={style.header__image}
            src='https://lad24.ru/themes/lad/assets/i/logo30.svg'
            alt='logo'
          />
        </Link>
        <div className={style.header__controls}>
          <SearchBar />
          <LoginButton />
        </div>
      </div>
    </header>
  );
};
