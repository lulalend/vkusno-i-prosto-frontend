import { QueryCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { getErrorMessage, getInfoMessage } from './constants/userMessages.ts';

const errorFunction = (error: Error) => {
  if (error instanceof AxiosError) {
    const statusCode = error.status;

    if (statusCode) {
      let body = '';

      if (statusCode === 403 || statusCode === 401) {
        body = error.response?.data?.forbiddenType;

        if (body === 'TOKEN_EXPIRED') {
          localStorage.removeItem('token');
        }
      }
      toast.error(getErrorMessage(statusCode, body));
    } else {
      toast.error(getInfoMessage('defaultMessage'));
    }
  }
};

const retryFunction = (failureCount: number, error: Error) => {
  if (!(error instanceof AxiosError)) {
    return false;
  }

  if (error.code === 'ECONNABORTED') {
    return failureCount < 5;
  }

  if (error.response?.status) {
    return false;
  }

  return failureCount < 5;
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      errorFunction(error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: retryFunction,
    },
    mutations: {
      retry: retryFunction,
      onError: (error) => {
        errorFunction(error);
      },
    },
  },
});
