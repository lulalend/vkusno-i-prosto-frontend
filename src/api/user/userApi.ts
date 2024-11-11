import axios from 'axios';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
} from '../../types/types.ts';

const URL: string = 'http://localhost:8000/v1';
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
};

export const signUp = (data: SignUpRequest) => axios.post(`${URL}/users`, data);

export const signIn = (data: SignInRequest) =>
  axios.post<SignInResponse>(`${URL}/token`, data, config);
