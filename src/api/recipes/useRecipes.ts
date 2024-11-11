import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getAllRecipes } from './recipesApi.ts';

export const useRecipes = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['recipes'],
    queryFn: getAllRecipes,
    select: (data) => data.data,
  });

  // TODO: почистить
  useEffect(() => {
    if (isSuccess) console.log(data);
  }, [isSuccess, data]);

  // TODO: поменять на обработку ошибки нормальную
  useEffect(() => {
    if (isError) console.log(data);
  }, [isError]);

  return { data, isLoading };
};
