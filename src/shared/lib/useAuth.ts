import { useAppSelector } from '@/app/providers/storeProvider';

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: Boolean(token),
    email,
    token,
    id,
  };
};
