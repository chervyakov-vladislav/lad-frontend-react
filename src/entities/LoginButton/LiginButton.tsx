import { IconLogin } from '@/shared/assets';
import style from './style.module.scss';

export const LiginButton = () => {
  return (
    <button>
      <IconLogin className={style.login__icon} />
    </button>
  )
}
