import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { SearchBar } from '@/features';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={classNames(style['header__container'], 'container')}>
        <Link className={style.header__logo} to={'/'}>
          <img src="https://lad24.ru/themes/lad/assets/i/logo30.svg" alt="logo" />
        </Link>
        <SearchBar />
      </div>
    </header>
  );
};
