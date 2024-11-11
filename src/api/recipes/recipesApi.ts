import axios, { AxiosError } from 'axios';
import type { Recipe } from '../../types/types.ts';

const URL: string = 'http://localhost:8000/recipes';
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

export const getAllRecipes = () => axios.get<Recipe[]>(URL);

export const getRecipeById = (id: string) => axios.get<Recipe>(`${URL}/${id}`);

// возможно тут в аргументе типа пригодиться Omit
export const createRecipe = (recipe: Recipe) => axios.post(URL, recipe, config);
