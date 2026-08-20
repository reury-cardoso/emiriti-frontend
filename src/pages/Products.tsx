import React from 'react';

import { useEffect, useMemo, useCallback } from 'react';
import ProductCarousel from '../components/ProductCarousel';
import { ToyCard } from '../components/ToyCard';
import { useProducts } from '../context/ProductsContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import svgAnimate from '../assets/ring-resize-white-36.svg';

const MemoizedToyCard = React.memo(ToyCard);

export default function PageProducts() {
  const { paginatedProducts, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, isError, productsByView } =
    useProducts();

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isError)
    return (
      <div className='flex min-h-[50vh] items-center justify-center'>
        <p className='text-text-secondary'>Erro ao carregar produtos.</p>
      </div>
    );

  const products = useMemo(
    () => (paginatedProducts?.pages ? paginatedProducts.pages.flatMap((page) => page.data) : []),
    [paginatedProducts],
  );

  return (
    <div className='animate-fade-in'>
      <section className='mx-auto w-[90%] pb-6 pt-6'>
        <div className='flex items-center justify-between pb-4'>
          <h2 className='text-2xl font-bold text-text-primary'>Mais Populares</h2>
        </div>
        <div>
          {isLoading ? (
            <div className='grid grid-cols-2 gap-4 pb-[28px]'>
              {Array.from({ length: 2 }).map((_, idx) => (
                <div key={`skeleton-brinquedos-${idx}`} className='overflow-hidden rounded-xl bg-white shadow-sm'>
                  <Skeleton height={180} borderRadius={0} />
                  <div className='space-y-2 p-3'>
                    <Skeleton height={20} width='80%' borderRadius={8} />
                    <Skeleton height={16} width='60%' borderRadius={8} />
                    <Skeleton height={36} borderRadius={12} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ProductCarousel products={productsByView || []} />
          )}
        </div>
      </section>

      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <h2 className='pb-4 text-2xl font-bold text-text-primary'>Todos os Produtos</h2>
        <div className='grid grid-cols-2 gap-4'>
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div key={`skeleton-${idx}`} className='overflow-hidden rounded-xl bg-white shadow-sm'>
                  <Skeleton height={180} borderRadius={0} />
                  <div className='space-y-2 p-3'>
                    <Skeleton height={20} width='80%' borderRadius={8} />
                    <Skeleton height={16} width='60%' borderRadius={8} />
                    <Skeleton height={36} borderRadius={12} />
                  </div>
                </div>
              ))
            : products.map((product, index) => <MemoizedToyCard key={`${product.id}-${index}`} product={product} />)}
        </div>

        {isFetchingNextPage && (
          <div className='flex justify-center pb-4 pt-8'>
            <div className='h-10 w-10 animate-spin rounded-full border-4 border-amazonia-light border-t-amazonia'></div>
          </div>
        )}
      </section>
    </div>
  );
}
