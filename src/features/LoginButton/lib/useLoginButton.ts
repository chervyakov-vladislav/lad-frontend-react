import { useModal } from '@/shared/lib';

export const useLoginButton = () => {
  const { handleCloseModal, openModal, showModal } = useModal();

  const handleClick = (event: React.MouseEvent<HTMLElement, Event>) => {
    openModal(event);
  };

  return {
    handleCloseModal,
    handleClick,
    showModal,
  };
};
