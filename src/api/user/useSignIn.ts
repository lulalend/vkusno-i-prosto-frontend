import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { signIn } from './userApi.ts';
import { SignInRequest, SignInResponse } from '../../types/types.ts';
import { getErrorMessage, getInfoMessage } from '../../constants/userMessages.ts';

export const useSignIn = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ['sign in'],
    mutationFn: (data: SignInRequest) =>
      signIn(data).then((response) => response.data),
    onSuccess: (data: SignInResponse) => {
      queryClient.setQueryData(['token'], data.token);

      const ttl = data.ttl || 3600;

      queryClient.setDefaultOptions({
        queries: {
          staleTime: ttl * 1000,
        },
      });

      localStorage.setItem('token', data.token);
    },
    onError: (error: AxiosError) => {
      console.log(error);
      const statusCode = error.status;

      if (statusCode) {
        toast.error(getErrorMessage(statusCode));
      } else {
        toast.error(getInfoMessage('defaultMessage'));
      }
    },
  });

  return { mutate, isPending };
};
