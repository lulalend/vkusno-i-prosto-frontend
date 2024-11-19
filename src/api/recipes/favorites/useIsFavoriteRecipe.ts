import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { isFavoriteRecipe } from './favoriteRecipesApi.ts';
import { isFavoritesQueryKey } from '../../queryParam.ts';

export const useIsFavoriteRecipe = (id: string) => {
  const token = localStorage.getItem('token');
  const shouldFetch = Boolean(token);

  const { data, isLoading } = useQuery<boolean, AxiosError>({
    queryKey: isFavoritesQueryKey(id),
    queryFn: () => isFavoriteRecipe(id).then((response) => response.data),
    enabled: shouldFetch,
  });

  // const favoriteRecipes = data?.recipes || [];

  return { data: shouldFetch ? data : false, isLoading };
};
