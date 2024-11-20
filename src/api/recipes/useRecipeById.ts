import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getRecipeById } from './recipesApi.ts';
import { Recipe } from '../../types/types.ts';
import { recipeByIdQueryKey } from '../queryParam.ts';

export const useRecipeById = (id: string) => {
  const { data, isLoading } = useQuery<Recipe, AxiosError>({
    queryKey: recipeByIdQueryKey(id),
    queryFn: () => getRecipeById(id).then((response) => response.data),
    enabled: !!id,
  });

  return { data, isLoading };
};
