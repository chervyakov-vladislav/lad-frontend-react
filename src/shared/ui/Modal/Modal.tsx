import { ReactNode, useRef } from 'react';
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
  const overlayRef = useRef(null);
  if (!children) return null;

  const handleExit = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === overlayRef.current) {
      handleClose();
    }
  };

  return (
    <Portal>
      <div className={classNames(style['shared-modal'], style['shared-modal__opened'])}>
        <div className={style['shared-modal__overlay']} ref={overlayRef} onMouseDown={handleExit}>
          <div className={style['shared-modal__grid']} style={{ maxWidth }}>
            <div className={style['shared-modal__content']}>
              <ModalHeader handleClick={handleClose} text={headerTitle} />
              <div className={style['shared-modal__content-container']}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
