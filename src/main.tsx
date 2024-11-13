import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { App } from './App.tsx';
import './index.css';
import { queryClient } from './api/queryClient.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <div style={{ fontSize: '20px' }}>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
