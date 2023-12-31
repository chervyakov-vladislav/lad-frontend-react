import style from './style.module.scss';

import { IconSearch } from '@/shared/assets';
import { Input, Spinner } from '@/shared/ui';
import { useSearchBar } from './lib/useSearchBar';
import { SuggestionList } from './ui';

export const SearchBar = () => {
  const { searchValue, handleInput, isLoading, handleSearch, films } = useSearchBar();

  return (
    <form className={style.searchbar}>
      <Input
        className={style.searchbar__input}
        type='text'
        placeholder='Фильмы, сериалы'
        value={searchValue}
        onChange={handleInput}
      />
      {isLoading ? (
        <Spinner className={style.searchbar__loader} />
      ) : (
        <IconSearch className={style.searchbar__icon} onClick={handleSearch} />
      )}
      {films && <SuggestionList />}
    </form>
  );
};
