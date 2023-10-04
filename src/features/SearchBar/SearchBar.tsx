import React from 'react';

import { IconSearch } from '@/shared/assets';

export const SearchBar = () => {
  return (
    <form action="">
      <label>
        <input type="text" className="text" />
        <IconSearch />
      </label>
    </form>
  )
}
