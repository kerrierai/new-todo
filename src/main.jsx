import React from 'react';
import './App.scss';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import TodoProvider from './context/TodoProvider.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <TodoProvider>
    <BrowserRouter>
      <App />
      <ReactQueryDevtools />
    </BrowserRouter>
    </TodoProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
