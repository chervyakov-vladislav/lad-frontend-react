import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={style.header}>
      <Link className={style.header} to={'/'}>
        Home
      </Link>
      <Link to={'/films'}>Films</Link>
      <Link to={'/somepage'}>SomePage</Link>
    </div>
  );
};
