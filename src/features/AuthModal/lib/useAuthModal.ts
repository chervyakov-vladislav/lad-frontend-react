import { useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider';
import { createUser, signInUser } from '@/shared/api/authUser';
import { ValidationExpressions } from '@/shared/utils';
import { FirebaseParams } from '@/shared/configs/firebase';
import { setError, clearError } from '@/widgets/Header/model/userSlice';
import { useAuth } from '@/shared/lib';

export const useAuthModal = (closeModal: () => void) => {
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.user);
  const [isRegistration, setIsRegistration] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { isAuth } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleShowPassword = useCallback(() => {
    setIsPasswordVisible((p) => !p);
  }, []);

  const handleChangeModalState = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsRegistration((p) => !p);
  }, []);

  const handleInputEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearError());
    setEmail(event.target.value);
  }, []);

  const handleInputPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearError());
    setPassword(event.target.value);
  }, []);

  const handleInputConfirmPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearError());
    setConfirmPassword(event.target.value);
  }, []);

  const handleLogin = useCallback(
    async (event: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
      event.preventDefault();

      const isEmailValid = ValidationExpressions.Email.test(email.trim());
      const isPasswordValid = password.length >= FirebaseParams.Password_length;

      if (!isEmailValid) {
        dispatch(setError('Неправильная почта'));
        return;
      }

      if (!isPasswordValid) {
        dispatch(setError('Пароль больше 6 символов'));
        return;
      }

      await dispatch(signInUser({ email, password }));

      if (isAuth) {
        closeModal();
      }
    },
    []
  );

  const handleRegistration = useCallback(
    async (
      event: React.FormEvent<HTMLFormElement>,
      email: string,
      password: string,
      confirmPassword: string
    ) => {
      event.preventDefault();

      const isEmailValid = ValidationExpressions.Email.test(email.trim());
      const isPasswordValid =
        password.length >= FirebaseParams.Password_length && password === confirmPassword;

      if (!isEmailValid) {
        dispatch(setError('Неправильная почта'));
        return;
      }

      if (!isPasswordValid) {
        dispatch(setError('Пароль больше 6 символов или не совпадает'));
        return;
      }

      await dispatch(createUser({ email, password }));

      if (isAuth) {
        closeModal();
      }
    },
    []
  );

  return {
    error,
    email,
    password,
    confirmPassword,
    isRegistration,
    isPasswordVisible,
    isLoading,
    handleShowPassword,
    handleChangeModalState,
    handleInputEmail,
    handleInputPassword,
    handleInputConfirmPassword,
    handleLogin,
    handleRegistration,
  };
};
