import { api } from './api';

export const getAllArtisans = async ({ pageParam = 1 }) => {
  const { data } = await api.get('/artisans', { params: { page: pageParam, limit: 10 } });
  return data;
};

export const getArtisanById = async (id: string) => {
  const { data } = await api.get(`/artisans/${id}`);
  return data;
};

export const getProductsByArtisan = async (id: string) => {
  const { data } = await api.get(`/artisans/${id}/products`);
  return data;
};
