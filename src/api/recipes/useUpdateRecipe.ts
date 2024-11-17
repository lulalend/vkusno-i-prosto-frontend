import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateRecipe } from './recipesApi.ts';
import { RecipeForUpdate } from '../../types/types.ts';

export const useUpdateRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['update recipe'],
    mutationFn: (recipe: RecipeForUpdate) => updateRecipe(recipe),
    onSuccess: () => {
      toast.success('Обновили рецепт :)');
      queryClient.invalidateQueries({
        queryKey: ['recipes'],
      });
    },
  });

  return { mutate, isPending };
};
