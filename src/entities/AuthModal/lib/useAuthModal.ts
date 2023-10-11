import { useState } from 'react';

export const useAuthModal = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordVisible((p) => !p);
  };

  const handleChangeModalState = () => {
    setIsRegistration((p) => !p);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return {
    isRegistration,
    isPasswordVisible,
    handleSubmit,
    handleShowPassword,
    handleChangeModalState,
  };
};
