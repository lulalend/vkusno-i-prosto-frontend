import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getMyRecipes } from './recipesApi.ts';
import type { RecipesResponse } from '../../types/types.ts';
import { recipesCreatedQueryKey } from '../queryParam.ts';

export const useMyRecipes = () => {
  const { data, isLoading } = useQuery<RecipesResponse, AxiosError>({
    queryKey: recipesCreatedQueryKey,
    queryFn: () => getMyRecipes().then((response) => response.data),
  });

  const myRecipes = data?.recipes || [];

  return { myRecipes, isLoading };
};
