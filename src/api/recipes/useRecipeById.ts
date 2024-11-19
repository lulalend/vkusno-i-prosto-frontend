import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getRecipeById } from './recipesApi.ts';
import { Recipe } from '../../types/types.ts';
import { recipeKeys } from '../queryParam.ts';

export const useRecipeById = (id: string) => {
  const { data, isLoading } = useQuery<Recipe, AxiosError>({
    queryKey: [recipeKeys.getOne, { id }],
    queryFn: () => getRecipeById(id).then((response) => response.data),
    enabled: !!id,
  });

  return { data, isLoading };
};
