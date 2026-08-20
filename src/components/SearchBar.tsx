import { Search, X, Package, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { searchAll } from '../services/search';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchProductCard } from './SearchProductCard';
import { SearchArtisanCard } from './SearchArtisanCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  viewCount: number;
  images: { url: string }[];
  artisan: {
    id: string;
    name: string;
    location: string;
    photo: string;
  };
}

interface Artisan {
  id: string;
  name: string;
  location: string;
  photo: string;
  bio: string;
  _count: {
    products: number;
  };
}

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [artisans, setArtisans] = useState<Artisan[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Ignora cliques dentro do searchRef
      if (searchRef.current && searchRef.current.contains(event.target as Node)) return;
      // Ignora cliques em portais do Vaul (overlays e drawers)
      const target = event.target as Element;
      if (target.closest('[data-vaul-overlay]') || target.closest('[data-vaul-drawer]')) return;
      // Ignora cliques em elementos com z-index alto (drawers abertos)
      if (target.closest('[role="dialog"]') || target.closest('[data-state]')) return;

      setShowResults(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      setArtisans([]);
      setShowResults(false);
      return;
    }

    setShowResults(true);
    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const results = await searchAll(query);
        setProducts(results.products);
        setArtisans(results.artisans);
      } catch (error) {
        console.error('Erro ao buscar:', error);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (showResults) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup caso o componente seja desmontado enquanto a busca está aberta
    return () => {
      document.body.style.overflow = '';
    };
  }, [showResults]);

  const handleClear = () => {
    setQuery('');
    setProducts([]);
    setArtisans([]);
    setShowResults(false);
  };

  const hasResults = products.length > 0 || artisans.length > 0;
  const totalResults = products.length + artisans.length;

  return (
    <>
      {/* Backdrop blur quando resultados estão abertos - cobre da barra de pesquisa até a TabBar */}
      {showResults && (
        <div
          className='fixed bottom-0 left-0 right-0 top-20 z-40 bg-black/20 backdrop-blur-sm'
          onClick={() => setShowResults(false)}
        />
      )}

      <div
        className='relative md:hidden flex h-20 w-screen items-center border-b border-border bg-card px-5 py-4'
        ref={searchRef}
      >
        <div className='relative w-full'>
          <Search
            size={20}
            className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transition-colors ${
              isFocused ? 'text-amazonia' : 'text-text-secondary'
            }`}
          />
          <input
            type='text'
            placeholder='Buscar arte amazônica...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`h-11 w-full rounded-xl border bg-background px-4 pl-12 pr-10 text-base text-text-primary transition-all placeholder:text-text-secondary focus:outline-none ${
              isFocused ? 'border-2 border-amazonia shadow-[0_0_0_3px_rgba(0,168,107,0.1)]' : 'border border-border'
            }`}
          />
          {query && (
            <button
              onClick={handleClear}
              className='absolute right-4 top-1/2 z-10 -translate-y-1/2 text-text-secondary hover:text-text-primary'
            >
              <X size={18} />
            </button>
          )}

          {/* Results Dropdown */}
          {showResults && (
            <div className='absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-border bg-card shadow-lg'>
              <div className='max-h-[calc(100vh-12.5rem)] overflow-y-auto'>
                {loading ? (
                <div className='flex items-center justify-center p-8'>
                  <div className='h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-amazonia'></div>
                </div>
              ) : hasResults ? (
                <div className='p-4'>
                  <div className='mb-2 text-sm text-text-secondary'>
                    {totalResults} {totalResults === 1 ? 'resultado encontrado' : 'resultados encontrados'}
                  </div>

                  {/* Products Section */}
                  {products.length > 0 && (
                    <div className='mb-6'>
                      <div className='mb-3 flex items-center gap-2 text-base font-semibold text-text-primary'>
                        <Package size={18} className='text-amazonia' />
                        Produtos ({products.length})
                      </div>
                      <div className='grid grid-cols-2 gap-3'>
                        {products.slice(0, 4).map((product) => (
                          <SearchProductCard key={product.id} product={product} />
                        ))}
                      </div>
                      {products.length > 4 && (
                        <button
                          onClick={() => {
                            navigate('/products');
                            handleClear();
                          }}
                          className='mt-3 w-full rounded-lg bg-gray-100 py-2 text-sm font-medium text-text-secondary hover:bg-gray-200'
                        >
                          Ver todos os produtos ({products.length})
                        </button>
                      )}
                    </div>
                  )}

                  {/* Artisans Section */}
                  {artisans.length > 0 && (
                    <div>
                      <div className='mb-3 flex items-center gap-2 text-base font-semibold text-text-primary'>
                        <Users size={18} className='text-amazonia' />
                        Artesãos ({artisans.length})
                      </div>
                      <div className='flex flex-col gap-2'>
                        {artisans.slice(0, 4).map((artisan) => (
                          <SearchArtisanCard key={artisan.id} artisan={artisan} />
                        ))}
                      </div>
                      {artisans.length > 4 && (
                        <button
                          onClick={() => {
                            navigate('/artisans');
                            handleClear();
                          }}
                          className='mt-3 w-full rounded-lg bg-gray-100 py-2 text-sm font-medium text-text-secondary hover:bg-gray-200'
                        >
                          Ver todos os artesãos ({artisans.length})
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className='flex flex-col items-center justify-center p-8 text-center'>
                  <Search size={48} className='mb-3 text-gray-300' />
                  <p className='text-base font-medium text-text-primary'>Nenhum resultado encontrado</p>
                  <p className='mt-1 text-sm text-text-secondary'>Tente buscar por outro termo</p>
                </div>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
