import axios from 'axios';
import type { Recipe } from '../../types/types.ts';

const URL: string = 'http://147.45.165.69:8080/v1/recipes';
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

export const getAllRecipes = () => axios.get<Recipe[]>(URL);

export const getRecipeById = (id: string) => axios.get<Recipe>(`${URL}/${id}`);

// возможно тут в аргументе типа пригодится Omit
export const createRecipe = (recipe: Recipe) => axios.post(URL, recipe, config);
