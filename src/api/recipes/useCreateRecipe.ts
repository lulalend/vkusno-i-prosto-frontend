import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRecipe } from './recipesApi.ts';
import { Recipe } from '../../types/types.ts';

export const useCreateRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['create recipe'],
    mutationFn: (recipe: Recipe) => createRecipe(recipe),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
    },
    // TODO: заменить обработку ошибки
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutate, isPending };
};
