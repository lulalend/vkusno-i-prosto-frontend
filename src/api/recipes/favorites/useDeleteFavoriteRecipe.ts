import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteFavoriteRecipe } from './favoriteRecipesApi.ts';

export const useDeleteFavoriteRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['delete favorite recipe'],
    mutationFn: (id: string) => deleteFavoriteRecipe(id),
    onSuccess: () => {
      toast.success('Удалили рецепт из сохранённого :)');
      queryClient.invalidateQueries({
        queryKey: ['favorite recipes'],
      });
    },
  });

  return { mutate, isPending };
};
