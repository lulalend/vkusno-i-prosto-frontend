import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { createRecipe } from './recipesApi.ts';
import { Recipe } from '../../types/types.ts';
import { getErrorMessage } from '../../constants/userMessages.ts';

export const useCreateRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['create recipe'],
    mutationFn: (recipe: Recipe) => createRecipe(recipe),
    onSuccess: () => {
      toast.success('Спасибо за рецепт :)');
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
    },
    onError: (error: AxiosError) => {
      const statusCode = error.status;

      if (statusCode) {
        toast.error(getErrorMessage(statusCode));
      }
    },
  });

  return { mutate, isPending };
};
