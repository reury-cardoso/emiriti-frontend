import { createContext, ReactNode, useContext } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllArtisans, getArtisanById, getProductsByArtisan } from '../services/artisans';

// Tipo do artesão
type Artisan = {
  id: string;
  name: string;
  photo: string;
  bio: string;
  location: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  products: Product[];
};

// Tipo do produto
type Product = {
  id: string;
  name: string;
  price: number;
};

// Tipo do contexto
type ArtisansContextData = {
  artisans: Artisan[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  isError: boolean;
  getArtisanDetails: (id: string) => Promise<Artisan>;
  getArtisanProducts: (id: string) => Promise<Product[]>;
};

const ArtisansContext = createContext<ArtisansContextData>({} as ArtisansContextData);

export const ArtisansProvider = ({ children }: { children: ReactNode }) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['artisans'],
    queryFn: getAllArtisans,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.hasMore) {
        return allPages.length + 1; // Próxima página
      }
      return undefined; // Não há mais páginas
    },
    initialPageParam: 1,
  });

  const artisans = data?.pages.flatMap(page => page.data) || [];

  const getArtisanDetails = async (id: string) => {
    return await getArtisanById(id);
  };

  const getArtisanProducts = async (id: string) => {
    return await getProductsByArtisan(id);
  };

  return (
    <ArtisansContext.Provider
      value={{ artisans, fetchNextPage, hasNextPage: !!hasNextPage, isFetchingNextPage, isLoading, isError, getArtisanDetails, getArtisanProducts }}
    >
      {children}
    </ArtisansContext.Provider>
  );
};

export const useArtisans = () => useContext(ArtisansContext);
