import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteRecipe } from './recipesApi.ts';
import { recipeKeys } from '../queryParam.ts';

export const useDeleteRecipe = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [recipeKeys.delete],
    mutationFn: (id: string) => deleteRecipe(id),
    onSuccess: () => {
      toast.success('Удалили рецепт :)');
    },
  });

  return { mutate, isPending };
};
