import { createContext, ReactNode, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPaginatedProducts, searchProducts } from '../services/products';

type Product = {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
};

type ProductsContextData = {
  products: Product[] | undefined;
  isLoading: boolean;
  search: (query: string) => void;
};

const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const { data: products, isLoading } = useQuery({ queryKey: ['products'], queryFn: () => getPaginatedProducts(1, 10) });

  const search = async (query: string) => {
    await searchProducts(query);
  };

  return (
    <ProductsContext.Provider value={{ products, isLoading, search }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
