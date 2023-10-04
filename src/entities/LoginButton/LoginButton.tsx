import style from './style.module.scss';

import { IconLogin } from '@/shared/assets';
import { Button } from '@/shared/ui';

export const LoginButton = () => {
  return (
    <Button>
      <IconLogin className={style.login__icon} />
    </Button>
  );
};
