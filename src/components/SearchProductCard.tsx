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
