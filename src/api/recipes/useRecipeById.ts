import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { getRecipeById } from './recipesApi.ts';
import { getErrorMessage } from '../../constants/responsesMessages.ts';
import { Recipe } from '../../types/types.ts';

type Props = {
  id: string;
};

export const useRecipeById = ({ id }: Props) => {
  const { data, isLoading, isSuccess, error } = useQuery<Recipe, AxiosError>({
    queryKey: ['recipe', { id }],
    queryFn: () => getRecipeById(id).then((response) => response.data),
    enabled: !!id,
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
