import { createContext, ReactNode, useContext, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getActiveBanner } from '../services/banners';

type Banner = {
  id: string;
  title: string;
  urlMain: string;
  urlSecondary: string;
  urlTertiary: string;
  urlArtisan: string;
  urlProduct: string;
  updatedAt: string;
  [key: string]: string;
};

type BannersContextData = {
  activeBanner: Banner | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

const BannersContext = createContext<BannersContextData>({} as BannersContextData);

export const BannersProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: activeBanner,
    isLoading,
    isError,
    refetch,
  } = useQuery({ queryKey: ['activeBanner'], queryFn: getActiveBanner });

  const value = useMemo(() => ({
    activeBanner,
    isLoading,
    isError,
    refetch,
  }), [activeBanner, isLoading, isError, refetch]);

  return (
    <BannersContext.Provider value={value}>
      {children}
    </BannersContext.Provider>
  );
};

export const useBanners = () => useContext(BannersContext);
