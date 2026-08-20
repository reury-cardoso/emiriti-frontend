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
      <div className='flex flex-col gap-4'>
        {/* Banner Principal */}
        <div className='relative overflow-hidden rounded-xl'>
          {!mainLoaded && <Skeleton height={140} borderRadius={12} />}
          <img
            className={`pointer-events-none w-full select-none rounded-xl object-cover ${mainLoaded ? '' : 'hidden'}`}
            src={oneBanner ? activeBanner?.[oneBanner] : activeBanner?.urlMain}
            alt='Banner principal'
            onLoad={() => setMainLoaded(true)}
            onError={() => setMainLoaded(true)}
          />
        </div>

        {/* Banners secundários */}
        {!oneBanner && (
          <div className='grid grid-cols-2 gap-4'>
            <div className='relative overflow-hidden rounded-xl'>
              {!secondaryLoaded && <Skeleton height={124} borderRadius={12} />}
              <img
                className={`pointer-events-none w-full select-none rounded-xl object-cover ${secondaryLoaded ? '' : 'hidden'}`}
                src={activeBanner?.urlSecondary}
                alt='Banner secundário'
                onLoad={() => setSecondaryLoaded(true)}
                onError={() => setSecondaryLoaded(true)}
              />
            </div>

            <div className='relative overflow-hidden rounded-xl'>
              {!tertiaryLoaded && <Skeleton height={124} borderRadius={12} />}
              <img
                className={`pointer-events-none w-full select-none rounded-xl object-cover ${tertiaryLoaded ? '' : 'hidden'}`}
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
