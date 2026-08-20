import React, { createContext, useContext, useMemo, useCallback } from 'react';
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

  const navigate = useCallback((path: string) => navigateRouter(path), [navigateRouter]);

  const contextValue = useMemo(
    () => ({
      currentPage: location.pathname,
      navigate,
    }),
    [location.pathname, navigate]
  );

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
