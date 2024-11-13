import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { getAllRecipes } from './recipesApi.ts';
import { Recipe } from '../../types/types.ts';

export const useRecipes = () => {
  const { data, isLoading, isSuccess } = useQuery<Recipe[], AxiosError>({
    queryKey: ['recipes'],
    queryFn: () => getAllRecipes().then((response) => response.data),
  });

  // TODO: почистить
  useEffect(() => {
    if (isSuccess) console.log(data);
  }, [isSuccess, data]);

  return { data, isLoading };
};
