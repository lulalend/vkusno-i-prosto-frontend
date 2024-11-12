import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { getAllRecipes } from './recipesApi.ts';
import { Recipe } from '../../types/types.ts';
import { getErrorMessage } from '../../constants/userMessages.ts';

export const useRecipes = () => {
  const { data, isLoading, isSuccess, error } = useQuery<Recipe[], AxiosError>({
    queryKey: ['recipes'],
    queryFn: () => getAllRecipes().then((response) => response.data),
  });

  // TODO: почистить
  useEffect(() => {
    if (isSuccess) console.log(data);
  }, [isSuccess, data]);

  useEffect(() => {
    const statusCode = error?.status;

    if (statusCode) {
      toast.error(getErrorMessage(statusCode));
    }
  }, [error]);

  return { data, isLoading };
};
