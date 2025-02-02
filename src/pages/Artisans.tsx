import { useEffect } from 'react';
import { Banners } from '../components/Banners';
import { ProfileCard } from '../components/ProfileCard';
import { useArtisans } from '../context/ArtisansContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import svgAnimate from '../assets/ring-resize-white-36.svg';

export default function PageArtisans() {
  const { artisans, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage, isError } = useArtisans();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isError) return <p>Erro ao carregar artesãos.</p>;

  return (
    <>
      <Banners oneBanner='urlArtisan' />

      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <div className='flex justify-between pb-4'>
          <h2 className='text-2xl font-bold text-[#424242]'>Todos</h2>
        </div>

        <div className='flex flex-col gap-4'>
          {isLoading
            ? Array.from({ length: 4 }).map((_) => (
              <div className="flex w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 p-3 animate-pulse">
              {/* Skeleton da foto */}
              <Skeleton height={96} width={96} borderRadius={8} />
        
              <div className="flex flex-1 flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1 w-2/3">
                    {/* Skeleton do nome */}
                    <Skeleton height={16} width="70%" borderRadius={8} />
                    {/* Skeleton da localização */}
                    <Skeleton height={12} width="50%" borderRadius={8} />
                  </div>
                  {/* Skeleton do botão WhatsApp */}
                  <Skeleton height={28} width={28} borderRadius="50%" />
                </div>
        
                {/* Skeleton do botão "Ver perfil completo" */}
                <Skeleton height={28} width="80%" borderRadius={8} />
              </div>
            </div>
              ))
            : artisans.map((artisan) => (
                <ProfileCard key={artisan.id} name={artisan.name} location={artisan.location} photo={artisan.photo} />
              ))}
        </div>

        {isFetchingNextPage && (
          <div className='flex justify-center pt-8 pb-4'>
            <img src={svgAnimate} alt='Loading' className='w-10 h-10' 
            />
          </div>
        )}
      </section>
    </>
  );
}
