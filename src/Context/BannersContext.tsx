import { createContext, ReactNode, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getActiveBanner } from '../services/banners';

type Banner = {
  id: string;
  title: string;
  urlMain: string;
  urlSecondary: string;
  urlTertiary: string;
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

  return (
    <BannersContext.Provider value={{ activeBanner, isLoading, isError, refetch }}>
      {children}
    </BannersContext.Provider>
  );
};

export const useBanners = () => useContext(BannersContext);
