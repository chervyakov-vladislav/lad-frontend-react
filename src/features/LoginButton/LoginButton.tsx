import style from './style.module.scss';

import { IconLogin } from '@/shared/assets';
import { Modal } from '@/shared/ui';
import { AuthModal } from '@/features/AuthModal';

import { useLoginButton } from './lib';

export const LoginButton = () => {
  const { handleCloseModal, showModal, handleClick, isAuth, handleExit, email } = useLoginButton();

  return isAuth ? (
    <div onClick={handleExit} className={style.user}>
      Выйти из {email}
    </div>
  ) : (
    <>
      <button onClick={handleClick} className={style.login}>
        <IconLogin className={style.login__icon} />
      </button>
      {showModal && (
        <Modal handleClose={handleCloseModal} headerTitle='Вход'>
          <AuthModal handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};
