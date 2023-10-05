import { useCallback, useEffect, useState } from 'react';

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowModal(false);
    }
  }, []);

  const openModal = useCallback(
    (event: React.SyntheticEvent<HTMLElement, Event>) => {
      event.preventDefault();
      setShowModal(true);
      document.addEventListener('keydown', handleEscape);
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        window.innerWidth <= 953
      ) {
        document.body.classList.add('body-modal__mobile');
      } else {
        document.body.classList.add('body-modal');
      }
    },
    [handleEscape]
  );

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  useEffect(() => {
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  return {
    showModal,
    openModal,
    handleCloseModal,
  };
};
