import { ReactNode } from 'react';
import classNames from 'classnames';

import { Portal } from '../Portal';
import { ModalHeader } from './ui/Header';
import style from './style.module.scss';

type ModalProps = {
  children: ReactNode;
  handleClose: () => void;
  headerTitle?: string;
  maxWidth?: string;
};
export const Modal: React.FC<ModalProps> = ({
  children,
  handleClose,
  headerTitle = '',
  maxWidth = '420px',
}) => {
  if (!children) return null;

  return (
    <Portal>
      <div className={classNames(style['shared-modal'], style['shared-modal__opened'])}>
        <div className={style['shared-modal__overlay']} id='overlay' onMouseDown={handleClose}>
          <div className={style['shared-modal__grid']} style={{ maxWidth }}>
            <div className={style['shared-modal__top-indent']}></div>
            <div className={style['shared-modal__content']}>
              <ModalHeader handleClick={handleClose} text={headerTitle} />
              <div className={style['shared-modal__content-container']}>{children}</div>
            </div>
            <div className={style['shared-modal__bottom-indent']}></div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
