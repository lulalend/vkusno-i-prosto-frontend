import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { isFavoriteRecipe } from './favoriteRecipesApi.ts';

type Props = {
  id: string;
};

export const useIsFavoriteRecipe = ({ id }: Props) => {
  const token = localStorage.getItem('token'); // Проверяем наличие токена
  const shouldFetch = Boolean(token);

  const { data, isLoading } = useQuery<boolean, AxiosError>({
    queryKey: ['favorite recipes', { id }],
    queryFn: () => isFavoriteRecipe(id).then((response) => response.data),
    enabled: shouldFetch,
  });

  // const favoriteRecipes = data?.recipes || [];

  return { data: shouldFetch ? data : false, isLoading };
};
