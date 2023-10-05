import classNames from 'classnames';
import style from './style.module.scss';
import { IconModalExit } from '@/shared/assets';

type ModalHeaderProps = {
  handleClick: () => void;
  classNameBtn?: string;
  classNameLogo?: string;
  text?: string;
};

export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  const { handleClick, classNameBtn, classNameLogo, text } = props;
  return (
    <div className={style['modal-header']}>
      {text && <span className={style['modal-header__header-text']}>{text}</span>}
      <button
        type='button'
        className={classNames(style['modal-header__button'], classNameBtn)}
        onClick={handleClick}
      >
        <IconModalExit className={classNames(style['modal-header__logo'], classNameLogo)} />
      </button>
    </div>
  );
};
