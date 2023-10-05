import { useAppSelector } from '@/app/providers/storeProvider';

export const useSuggestionList = () => {
  const { films, isLoading } = useAppSelector((state) => state.searchbar);

  return {
    films: films?.films.filter((_, index) => index < 5),
    isLoading,
  };
};
