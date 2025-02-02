import { api } from './api';

export const searchProducts = async (query: string) => {
  const { data } = await api.get('/products/search', { params: { query } });
  return data;
};

export const getPaginatedProducts = async (page: number, limit: number) => {
  const { data } = await api.get('/products', { params: { page, limit } });
  return data;
};

export const fetchProductsByView = async () => {
  const { data } = await api.get('/products/trend');
  return data;
}
