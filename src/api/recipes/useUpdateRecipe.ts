import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateRecipe } from './recipesApi.ts';
import { RecipeForUpdate } from '../../types/types.ts';
import { recipeUpdateQueryKey } from '../queryParam.ts';

export const useUpdateRecipe = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: recipeUpdateQueryKey,
    mutationFn: (recipe: RecipeForUpdate) => updateRecipe(recipe),
    onSuccess: () => {
      toast.success('Обновили рецепт :)');
    },
  });

  return { mutate, isPending };
};
