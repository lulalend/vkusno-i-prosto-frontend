import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getFavoriteRecipes } from './favoriteRecipesApi.ts';
import type { RecipesResponse } from '../../../types/types.ts';
import { favoriteRecipesKeys } from '../../queryParam.ts';

export const useFavoriteRecipes = () => {
  const { data, isLoading } = useQuery<RecipesResponse, AxiosError>({
    queryKey: [favoriteRecipesKeys.getAll],
    queryFn: () => getFavoriteRecipes().then((response) => response.data),
  });

  const favoriteRecipes = data?.recipes || [];

  return { favoriteRecipes, isLoading };
};
