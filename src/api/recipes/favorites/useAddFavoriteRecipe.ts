import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addFavoriteRecipe } from './favoriteRecipesApi.ts';
import { favoriteRecipesKeys } from '../../../queryClient.ts';

export const useAddFavoriteRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: [favoriteRecipesKeys.add],
    mutationFn: (id: string) => addFavoriteRecipe(id),
    onSuccess: () => {
      toast.success('Добавили в сохранённое :)');
      queryClient.invalidateQueries({
        queryKey: [favoriteRecipesKeys.getAll],
      });
    },
  });

  return { mutate, isPending };
};
