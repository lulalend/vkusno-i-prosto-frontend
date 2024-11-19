import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteFavoriteRecipe } from './favoriteRecipesApi.ts';
import { favoriteRecipesKeys } from '../../queryParam.ts';

export const useDeleteFavoriteRecipe = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [favoriteRecipesKeys.delete],
    mutationFn: (id: string) => deleteFavoriteRecipe(id),
    onSuccess: () => {
      toast.success('Удалили рецепт из сохранённого :)');
    },
  });

  return { mutate, isPending };
};
