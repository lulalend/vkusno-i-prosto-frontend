import axios from 'axios';
import type {
  Recipe,
  RecipeForCreate,
  RecipeForUpdate,
  RecipesResponse,
} from '../../types/types.ts';

const URL: string = 'http://147.45.165.69:8080/v1/recipes';
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

export const getAllRecipes = (
  limit: number,
  offset: number,
  name: string,
  includeIngredients: string[],
  excludeIngredients: string[],
) =>
  axios.get<RecipesResponse>(URL, {
    params: { limit, offset, name, includeIngredients, excludeIngredients },
  });

export const getMyRecipes = () =>
  axios.get<RecipesResponse>(`${URL}/user`, config);

export const getRecipeById = (id: string) =>
  axios.get<Recipe>(`${URL}/${id}`, config);

export const createRecipe = (recipe: RecipeForCreate) =>
  axios.post(URL, recipe, config);

export const updateRecipe = (recipe: RecipeForUpdate) =>
  axios.put(URL, recipe, config);

export const deleteRecipe = (id: string) => axios.put(`${URL}/${id}`, config);
