import { api } from './api';

export const getActiveBanner = async () => {
  const { data } = await api.get('/banners/active');
  return data;
};
