import styles from './style.module.scss';

import { Button, Input } from '@/shared/ui';
import { IconShowPassword, IconHidePassword } from '@/shared/assets';

import { useAuthModal } from './lib/useAuthModal';

export const AuthModal = () => {
  const {
    isRegistration,
    isPasswordVisible,
    handleSubmit,
    handleShowPassword,
    handleChangeModalState,
  } = useAuthModal();

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles['form__header']}>
        <div>{isRegistration ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}</div>
        <button onClick={handleChangeModalState}>{isRegistration ? 'Войти' : 'Создать'}</button>
      </div>

      <div className={styles['form__inputs']}>
        <label className={styles['form__label']}>
          <span>
            Почта <span>*</span>
          </span>
          <Input type='text' />
        </label>

        <label className={styles['form__label']}>
          <span>
            Пароль <span>*</span>
          </span>
          <div className={styles['form__label--input-container']}>
            <Input type={isPasswordVisible ? 'text' : 'password'} />
            <div onClick={handleShowPassword} className={styles['form__label--icon-container']}>
              {isPasswordVisible ? (
                <IconHidePassword className={styles['form__label--icon']} />
              ) : (
                <IconShowPassword className={styles['form__label--icon']} />
              )}
            </div>
          </div>
        </label>

        {isRegistration && (
          <label className={styles['form__label']}>
            <span>
              Подтвердите пароль <span>*</span>
            </span>
            <Input type={isPasswordVisible ? 'text' : 'password'} />
          </label>
        )}
      </div>

      <div className={styles['form__button-container']}>
        <Button>{isRegistration ? 'Зарегистрироваться' : 'Войти'}</Button>
      </div>
    </form>
  );
};
