import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getMyRecipes } from './recipesApi.ts';
import type { RecipesResponse } from '../../types/types.ts';
import { recipeKeys } from '../../queryClient.ts';

export const useMyRecipes = () => {
  const { data, isLoading } = useQuery<RecipesResponse, AxiosError>({
    queryKey: [recipeKeys.getCreated],
    queryFn: () => getMyRecipes().then((response) => response.data),
  });

  const myRecipes = data?.recipes || [];

  return { myRecipes, isLoading };
};
