import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api/productApi';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// Definisikan interface untuk Product
interface Product {
  id: number;
  name: string;
  price: number;
  stok: number;
}

const ProductPage = () => {
  const queryClient = useQueryClient();

  const { data: products, isLoading, isError } = useQuery('products', getProducts);

  const addProductMutation = useMutation(createProduct, {
    onSuccess: () => queryClient.invalidateQueries('products'),
  });

  const updateProductMutation = useMutation(({ id, product }: { id: number; product: { name?: string; description?: string; price?: number; stok?: number } }) => 
    updateProduct(id, product), {
    onSuccess: () => queryClient.invalidateQueries('products'),
  });

  const deleteProductMutation = useMutation((id: number) => deleteProduct(id), {
    onSuccess: () => queryClient.invalidateQueries('products'),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Product Management</h1>
        <div style={{ marginBottom: '20px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <ProductForm onSubmit={(product) => addProductMutation.mutate(product)} />
        </div>
        <div style={{ paddingLeft: '5rem', paddingRight: '5rem', alignItems: 'center', justifyContent: 'center' }}>
          <ProductList
            products={products}
            onUpdate={(id, product) => updateProductMutation.mutate({ id, product })}
            onDelete={(id) => deleteProductMutation.mutate(id)}
          />
        </div>
    </div>
  );
};

export default ProductPage;
