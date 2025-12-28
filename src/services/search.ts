import { api } from './api';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  viewCount: number;
  images: { url: string }[];
  artisan: {
    id: string;
    name: string;
    location: string;
    photo: string;
  };
}

interface Artisan {
  id: string;
  name: string;
  location: string;
  photo: string;
  bio: string;
  _count: {
    products: number;
  };
}

interface SearchResponse {
  products: Product[];
  artisans: Artisan[];
  total: {
    products: number;
    artisans: number;
  };
}

export async function searchAll(query: string): Promise<SearchResponse> {
  const response = await api.get<SearchResponse>('/search', {
    params: { query },
  });
  return response.data;
}
