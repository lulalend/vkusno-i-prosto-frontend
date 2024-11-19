import axios from 'axios';
import type { RecipesResponse } from '../../../types/types.ts';

const URL: string = 'http://147.45.165.69:8080/v1/favorites';
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

export const getFavoriteRecipes = () => axios.get<RecipesResponse>(URL, config);

export const isFavoriteRecipe = (id: string) =>
  axios.get<boolean>(`${URL}/${id}`, config);

export const addFavoriteRecipe = (id: string) =>
  axios.post<boolean>(URL, id, config);

export const deleteFavoriteRecipe = (id: string) =>
  axios.delete(`${URL}/${id}`, config);
