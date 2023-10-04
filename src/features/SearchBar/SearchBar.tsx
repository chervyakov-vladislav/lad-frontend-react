import style from './style.module.scss';

import { IconSearch } from '@/shared/assets';
import { Input } from '@/shared/ui';

export const SearchBar = () => {
  return (
    <form className={style.searchbar}>
      <Input
        className={style.searchbar__input}
        type='text'
        placeholder='Фильмы, сериалы, персоны'
      />
      <IconSearch className={style.searchbar__icon} />
    </form>
  );
};
