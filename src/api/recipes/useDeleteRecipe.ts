import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteRecipe } from './recipesApi.ts';
import { recipeKeys } from '../queryParam.ts';

export const useDeleteRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [recipeKeys.delete],
    mutationFn: (id: string) => deleteRecipe(id),
    onSuccess: () => {
      toast.success('Удалили рецепт :)');
      queryClient.invalidateQueries({
        queryKey: [recipeKeys.getAll],
      });
    },
  });

  return { mutate, isPending };
};
