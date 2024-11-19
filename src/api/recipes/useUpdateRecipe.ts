import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateRecipe } from './recipesApi.ts';
import { RecipeForUpdate } from '../../types/types.ts';
import { recipeKeys } from '../../queryClient.ts';

export const useUpdateRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [recipeKeys.update],
    mutationFn: (recipe: RecipeForUpdate) => updateRecipe(recipe),
    onSuccess: () => {
      toast.success('Обновили рецепт :)');
      queryClient.invalidateQueries({
        queryKey: [recipeKeys.getAll],
      });
    },
  });

  return { mutate, isPending };
};
