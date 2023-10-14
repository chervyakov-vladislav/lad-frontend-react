import styles from './style.module.scss';

import { Button, Input } from '@/shared/ui';
import { IconShowPassword, IconHidePassword } from '@/shared/assets';

import { useAuthModal } from './lib/useAuthModal';

interface IProps {
  handleCloseModal: () => void;
}

export const AuthModal: React.FC<IProps> = ({ handleCloseModal }) => {
  const {
    confirmPassword,
    error,
    email,
    password,
    isRegistration,
    isPasswordVisible,
    isLoading,
    handleShowPassword,
    handleChangeModalState,
    handleInputConfirmPassword,
    handleInputEmail,
    handleInputPassword,
    handleRegistration,
    handleLogin,
  } = useAuthModal(handleCloseModal);

  return (
    <form
      onSubmit={(event) =>
        isRegistration
          ? handleRegistration(event, email, password, confirmPassword)
          : handleLogin(event, email, password)
      }
      className={styles.form}
    >
      <div className={styles['form__header']}>
        <div>{isRegistration ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}</div>
        <button onClick={handleChangeModalState}>{isRegistration ? 'Войти' : 'Создать'}</button>
      </div>

      {error && error.length && <div className={styles['form__error']}>{error}</div>}

      <div className={styles['form__inputs']}>
        <label className={styles['form__label']}>
          <span>
            Почта <span>*</span>
          </span>
          <Input type='text' value={email} onChange={handleInputEmail} />
        </label>

        <label className={styles['form__label']}>
          <span>
            Пароль <span>*</span>
          </span>
          <div className={styles['form__label--input-container']}>
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              value={password}
              onChange={handleInputPassword}
            />
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
            <Input
              type={isPasswordVisible ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleInputConfirmPassword}
            />
          </label>
        )}
      </div>

      <div className={styles['form__button-container']}>
        <Button
          isLoading={isLoading}
          classes={isRegistration ? styles['form__button-load-reg'] : styles['form__button-load']}
        >
          {isRegistration ? 'Зарегистрироваться' : 'Войти'}
        </Button>
      </div>
    </form>
  );
};
