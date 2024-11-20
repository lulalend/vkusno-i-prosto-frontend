import { useMutation } from '@tanstack/react-query';
import { signUp } from './userApi.ts';
import { SignUpRequest } from '../../types/types.ts';

export const useSignUp = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['sign up'],
    mutationFn: (data: SignUpRequest) => signUp(data),
  });

  return { mutate, isPending };
};
