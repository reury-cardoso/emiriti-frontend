import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './Context/NavigationContext';
import { SearchBar } from './components/SearchBar';
import { TabBar } from './components/TabBar';

const PageHome = lazy(() => import('./pages/Home'));
const PageProducts = lazy(() => import('./pages/Products'));
const PageArtisans = lazy(() => import('./pages/Artisans'));
const PageMore = lazy(() => import('./pages/More'));

export function Router() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <SearchBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/products" element={<PageProducts />} />
            <Route path="/artisans" element={<PageArtisans />} />
            <Route path="/more" element={<PageMore />} />
          </Routes>
        </Suspense>
        <TabBar />
      </NavigationProvider>
    </BrowserRouter>
  );
}
