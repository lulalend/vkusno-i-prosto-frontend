import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteFavoriteRecipe } from './favoriteRecipesApi.ts';
import { favoriteRecipesKeys } from '../../../queryClient.ts';

export const useDeleteFavoriteRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [favoriteRecipesKeys.delete],
    mutationFn: (id: string) => deleteFavoriteRecipe(id),
    onSuccess: () => {
      toast.success('Удалили рецепт из сохранённого :)');
      queryClient.invalidateQueries({
        queryKey: [favoriteRecipesKeys.getAll],
      });
    },
  });

  return { mutate, isPending };
};
