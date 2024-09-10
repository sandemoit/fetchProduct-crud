import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all products

export const getProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};


// Create a new product
export const createProduct = async (product: { name: string; description?: string; price: number; stok?: number }) => {
  const response = await apiClient.post('/products', product);
  return response.data;
};

// Update a product
export const updateProduct = async (id: number, product: { name?: string; description?: string; price?: number; stok?: number }) => {
  const response = await apiClient.put(`/products/${id}`, product);
  return response.data;
};


// Delete a product
export const deleteProduct = async (id: number) => {
  await apiClient.delete(`/products/${id}`);
};
