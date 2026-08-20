import React from 'react';
import { useEffect, useCallback } from 'react';
import { Banners } from '../components/Banners';
import { ProfileCard } from '../components/ProfileCard';
import { useArtisans } from '../context/ArtisansContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MemoizedProfileCard = React.memo(ProfileCard);

export default function PageArtisans() {
  const { artisans, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, isError } = useArtisans();

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
        <p className='text-text-secondary'>Erro ao carregar artesãos.</p>
      </div>
    );

  return (
    <div className='animate-fade-in'>
      <Banners oneBanner='urlArtisan' />

      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <div className='flex items-center justify-between pb-4'>
          <h2 className='text-2xl font-bold text-text-primary'>Nossos Artesãos</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {isLoading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className='flex w-full overflow-hidden rounded-xl bg-white shadow-sm'
                >
                  <div className='w-24 flex-shrink-0'>
                    <Skeleton height={120} borderRadius={0} className='h-full' />
                  </div>
                  <div className='flex flex-1 flex-col justify-between p-3'>
                    <div className='space-y-1'>
                      <Skeleton height={20} width='70%' borderRadius={8} />
                      <Skeleton height={16} width='50%' borderRadius={8} />
                    </div>
                    <div className='mt-2 flex gap-2'>
                      <Skeleton height={36} width={36} circle />
                      <Skeleton height={36} className='flex-1' borderRadius={12} />
                    </div>
                  </div>
                </div>
              ))
            : artisans.map((artisan) => (
                <MemoizedProfileCard
                  key={artisan.id}
                  id={artisan.id}
                  name={artisan.name}
                  location={artisan.location}
                  photo={artisan.photo}
                />
              ))}
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
