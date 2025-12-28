import { Banners } from '../components/Banners';
import ProductCarousel from '../components/ProductCarousel';
import { useNavigate } from 'react-router-dom';
import { ToyCard } from '../components/ToyCard';
import { ProfileCard } from '../components/ProfileCard';
import { useArtisans } from '../context/ArtisansContext';
import { useProducts } from '../context/ProductsContext';
import { useMemo } from 'react';
import React from 'react';

const MemoizedToyCard = React.memo(ToyCard);
const MemoizedProfileCard = React.memo(ProfileCard);

export default function PageHome() {
  const navigate = useNavigate();
  const { artisans } = useArtisans();
  const { productsByView, paginatedProducts } = useProducts();

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
          <ProductCarousel products={products.slice(0, 8)} />
        </div>
      </section>

      {/* Seção Mais Populares */}
      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <h2 className='pb-4 text-2xl font-bold text-text-primary'>Mais Populares</h2>

        <div className='grid grid-cols-2 gap-4'>
          {productsByView
            ?.slice(0, 4)
            .map((product, index) => <MemoizedToyCard key={`${product.id}-${index}`} product={product} />)}
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

        <div className='flex flex-col gap-4'>
          {randomArtisans.map((artisan) => (
            <MemoizedProfileCard
              key={artisan.id}
              id={artisan.id}
              name={artisan.name}
              location={artisan.location}
              photo={artisan.photo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
