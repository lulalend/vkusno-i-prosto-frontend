import axios from 'axios';
import type {
  Recipe,
  RecipeForCreate,
  RecipeForUpdate,
  RecipesResponse,
} from '../../types/types.ts';

const URL: string = 'http://147.45.165.69:8080/v1/recipes';
const FAVORITE_URL: string = 'http://147.45.165.69:8080/v1/favorites';
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

export const getAllRecipes = (limit: number, offset: number) =>
  axios.get<RecipesResponse>(URL, {
    params: { limit, offset },
  });

export const getMyRecipes = () =>
  axios.get<RecipesResponse>(`${URL}/user`, config);

export const getFavoriteRecipes = () =>
  axios.get<RecipesResponse>(FAVORITE_URL, config);

export const getRecipeById = (id: string) =>
  axios.get<Recipe>(`${URL}/${id}`, config);

export const createRecipe = (recipe: RecipeForCreate) =>
  axios.post(URL, recipe, config);

export const updateRecipe = (recipe: RecipeForUpdate) =>
  axios.put(URL, recipe, config);

export const deleteRecipe = (id: string) => axios.put(`${URL}/${id}`, config);
