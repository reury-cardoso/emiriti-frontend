import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface BannersProps {
  urlMain: string;
  urlSecundary?: string;
  urlTertiary?: string;
}

export function Banners({ urlMain, urlSecundary, urlTertiary }: BannersProps) {
  const [mainLoaded, setMainLoaded] = useState(false);
  const [secondaryLoaded, setSecondaryLoaded] = useState(false);
  const [tertiaryLoaded, setTertiaryLoaded] = useState(false);

  return (
    <section className='mx-auto w-[90%] py-[24px]'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex w-full flex-col gap-[16px]'>
          {!mainLoaded && <Skeleton height={150} borderRadius={8} />}
          <img
            className={`pointer-events-none w-full select-none ${mainLoaded ? '' : 'hidden'}`}
            src={urlMain}
            alt='Banner principal'
            onLoad={() => setMainLoaded(true)}
          />

          {urlSecundary && urlTertiary && (
            <div className='grid grid-cols-2 gap-[16px] items-center'>
              {!secondaryLoaded && <Skeleton  height={134}  borderRadius={8} />}
              <img
                className={`pointer-events-none w-full select-none ${secondaryLoaded ? '' : 'hidden'}`}
                src={urlSecundary}
                alt='Banner secundário'
                onLoad={() => setSecondaryLoaded(true)}
              />

              {!tertiaryLoaded && <Skeleton height={134}  borderRadius={8} />}
              <img
                className={`pointer-events-none w-full select-none ${tertiaryLoaded ? '' : 'hidden'}`}
                src={urlTertiary}
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
