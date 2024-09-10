import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductPage from './pages/ProductPage';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductPage />
    </QueryClientProvider>
  );
};

export default App;
