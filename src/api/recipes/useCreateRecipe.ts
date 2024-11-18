import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createRecipe } from './recipesApi.ts';
import { RecipeForCreate } from '../../types/types.ts';

export const useCreateRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['create recipe'],
    mutationFn: (recipe: RecipeForCreate) => createRecipe(recipe),
    onSuccess: () => {
      toast.success('Спасибо за рецепт :)');
      queryClient.invalidateQueries({
        queryKey: ['recipes', 'my recipes'],
      });
    },
  });

  return { mutate, isPending };
};
