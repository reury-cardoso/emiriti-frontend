import React from 'react';
import { MapPin, Package } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

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

interface SearchArtisanCardProps {
  artisan: Artisan;
}

export const SearchArtisanCard = React.memo(function SearchArtisanCard({ artisan }: SearchArtisanCardProps) {
  const [, setSearchParams] = useSearchParams();
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    // Cancela qualquer troca pendente anterior
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('artisan');
      return newParams;
    });
    timeoutRef.current = setTimeout(() => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('artisan', artisan.id);
        return newParams;
      });
    }, 150);
  };

  return (
    <button
      onClick={handleClick}
      className='flex w-full items-center gap-3 overflow-hidden rounded-xl bg-white p-3 text-left shadow-sm transition-all hover:shadow-md active:scale-[0.98]'
    >
      {/* Photo */}
      <div className='relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full'>
        <img
          src={artisan.photo}
          alt={artisan.name}
          className='h-full w-full object-cover'
          loading='lazy'
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(artisan.name)}&backgroundColor=00A86B&textColor=ffffff`;
          }}
        />
      </div>

      {/* Content */}
      <div className='flex-1 overflow-hidden'>
        <h3 className='truncate text-sm font-semibold text-text-primary'>{artisan.name}</h3>
        <div className='mt-0.5 flex items-center gap-1 text-xs text-text-secondary'>
          <MapPin size={12} className='flex-shrink-0 text-amazonia' />
          <span className='truncate'>{artisan.location}</span>
        </div>
        <div className='mt-1 flex items-center gap-1 text-xs text-text-secondary'>
          <Package size={12} className='flex-shrink-0' />
          <span>
            {artisan._count.products} {artisan._count.products === 1 ? 'produto' : 'produtos'}
          </span>
        </div>
      </div>
    </button>
  );
});
