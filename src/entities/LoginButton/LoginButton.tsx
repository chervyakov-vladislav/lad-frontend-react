import style from './style.module.scss';

import { IconLogin } from '@/shared/assets';
import { Modal } from '@/shared/ui';
import { AuthModal } from '@/entities/AuthModal';

import { useLoginButton } from './lib';

export const LoginButton = () => {
  const { handleCloseModal, showModal, handleClick } = useLoginButton();
  return (
    <>
      <button onClick={handleClick} className={style.login}>
        <IconLogin className={style.login__icon} />
      </button>
      {showModal && (
        <Modal handleClose={handleCloseModal} headerTitle='Вход'>
          <div className={style.desc}>тут будет авторизация и регистрация, если я успею</div>
          <AuthModal />
        </Modal>
      )}
    </>
  );
};
