import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addFavoriteRecipe } from './favoriteRecipesApi.ts';
import { favoritesAddQueryKey } from '../../queryParam.ts';

export const useAddFavoriteRecipe = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: favoritesAddQueryKey,
    mutationFn: (id: string) => addFavoriteRecipe(id),
    onSuccess: () => {
      toast.success('Добавили в сохранённое :)');
    },
  });

  return { mutate, isPending };
};
