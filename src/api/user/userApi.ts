import axios from 'axios';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from '../../types/types.ts';

const URL: string = 'http://147.45.165.69:8080/v1';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const signUp = (data: SignUpRequest) =>
  axios.post(`${URL}/users`, data, config);

export const signIn = (data: SignInRequest) =>
  axios.post<SignInResponse>(`${URL}/token`, data, config);
