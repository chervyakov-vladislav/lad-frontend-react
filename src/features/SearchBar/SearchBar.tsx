import style from './style.module.scss';

import { IconSearch } from '@/shared/assets';
import { Input } from '@/shared/ui';
import { useSearchBar } from './lib/useSearchBar';

export const SearchBar = () => {
  const { searchValue, handleInput } = useSearchBar();

  return (
    <form className={style.searchbar}>
      <Input
        className={style.searchbar__input}
        type='text'
        placeholder='Фильмы, сериалы, персоны'
        value={searchValue}
        onChange={handleInput}
      />
      <IconSearch className={style.searchbar__icon} />
    </form>
  );
};
