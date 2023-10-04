import style from './style.module.scss';

import { IconLogin } from '@/shared/assets';

export const LoginButton = () => {
  return (
    <button className={style.login}>
      <IconLogin className={style.login__icon} />
    </button>
  );
};
