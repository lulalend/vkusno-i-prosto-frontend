import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getAllRecipes } from './recipesApi.ts';
import { RecipesResponse } from '../../types/types.ts';
import { recipesQueryKey } from '../queryParam.ts';

export const useRecipes = (
  limit: number,
  offset: number,
  name: string,
  includeIngredients: string,
  excludeIngredients: string,
) => {
  const { data, isLoading } = useQuery<RecipesResponse, AxiosError>({
    queryKey: recipesQueryKey(
      limit,
      offset,
      name,
      includeIngredients,
      excludeIngredients,
    ),
    queryFn: () =>
      getAllRecipes(
        limit,
        offset,
        name,
        includeIngredients,
        excludeIngredients,
      ).then((response) => response.data),
  });

  const recipes = data?.recipes || [];
  const total = data?.total || 0;

  return { recipes, total, isLoading };
};
