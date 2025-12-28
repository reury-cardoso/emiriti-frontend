import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
import { SearchBar } from './components/SearchBar';
import { TabBar } from './components/TabBar';
import ScrollToTop from './components/ScrollToTop';
import { GlobalDrawers } from './components/GlobalDrawers';

const PageHome = lazy(() => import('./pages/Home'));
const PageProducts = lazy(() => import('./pages/Products'));
const PageArtisans = lazy(() => import('./pages/Artisans'));
const PageMore = lazy(() => import('./pages/More'));

export function Router() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <ScrollToTop />
        <SearchBar />
        <TabBar />
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/products' element={<PageProducts />} />
          <Route path='/artisans' element={<PageArtisans />} />
          <Route path='/more' element={<PageMore />} />
        </Routes>
        <GlobalDrawers />
      </NavigationProvider>
    </BrowserRouter>
  );
}
