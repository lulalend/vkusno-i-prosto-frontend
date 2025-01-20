import axios from 'axios';
import { Recipe } from '../types/types.ts';

const URL: string = 'http://localhost:8000/recipes';
const config = {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
};

export const getAllRecipes = () => axios.get(URL);

export const getRecipeById = (id: string) => axios.get(`${URL}/${id}`);

export const createRecipe = (recipe: Recipe) =>
  axios.post(URL, recipe, config);

