import { Banners } from '../components/Banners';
import ProductCarousel from '../components/ProductCarousel';
import { useNavigate } from 'react-router-dom';
import { ToyCard } from '../components/ToyCard';
import { ProfileCard } from '../components/ProfileCard';
import { useArtisans } from '../context/ArtisansContext';
import { useProducts } from '../context/ProductsContext';
import { useMemo } from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MemoizedToyCard = React.memo(ToyCard);
const MemoizedProfileCard = React.memo(ProfileCard);

export default function PageHome() {
  const navigate = useNavigate();
  const { artisans, isLoading: isArtisansLoading } = useArtisans();
  const { productsByView, paginatedProducts, isLoading: isProductsLoading } = useProducts();

  const products = useMemo(() => paginatedProducts?.pages.flatMap((page) => page.data) || [], [paginatedProducts]);

  const randomArtisans = useMemo(() => {
    return [...artisans].sort(() => Math.random() - 0.5).slice(0, 4);
  }, [artisans]);

  return (
    <div className='animate-fade-in'>
      <Banners />

      {/* Seção Brinquedos */}
      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <div className='flex items-center justify-between pb-4'>
          <h2 className='text-2xl font-bold text-text-primary'>Brinquedos</h2>
          <button
            onClick={() => navigate('/products')}
            className='text-base font-semibold text-text-secondary transition-colors hover:text-amazonia'
          >
            Ver todos
          </button>
        </div>

        <div>
          {isProductsLoading ? (
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
            <ProductCarousel products={products.slice(0, 8)} />
          )}
        </div>
      </section>

      {/* Seção Mais Populares */}
      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <h2 className='pb-4 text-2xl font-bold text-text-primary'>Mais Populares</h2>

        <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
          {isProductsLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div key={`skeleton-populares-${idx}`} className='overflow-hidden rounded-xl bg-white shadow-sm'>
                <Skeleton height={180} borderRadius={0} />
                <div className='space-y-2 p-3'>
                  <Skeleton height={20} width='80%' borderRadius={8} />
                  <Skeleton height={16} width='60%' borderRadius={8} />
                  <Skeleton height={36} borderRadius={12} />
                </div>
              </div>
            ))
          ) : (
            productsByView
              ?.slice(0, 4)
              .map((product, index) => <MemoizedToyCard key={`${product.id}-${index}`} product={product} />)
          )}
        </div>
      </section>

      {/* Seção Artesãos */}
      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <div className='flex items-center justify-between pb-4'>
          <h2 className='text-2xl font-bold text-text-primary'>Artesãos</h2>
          <button
            onClick={() => navigate('/artisans')}
            className='text-base font-semibold text-text-secondary transition-colors hover:text-amazonia'
          >
            Ver todos
          </button>
        </div>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {isArtisansLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={`skeleton-artisan-${idx}`}
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
          ) : (
            randomArtisans.map((artisan) => (
              <MemoizedProfileCard
                key={artisan.id}
                id={artisan.id}
                name={artisan.name}
                location={artisan.location}
                photo={artisan.photo}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
