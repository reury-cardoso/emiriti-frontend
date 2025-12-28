import React from 'react';
import { ArrowRight, MapPin, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Drawer } from 'vaul';
import { ToyCard } from './ToyCard';
import { getArtisanById } from '../services/artisans';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

type Artisan = {
  id: string;
  photo: string;
  name: string;
  location: string;
};

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  viewCount: number;
  artisanId: string;
  createdAt: string;
  updatedAt: string;
  images: { url: string }[];
  artisan: { id: string; name: string; photo: string; whatsapp: string };
}

interface Profile {
  id: string;
  name: string;
  photo: string;
  bio: string;
  location: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  createdAt: string;
  products: Product[];
}

export const ProfileCard = React.memo(function ProfileCard({ id, photo, name, location }: Artisan) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moreInfo, setMoreInfo] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isOpen = searchParams.get('artisan') === id;

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setSearchParams({ artisan: id });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      getArtisanById(id)
        .then((artisan) => {
          setMoreInfo(artisan);
          setError(null);
        })
        .catch((err) => {
          setError('Failed to load artisan information');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isOpen]);

  return (
    <>
      <div className='flex w-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md'>
        {/* Foto do artesão */}
        <div className='relative w-24 flex-shrink-0 self-stretch'>
          <img src={photo} alt={name} className='h-full w-full object-cover' />
        </div>

        {/* Conteúdo do card */}
        <div className='flex flex-1 flex-col justify-between p-3'>
          <div className='space-y-1'>
            <h2 className='truncate text-base font-semibold text-gray-900'>{name}</h2>
            <div className='flex items-center gap-1 text-sm text-gray-600'>
              <MapPin size={14} className='flex-shrink-0 text-[#00A86B]' />
              <span className='truncate'>{location}</span>
            </div>
          </div>

          {/* Botões */}
          <div className='mt-2 flex gap-2'>
            <a
              href={`https://wa.me/${moreInfo?.whatsapp || ''}`}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => {
                if (!moreInfo?.whatsapp) {
                  e.preventDefault();
                  handleOpenChange(true);
                }
              }}
              className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#25D366]/90 active:scale-95'
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
              </svg>
            </a>
            <button
              onClick={() => handleOpenChange(true)}
              className='flex h-9 flex-1 items-center justify-center rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-700 transition-all hover:border-[#00A86B] hover:bg-[#F0FFF4] hover:text-[#00A86B] active:scale-95'
            >
              Ver perfil completo
            </button>
          </div>
        </div>
      </div>

      <Drawer.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Drawer.Portal>
          <Drawer.Overlay className='fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm' />
          <Drawer.Content className='fixed left-0 right-0 top-10 z-[999] flex h-full flex-col overflow-hidden rounded-t-3xl bg-background outline-none'>
            <VisuallyHidden>
              <Drawer.Title>Detalhes do Artesão</Drawer.Title>
              <Drawer.Description>Perfil completo de {name}</Drawer.Description>
            </VisuallyHidden>
            <div
              className='relative overflow-y-auto px-4 sm:px-6'
              style={{
                height: 'calc(100% - 2.5rem)',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(209, 213, 219, 0.8) transparent',
              }}
            >
              {/* Header com drag indicator */}
              <div className='sticky top-0 z-10 flex items-center justify-center bg-gradient-to-b from-background to-background/95 pb-6 pt-5 backdrop-blur-sm'>
                <div className='flex gap-1.5'>
                  <span className='h-1 w-5 rounded-full bg-gray-300'></span>
                  <span className='h-1 w-5 rounded-full bg-gray-300'></span>
                </div>
              </div>

              {/* Botão fechar */}
              <button
                onClick={() => setOpen(false)}
                className='absolute right-4 top-8 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-text-primary/10 transition-colors hover:bg-text-primary/20'
              >
                <X size={18} className='text-text-primary' />
              </button>

              {/* Header do perfil */}
              <div className='mb-6 flex flex-col items-center'>
                <div className='relative'>
                  <img
                    src={moreInfo?.photo || photo}
                    alt={name}
                    className='w-30 h-30 rounded-full object-cover shadow-amazonia'
                    style={{
                      border: '3px solid transparent',
                      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #00A86B, #FF6B35)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  />
                </div>
                <h1 className='mt-4 text-center text-3xl font-bold text-text-primary'>{name}</h1>
                <div className='mt-1 flex items-center gap-1.5 text-sm text-text-secondary'>
                  <MapPin size={16} className='text-amazonia' />
                  <span>{location}</span>
                </div>
                {moreInfo?.bio && (
                  <p className='mt-3 max-w-sm text-center font-secondary text-base leading-relaxed text-text-primary'>
                    {moreInfo.bio}
                  </p>
                )}
              </div>

              {/* Botões sociais */}
              <div className='mb-8 flex flex-wrap justify-center gap-2'>
                {moreInfo?.whatsapp && (
                  <a
                    href={`https://wa.me/${moreInfo.whatsapp}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-whatsapp/90 active:scale-95'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                    </svg>
                    WhatsApp
                  </a>
                )}
                {moreInfo?.instagram && (
                  <a
                    href={`https://instagram.com/${moreInfo.instagram}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all active:scale-95'
                    style={{ background: 'linear-gradient(135deg, #E1306C, #FD1D1D, #F77737)' }}
                  >
                    Instagram
                  </a>
                )}
                {moreInfo?.facebook && (
                  <a
                    href={`https://facebook.com/${moreInfo.facebook}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 rounded-xl bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-[#1877F2]/90 active:scale-95'
                  >
                    Facebook
                  </a>
                )}
              </div>

              {/* Produtos */}
              <div className='mb-6'>
                <h2 className='mb-4 text-xl font-semibold text-text-primary'>Produtos</h2>
                {loading && (
                  <div className='grid grid-cols-2 gap-4'>
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className='skeleton-shimmer aspect-[3/4] rounded-lg bg-gray-200'></div>
                    ))}
                  </div>
                )}
                {error && <p className='text-sm text-red-500'>{error}</p>}
                {!loading && !error && (
                  <div className='grid grid-cols-2 gap-4'>
                    {moreInfo?.products.map((product, index) => (
                      <ToyCard key={`${product.id}-${index}`} product={product} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
});
