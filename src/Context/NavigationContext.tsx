import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationContextProps {
  currentPage: string;
  navigate: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextProps>({
  currentPage: '',
  navigate: () => {},
});

interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const navigateRouter = useNavigate();
  const location = useLocation();

  const contextValue = useMemo(
    () => ({
      currentPage: location.pathname,
      navigate: (path: string) => navigateRouter(path),
    }),
    [location.pathname, navigateRouter]
  );

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
