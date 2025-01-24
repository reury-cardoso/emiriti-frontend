import { createContext, ReactNode, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllArtisans } from '../services/artisans';

type Artisan = {
  id: string;
  name: string;
  productsCount: number;
};

type ArtisansContextData = {
  artisans: Artisan[] | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

const ArtisansContext = createContext<ArtisansContextData>({} as ArtisansContextData);

export const ArtisansProvider = ({ children }: { children: ReactNode }) => {
  const { data: artisans, isLoading, isError, refetch } = useQuery({ queryKey: ['artisans'], queryFn: getAllArtisans });

  return (
    <ArtisansContext.Provider value={{ artisans, isLoading, isError, refetch }}>{children}</ArtisansContext.Provider>
  );
};

export const useArtisans = () => useContext(ArtisansContext);
