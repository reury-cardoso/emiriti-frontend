import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useBanners } from '../context/BannersContext';

export function Banners({ oneBanner }: { oneBanner?: string }) {
  const { activeBanner, isError, refetch } = useBanners();

  const [mainLoaded, setMainLoaded] = useState(false);
  const [secondaryLoaded, setSecondaryLoaded] = useState(false);
  const [tertiaryLoaded, setTertiaryLoaded] = useState(false);

  if (isError) {
    return (
      <section className='mx-auto w-[90%] py-6'>
        <div className='flex flex-col items-center gap-4 rounded-lg bg-card p-6 shadow-card'>
          <p className='text-text-secondary'>Ocorreu um erro ao carregar os banners.</p>
          <button
            onClick={refetch}
            className='rounded-xl bg-amazonia px-6 py-3 font-semibold text-white transition-colors hover:bg-amazonia-hover active:scale-95'
          >
            Tentar novamente
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className='mx-auto w-[90%] py-6'>
      <div className='flex flex-col md:flex-row gap-4'>
        {/* Banner Principal */}
        <div className={`relative overflow-hidden rounded-xl w-full h-[140px] md:h-[160px] lg:h-[200px] ${oneBanner ? '' : 'md:w-1/2'}`}>
          {!mainLoaded && <Skeleton height='100%' containerClassName='h-full flex' style={{ height: '100%' }} borderRadius={12} />}
          <img
            className={`pointer-events-none h-full w-full select-none rounded-xl object-cover ${mainLoaded ? '' : 'hidden'}`}
            src={oneBanner ? activeBanner?.[oneBanner] : activeBanner?.urlMain}
            alt='Banner principal'
            onLoad={() => setMainLoaded(true)}
            onError={() => setMainLoaded(true)}
          />
        </div>

        {/* Banners secundários */}
        {!oneBanner && (
          <div className='flex gap-4 w-full md:w-1/2'>
            <div className='relative overflow-hidden rounded-xl w-1/2 h-[124px] md:h-[160px] lg:h-[200px]'>
              {!secondaryLoaded && <Skeleton height='100%' containerClassName='h-full flex' style={{ height: '100%' }} borderRadius={12} />}
              <img
                className={`pointer-events-none h-full w-full select-none rounded-xl object-cover ${secondaryLoaded ? '' : 'hidden'}`}
                src={activeBanner?.urlSecondary}
                alt='Banner secundário'
                onLoad={() => setSecondaryLoaded(true)}
                onError={() => setSecondaryLoaded(true)}
              />
            </div>

            <div className='relative overflow-hidden rounded-xl w-1/2 h-[124px] md:h-[160px] lg:h-[200px]'>
              {!tertiaryLoaded && <Skeleton height='100%' containerClassName='h-full flex' style={{ height: '100%' }} borderRadius={12} />}
              <img
                className={`pointer-events-none h-full w-full select-none rounded-xl object-cover ${tertiaryLoaded ? '' : 'hidden'}`}
                src={activeBanner?.urlTertiary}
                alt='Banner terciário'
                onLoad={() => setTertiaryLoaded(true)}
                onError={() => setTertiaryLoaded(true)}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
