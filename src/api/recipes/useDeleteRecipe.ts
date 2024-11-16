import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteRecipe } from './recipesApi.ts';

export const useDeleteRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['delete recipe'],
    mutationFn: (id: string) => deleteRecipe(id),
    onSuccess: () => {
      toast.success('Удалили рецепт :)');
      queryClient.invalidateQueries({
        queryKey: ['recipes'],
      });
    },
  });

  return { mutate, isPending };
};
