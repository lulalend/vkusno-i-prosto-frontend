import { useMutation } from '@tanstack/react-query';
import { signIn } from './userApi.ts';
import { SignInRequest, SignInResponse } from '../../types/types.ts';

export const useSignIn = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['sign in'],
    mutationFn: (data: SignInRequest) =>
      signIn(data).then((response) => response.data),
    onSuccess: (data: SignInResponse) => {
      localStorage.setItem('token', data.token);
    },
  });

  return { mutate, isPending };
};
