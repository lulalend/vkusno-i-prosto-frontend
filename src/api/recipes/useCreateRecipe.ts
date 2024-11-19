import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createRecipe } from './recipesApi.ts';
import { RecipeForCreate } from '../../types/types.ts';
import { recipeKeys } from '../queryParam.ts';

export const useCreateRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [recipeKeys.create],
    mutationFn: (recipe: RecipeForCreate) => createRecipe(recipe),
    onSuccess: () => {
      toast.success('Спасибо за рецепт :)');
      queryClient.invalidateQueries({
        queryKey: [recipeKeys.getCreated],
      });
    },
  });

  return { mutate, isPending };
};
