import { QueryCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { getErrorMessage, getInfoMessage } from './constants/userMessages.ts';

export const recipeKeys = {
  getAll: 'recipes',
  getOne: 'recipe',
  create: 'create recipe',
  update: 'update recipe',
  delete: 'delete recipe',
  getCreated: 'created recipes',
};

export const favoriteRecipesKeys = {
  getAll: 'favorite recipes',
  add: 'add favorite recipe',
  delete: 'delete favorite recipe',
};

const errorFunction = (error: Error) => {
  if (error instanceof AxiosError) {
    const statusCode = error.status;

    if (statusCode) {
      toast.error(getErrorMessage(statusCode));
    } else {
      toast.error(getInfoMessage('defaultMessage'));
    }
  }
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      errorFunction(error);
    },
  }),
  defaultOptions: {
    mutations: {
      onError: (error) => {
        errorFunction(error);
      },
    },
  },
});
