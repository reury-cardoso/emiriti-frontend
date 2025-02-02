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
      <section className='mx-auto w-[90%] py-[24px]'>
        <div className='flex flex-col items-center gap-[16px]'>
          <p>Ocorreu um erro ao carregar os banners.</p>
          <button onClick={refetch} className='rounded-md bg-[#e07d5c] px-[16px] py-[8px] text-white'>
            Tentar novamente
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className='mx-auto w-[90%] py-[24px]'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex w-full flex-col gap-[16px]'>
          {!mainLoaded && <Skeleton height={150} borderRadius={8} />}
          <img
            className={`pointer-events-none w-full select-none ${mainLoaded ? '' : 'hidden'}`}
            src={oneBanner ? activeBanner?.[oneBanner] : activeBanner?.urlMain}
            alt='Banner principal'
            onLoad={() => setMainLoaded(true)}
          />

          {!oneBanner && (
            <div className='grid grid-cols-2 items-center gap-[16px]'>
              {!secondaryLoaded && <Skeleton height={134} borderRadius={8} />}
              <img
                className={`pointer-events-none w-full select-none ${secondaryLoaded ? '' : 'hidden'}`}
                src={activeBanner?.urlSecondary}
                alt='Banner secundário'
                onLoad={() => setSecondaryLoaded(true)}
              />

              {!tertiaryLoaded && <Skeleton height={134} borderRadius={8} />}
              <img
                className={`pointer-events-none w-full select-none ${tertiaryLoaded ? '' : 'hidden'}`}
                src={activeBanner?.urlTertiary}
                alt='Banner terciário'
                onLoad={() => setTertiaryLoaded(true)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
