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
