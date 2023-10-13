import { useCallback } from 'react';

import { useAuth, useModal } from '@/shared/lib';
import { useAppDispatch } from '@/app/providers/storeProvider';
import { removeUser } from '@/widgets/Header/model/userSlice';

export const useLoginButton = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const { handleCloseModal, openModal, showModal } = useModal();

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement, Event>) => {
    openModal(event);
  }, []);

  const handleExit = useCallback(() => {
    dispatch(removeUser());
  }, []);

  return {
    handleCloseModal,
    handleClick,
    handleExit,
    showModal,
    isAuth,
  };
};
