import styles from './style.module.scss';

import { Button, Input } from '@/shared/ui';

export const AuthModal = () => {
  return (
    <form className={styles.form}>
      <div className={styles['form__header']}>
        <div>Нет аккаунта?</div>
        <button>Создать</button>
      </div>

      <div className={styles['form__inputs']}>
        <label>
          <div>
            Почта <span>*</span>
          </div>
          <Input className={styles.input} type='text' />
        </label>

        <label>
          <div>
            Пароль <span>*</span>
          </div>
          <Input className={styles.input} type='text' />
        </label>
      </div>

      <div className={styles['form__button-container']}>
        <Button>Войти</Button>
      </div>
    </form>
  );
};
