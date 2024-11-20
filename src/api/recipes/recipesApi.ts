import axios from 'axios';
import type {
  Recipe,
  RecipeForCreate,
  RecipeForUpdate,
  RecipesResponse,
} from '../../types/types.ts';
import { getConfig, URL } from '../queryParam.ts';

export const getAllRecipes = (
  limit: number,
  offset: number,
  name: string,
  includeIngredients: string,
  excludeIngredients: string,
) =>
  axios.get<RecipesResponse>(URL, {
    timeout: 2000,
    params: { limit, offset, name, includeIngredients, excludeIngredients },
  });

export const getMyRecipes = () =>
  axios.get<RecipesResponse>(`${URL}/user`, getConfig());

export const getRecipeById = (id: string) =>
  axios.get<Recipe>(`${URL}/${id}`, { timeout: 2000 });

export const createRecipe = (recipe: RecipeForCreate) =>
  axios.post(URL, recipe, getConfig());

export const updateRecipe = (recipe: RecipeForUpdate) =>
  axios.put(URL, recipe, getConfig());

export const deleteRecipe = (id: string) =>
  axios.put(`${URL}/${id}`, getConfig());
