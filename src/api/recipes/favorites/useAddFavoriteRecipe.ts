import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addFavoriteRecipe } from './favoriteRecipesApi.ts';

export const useAddFavoriteRecipe = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['add favorite recipe'],
    mutationFn: (id: string) => addFavoriteRecipe(id),
    onSuccess: () => {
      toast.success('Спасибо за рецепт :)');
      queryClient.invalidateQueries({
        queryKey: ['favorite recipes'],
      });
    },
  });

  return { mutate, isPending };
};
