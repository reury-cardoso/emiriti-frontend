import { useState, useEffect, useRef } from 'react';
import { Search, X, Package, Users, LogIn } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchAll } from '../services/search';
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

export function Header() {
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
      if (searchRef.current && searchRef.current.contains(event.target as Node)) return;
      const target = event.target as Element;
      if (target.closest('[data-vaul-overlay]') || target.closest('[data-vaul-drawer]')) return;
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

  const handleClear = () => {
    setQuery('');
    setProducts([]);
    setArtisans([]);
    setShowResults(false);
  };

  const hasResults = products.length > 0 || artisans.length > 0;
  const totalResults = products.length + artisans.length;

  return (
    <header className="hidden md:flex sticky top-0 z-[996] w-full h-20 items-center justify-between bg-card px-8 border-b border-border shadow-sm">
      {/* Logo Area */}
      <div 
        className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95" 
        onClick={() => navigate('/')}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amazonia text-white shadow-amazonia">
          <span className="text-xl font-bold leading-none">E</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-text-primary">Emiriti</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-6">
        <button onClick={() => navigate('/')} className="text-base font-medium text-text-secondary hover:text-amazonia transition-colors">Home</button>
        <button onClick={() => navigate('/products')} className="text-base font-medium text-text-secondary hover:text-amazonia transition-colors">Produtos</button>
        <button onClick={() => navigate('/artisans')} className="text-base font-medium text-text-secondary hover:text-amazonia transition-colors">Artesãos</button>
        <button onClick={() => navigate('/more')} className="text-base font-medium text-text-secondary hover:text-amazonia transition-colors">Mais</button>
      </nav>

      {/* Search and Login Area */}
      <div className="flex items-center gap-6">
        {/* Search Bar Desktop */}
        <div className="relative w-[320px] lg:w-[400px]" ref={searchRef}>
          <Search
            size={18}
            className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transition-colors ${
              isFocused ? 'text-amazonia' : 'text-text-secondary'
            }`}
          />
          <input
            type="text"
            placeholder="Buscar arte amazônica..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`h-11 w-full rounded-xl border bg-background px-4 pl-11 pr-10 text-sm text-text-primary transition-all placeholder:text-text-secondary focus:outline-none ${
              isFocused ? 'border-2 border-amazonia shadow-[0_0_0_3px_rgba(0,168,107,0.1)]' : 'border border-border'
            }`}
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-text-secondary hover:text-text-primary"
            >
              <X size={16} />
            </button>
          )}

          {/* Results Dropdown */}
          {showResults && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
              <div className="max-h-[60vh] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                {loading ? (
                  <div className="flex items-center justify-center p-8">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-amazonia"></div>
                  </div>
                ) : hasResults ? (
                  <div className="p-4">
                    <div className="mb-2 text-sm text-text-secondary">
                      {totalResults} {totalResults === 1 ? 'resultado encontrado' : 'resultados encontrados'}
                    </div>

                    {products.length > 0 && (
                      <div className="mb-6">
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-primary">
                          <Package size={16} className="text-amazonia" />
                          Produtos ({products.length})
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {products.slice(0, 4).map((product) => (
                            <SearchProductCard key={product.id} product={product} />
                          ))}
                        </div>
                      </div>
                    )}

                    {artisans.length > 0 && (
                      <div>
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-primary">
                          <Users size={16} className="text-amazonia" />
                          Artesãos ({artisans.length})
                        </div>
                        <div className="flex flex-col gap-2">
                          {artisans.slice(0, 4).map((artisan) => (
                            <SearchArtisanCard key={artisan.id} artisan={artisan} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <Search size={40} className="mb-3 text-gray-300" />
                    <p className="text-sm font-medium text-text-primary">Nenhum resultado encontrado</p>
                    <p className="mt-1 text-xs text-text-secondary">Tente buscar por outro termo</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Login Button */}
        <button 
          onClick={() => console.log('Abrir Login/Dashboard')}
          className="flex items-center gap-2 rounded-xl border-2 border-amazonia bg-transparent px-5 py-2.5 text-sm font-semibold text-amazonia transition-all hover:bg-amazonia hover:text-white active:scale-95"
        >
          <LogIn size={18} />
          Login
        </button>
      </div>
    </header>
  );
}
