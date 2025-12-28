import { createContext, ReactNode, useContext, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllArtisans, getArtisanById, getProductsByArtisan } from '../services/artisans';

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

type Product = {
  id: string;
  name: string;
  price: number;
};

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
    getNextPageParam: (lastPage, allPages) => lastPage.hasMore ? allPages.length + 1 : undefined,
    initialPageParam: 1,
  });

  const artisans = useMemo(() => data?.pages.flatMap(page => page.data) || [], [data]);

  const getArtisanDetails = (id: string) => getArtisanById(id);

  const getArtisanProducts = (id: string) => getProductsByArtisan(id);

  const value = useMemo(() => ({
    artisans,
    fetchNextPage,
    hasNextPage: !!hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    getArtisanDetails,
    getArtisanProducts,
  }), [artisans, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError]);

  return (
    <ArtisansContext.Provider value={value}>
      {children}
    </ArtisansContext.Provider>
  );
};

export const useArtisans = () => useContext(ArtisansContext);
