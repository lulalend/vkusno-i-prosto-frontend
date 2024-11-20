import axios from 'axios';
import type { RecipesResponse } from '../../../types/types.ts';
import { FAVORITE_URL, getConfig } from '../../queryParam.ts';

export const getFavoriteRecipes = () =>
  axios.get<RecipesResponse>(FAVORITE_URL, getConfig());

export const isFavoriteRecipe = (id: string) =>
  axios.get<boolean>(`${FAVORITE_URL}/${id}`, getConfig());

export const addFavoriteRecipe = (id: string) =>
  axios.post<boolean>(FAVORITE_URL, id, getConfig());

export const deleteFavoriteRecipe = (id: string) =>
  axios.delete(`${FAVORITE_URL}/${id}`, getConfig());
