import axios from 'axios';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from '../../types/types.ts';
import { getConfig, TOKEN_URL, USERS_URL } from '../queryParam.ts';

export const signUp = (data: SignUpRequest) =>
  axios.post(USERS_URL, data, getConfig());

export const signIn = (data: SignInRequest) =>
  axios.post<SignInResponse>(TOKEN_URL, data, getConfig());
