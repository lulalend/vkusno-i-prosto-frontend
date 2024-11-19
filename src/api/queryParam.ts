const host = 'http://51.250.98.4:8080/v1';

export const URL: string = `${host}/recipes`;
export const FAVORITE_URL: string = `${host}/favorites`;
export const TOKEN_URL: string = `${host}/token`;
export const USERS_URL: string = `${host}/users`;

export const getConfig = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  };
};

export const recipesQueryKey = (
  limit: number,
  offset: number,
  name: string,
  includeIngredient: string,
  excludeIngredient: string,
) => ['recipes', { limit, offset, name, includeIngredient, excludeIngredient }];
export const recipeCreateQueryKey = ['create recipe'];
export const recipeDeleteQueryKey = ['delete recipe'];
export const recipeUpdateQueryKey = ['update recipe'];
export const recipesCreatedQueryKey = ['created recipe'];
export const recipeByIdQueryKey = (id: string) => ['recipe', { id }];

export const favoritesQueryKey = ['favorite recipes'];
export const favoritesAddQueryKey = ['add favorite recipe'];
export const favoritesDeleteQueryKey = ['delete favorite recipe'];
export const isFavoritesQueryKey = (id: string) => ['favorite recipes', { id }];
