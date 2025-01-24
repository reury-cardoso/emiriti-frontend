import { api } from './api';

export const getAllArtisans = async () => {
  const { data } = await api.get('/artisans');
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
