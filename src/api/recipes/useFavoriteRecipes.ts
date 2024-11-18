import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getFavoriteRecipes } from './recipesApi.ts';
import type { RecipesResponse } from '../../types/types.ts';

export const useFavoriteRecipes = () => {
  const { data, isLoading } = useQuery<RecipesResponse, AxiosError>({
    queryKey: ['favorite recipes'],
    queryFn: () => getFavoriteRecipes().then((response) => response.data),
  });

  const favoriteRecipes = data?.recipes || [];

  return { favoriteRecipes, isLoading };
};
