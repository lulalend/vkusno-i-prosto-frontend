import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getMyRecipes } from './recipesApi.ts';
import type { RecipesResponse } from '../../types/types.ts';

export const useMyRecipes = () => {
  const { data, isLoading } = useQuery<RecipesResponse, AxiosError>({
    queryKey: ['my recipes'],
    queryFn: () => getMyRecipes().then((response) => response.data),
  });

  const myRecipes = data?.recipes || [];

  return { myRecipes, isLoading };
};
