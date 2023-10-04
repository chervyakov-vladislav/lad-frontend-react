import { IconSearch } from '@/shared/assets';
import style from './style.module.scss';

export const SearchBar = () => {
  return (
    <form className={style.searchbar}>
      <input className={style.searchbar__input} type="text" placeholder='Фильмы, сериалы, персоны' />
      <IconSearch className={style.searchbar__icon} />
    </form>
  )
}
