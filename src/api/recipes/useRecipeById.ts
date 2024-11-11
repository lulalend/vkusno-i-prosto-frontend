import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getRecipeById } from './recipesApi.ts';

type Props = {
  id: string;
};

export const useRecipeById = ({ id }: Props) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeById(id),
    select: (data) => data.data,
    enabled: !!id,
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
