import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { signUp } from './userApi.ts';
import { SignUpRequest } from '../../types/types.ts';
import { getErrorMessage } from '../../constants/responsesMessages.ts';

export const useSignUp = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['sign up'],
    mutationFn: (data: SignUpRequest) => signUp(data),
    onSuccess: () => {
      //   выполнить SignIn запрос
    },
    onError: (error: AxiosError) => {
      const statusCode = error.status;

      if (statusCode) {
        toast.error(getErrorMessage(statusCode));
      }
    },
  });

  return { mutate, isPending };
};
