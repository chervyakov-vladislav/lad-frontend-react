import { useState } from 'react';

export const useAuthModal = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordVisible((p) => !p);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return { handleSubmit, handleShowPassword, isPasswordVisible };
};
