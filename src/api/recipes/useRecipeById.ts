import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getRecipeById } from './recipesApi.ts';
import { Recipe } from '../../types/types.ts';

type Props = {
  id: string;
};

export const useRecipeById = ({ id }: Props) => {
  const { data, isLoading } = useQuery<Recipe, AxiosError>({
    queryKey: ['recipe', { id }],
    queryFn: () => getRecipeById(id).then((response) => response.data),
    enabled: !!id,
  });

  return { data, isLoading };
};
