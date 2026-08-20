import React from 'react';
import { useSearchParams } from 'react-router-dom';

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

interface SearchProductCardProps {
  product: Product;
}

export const SearchProductCard = React.memo(function SearchProductCard({ product }: SearchProductCardProps) {
  const [, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set('product', product.id);
      return newParams;
    });
  };

  return (
    <button
      onClick={handleClick}
      className='group flex w-full flex-col overflow-hidden rounded-xl bg-white text-left shadow-sm transition-all hover:shadow-md active:scale-[0.98]'
    >
      {/* Image */}
      <div className='relative aspect-[4/3] w-full overflow-hidden bg-gray-100'>
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
          loading='lazy'
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = 'none';
            const parent = el.parentElement;
            if (parent && !parent.querySelector('.img-fallback')) {
              const fallback = document.createElement('div');
              fallback.className = 'img-fallback absolute inset-0 flex flex-col items-center justify-center gap-1 bg-gray-100';
              fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span style="font-size:10px;color:#9ca3af">Sem imagem</span>';
              parent.appendChild(fallback);
            }
          }}
        />
      </div>

      {/* Content */}
      <div className='p-2.5'>
        <h3 className='line-clamp-2 text-sm font-semibold leading-tight text-text-primary'>{product.name}</h3>
        <p className='mt-1 truncate text-xs text-text-secondary'>{product.artisan.name}</p>
      </div>
    </button>
  );
});
