const host = 'http://147.45.165.69:8080/v1';

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
