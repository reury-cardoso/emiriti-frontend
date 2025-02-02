import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import {
  useInfiniteQuery,
  InfiniteData,
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { fetchProductsByView, getPaginatedProducts, searchProducts } from '../services/products';

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

type PaginatedResponse = {
  data: Product[];
  meta: Meta;
};

type ProductsContextData = {
  paginatedProducts: InfiniteData<PaginatedResponse> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<PaginatedResponse>, Error>>;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  isError: boolean;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  searchResults: Product[] | null;
  isSearchLoading: boolean;
  search: (query: string) => Promise<void>;
  clearSearch: () => void;
  isProductsByViewLoading: boolean;
  getProductByView: () => Promise<void>;
  productsByView: Product[] | null;
};

const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [pageSize, setPageSize] = useState(8);

  // 🔹 Gerenciamento da paginação com Infinite Query
  const {
    data: paginatedProducts,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery<PaginatedResponse, Error, InfiniteData<PaginatedResponse>>({
    queryKey: ['products', 'infinite', pageSize],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getPaginatedProducts(pageParam as number, pageSize);
      return response;
    },
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.meta;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 5000,
  });

  // 🔹 Estados e funções para busca
  const [searchResults, setSearchResults] = useState<Product[] | null>(null);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const search = async (query: string) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    setIsSearchLoading(true);
    try {
      const response = await searchProducts(query);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Erro na busca:', error);
      setSearchResults(null);
    } finally {
      setIsSearchLoading(false);
    }
  };

  const clearSearch = () => setSearchResults(null);

  const [productsByView, setProductsByView] = useState<Product[] | null>(null);
  const [isProductsByViewLoading, setIsProductsByViewLoading] = useState(false);

  const getProductByView = async () => {
    setIsProductsByViewLoading(true);
    try {
      const data = await fetchProductsByView();
      setProductsByView(data);
    } catch (error) {
      console.error('Erro ao buscar produtos por visualização:', error);
      setProductsByView(null);
    } finally {
      setIsProductsByViewLoading(false);
    }
  };

  useEffect(() => {
    getProductByView();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        paginatedProducts,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetchingNextPage,
        isError,
        pageSize,
        setPageSize,
        searchResults,
        isSearchLoading,
        search,
        clearSearch,
        productsByView,
        isProductsByViewLoading,
        getProductByView,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
