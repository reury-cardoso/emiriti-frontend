import { createContext, ReactNode, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPaginatedProducts, searchProducts } from '../services/products';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  artisanId: string;
  createdAt: string;
  updatedAt: string;
  images: { url: string }[];
  artisan: { name: string };
};

type Meta = {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};

type ProductsContextData = {
  products: { data: Product[]; meta: Meta } | undefined;
  isLoading: boolean;
  search: (query: string) => void;
};

const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => getPaginatedProducts(1, 5),
  });

  const search = async (query: string) => {
    await searchProducts(query);
  };

  return <ProductsContext.Provider value={{ products, isLoading, search }}>{children}</ProductsContext.Provider>;
};

export const useProducts = () => useContext(ProductsContext);
