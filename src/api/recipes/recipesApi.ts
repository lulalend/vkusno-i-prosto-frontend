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
  includeIngredient: string,
  excludeIngredient: string,
) =>
  axios.get<RecipesResponse>(URL, {
    params: { limit, offset, name, includeIngredient, excludeIngredient },
  });

export const getMyRecipes = () =>
  axios.get<RecipesResponse>(`${URL}/user`, getConfig());

export const getRecipeById = (id: string) => axios.get<Recipe>(`${URL}/${id}`);

export const createRecipe = (recipe: RecipeForCreate) =>
  axios.post(URL, recipe, getConfig());

export const updateRecipe = (recipe: RecipeForUpdate) =>
  axios.put(URL, recipe, getConfig());

export const deleteRecipe = (id: string) =>
  axios.put(`${URL}/${id}`, getConfig());
