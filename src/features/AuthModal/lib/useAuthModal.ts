import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/shared/configs/firebase';

export const useAuthModal = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleShowPassword = () => {
    setIsPasswordVisible((p) => !p);
  };

  const handleChangeModalState = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsRegistration((p) => !p);
  };

  const handleLogin = (
    event: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(console.log).catch(console.log);
  };

  const handleRegistration = (
    event: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    console.log(confirmPassword);
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(console.log).catch(console.log);
  };

  return {
    email,
    password,
    confirmPassword,
    isRegistration,
    isPasswordVisible,
    handleShowPassword,
    handleChangeModalState,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleLogin,
    handleRegistration,
  };
};
