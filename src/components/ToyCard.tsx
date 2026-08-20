import React from 'react';
import { useState, useEffect, useId } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Drawer } from 'vaul';
import { ImageZoom } from './ImageZoom';
import { X, ChevronRight, Share2, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { getProductsByArtisan } from '../services/artisans';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle, DialogDescription } from '@radix-ui/react-dialog';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  artisanId: string;
  createdAt: string;
  updatedAt: string;
  images: { url: string }[];
  artisan: { id: string; name: string; photo: string; whatsapp: string };
}

interface ProductProps {
  product: Product;
}

export const ToyCard = React.memo(function ToyCard({ product }: ProductProps) {
  const rawId = useId();
  // useId pode conter caracteres especiais como ':', sanitiza para uso na URL
  const instanceId = rawId.replace(/[^a-zA-Z0-9]/g, '');
  const paramValue = `${product.id}:${instanceId}`;

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [moreProducts, setMoreProducts] = useState<{ src: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const urlParam = searchParams.get('product');
  const isOpen = urlParam === paramValue || urlParam === product.id;

  const handleOpenChange = (open: boolean) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (open) {
        newParams.set('product', paramValue);
      } else {
        newParams.delete('product');
      }
      return newParams;
    });
  };

  useEffect(() => {
    if (isOpen && urlParam === product.id) {
      setSearchParams(
        (prev) => {
          const p = new URLSearchParams(prev);
          p.set('product', paramValue);
          return p;
        },
        { replace: true }
      );
    }
  }, [isOpen, urlParam, product.id, paramValue, setSearchParams]);

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}?product=${product.id}`;
    const shareData = {
      title: `Veja este brinquedo de miriti: ${product.name}`,
      text: `Olha que legal o ${product.name} feito de miriti em Abaetetuba!`,
      url: url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        console.log('Erro ao compartilhar:', err);
      }
    } 
    
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        return;
      } catch (err) {
        console.log('Erro ao copiar (API moderna):', err);
      }
    }

    try {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.log('Erro ao copiar (Fallback):', err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      getProductsByArtisan(product.artisanId)
        .then((products) => {
          setMoreProducts(
            products.slice(0, 4).map((product: { images: { url: string }[]; name: string }) => ({
              src: product.images[0].url,
              name: product.name,
            })),
          );
          setError(null);
        })
        .catch((err) => {
          setError('Failed to load products');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isOpen]);

  return (
    <div className='group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md'>
      {product.images.length > 0 && (
        <div className='overflow-hidden'>
          <ImageZoom
            src={product.images[0].url}
            alt={product.name}
            className='h-[180px] w-full object-cover transition-transform duration-200 group-hover:scale-105'
          />
        </div>
      )}

      <div className='space-y-2 p-3'>
        <div>
          <h3 className='truncate text-base font-semibold text-gray-900'>{product.name}</h3>
          {product.artisan && <p className='mt-0.5 truncate text-sm text-gray-600'>{product.artisan.name}</p>}
        </div>

        <button
          onClick={() => handleOpenChange(true)}
          className='flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#FF6B35]/90 active:scale-95'
        >
          Ver mais
          <ArrowRight size={16} className='transition-transform' />
        </button>
      </div>

      <Drawer.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Drawer.Portal>
          <Drawer.Overlay className='fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm' />
          <Drawer.Content className='fixed left-0 right-0 top-10 z-[999] flex h-full flex-col overflow-hidden rounded-t-3xl bg-background outline-none'>
            <VisuallyHidden>
              <DialogTitle>Detalhes do Produto</DialogTitle>
              <DialogDescription>Informações detalhadas sobre {product.name}</DialogDescription>
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
              <div className='sticky top-0 z-10 flex items-center justify-center bg-background pb-4 pt-5'>
                <div className='flex gap-1.5'>
                  <span className='h-1 w-5 rounded-full bg-gray-300'></span>
                  <span className='h-1 w-5 rounded-full bg-gray-300'></span>
                </div>
              </div>

              {/* Botão fechar */}
              <button
                onClick={() => handleOpenChange(false)}
                className='absolute right-4 top-8 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-text-primary/10 transition-colors hover:bg-text-primary/20'
              >
                <X size={18} className='text-text-primary' />
              </button>

              {/* Galeria de imagens */}
              <div className='mb-4'>
                {product.images.length > 0 && (
                  <ImageZoom
                    src={product.images[0].url}
                    alt={product.name}
                    className='h-60 w-full rounded-lg object-cover shadow-card'
                  />
                )}
              </div>

              {/* Informações do produto */}
              <div className='mb-6 space-y-3'>
                <div className='flex items-start justify-between gap-3'>
                  <h3 className='flex-1 text-2xl font-bold text-text-primary'>{product.name}</h3>
                  <div className='flex flex-col items-end gap-2'>
                    <button
                      onClick={handleShare}
                      className='flex items-center justify-center rounded-full bg-gray-100 p-2 text-text-primary transition-all hover:bg-gray-200 active:scale-95'
                      aria-label='Compartilhar produto'
                      title='Compartilhar'
                    >
                      {isCopied ? <Check size={16} className='text-amazonia' /> : <Share2 size={16} />}
                    </button>
                    <span className='whitespace-nowrap rounded-xl bg-amazonia-light px-3 py-1.5 text-xs font-medium text-amazonia'>
                      Feito à mão
                    </span>
                  </div>
                </div>
                <p className='text-4xl font-bold text-amazonia'>
                  {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
                <p className='mt-4 font-secondary text-base leading-relaxed text-text-primary'>{product.description}</p>
              </div>

              {/* Card do Artesão integrado */}
              {product.artisan && (
                <div className='mb-6 rounded-xl border border-border bg-background p-4'>
                  <div className='flex items-center gap-3'>
                    <div className='relative'>
                      <img
                        src={product.artisan.photo}
                        alt={product.artisan.name}
                        className='h-12 w-12 rounded-full object-cover'
                      />
                      <div
                        className='absolute inset-0 rounded-full'
                        style={{
                          background: 'linear-gradient(135deg, #00A86B, #FF6B35)',
                          padding: '2px',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      ></div>
                    </div>
                    <div className='flex-1'>
                      <p className='font-semibold text-text-primary'>{product.artisan.name}</p>
                      <p className='text-sm text-text-secondary'>Artesão de Abaetetuba</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Botão WhatsApp */}
              {product.artisan?.whatsapp && (
                <a
                  href={`https://wa.me/${product.artisan.whatsapp}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-whatsapp/90 active:scale-95'
                >
                  <MessageCircle size={20} />
                  Entrar em contato via WhatsApp
                </a>
              )}

              {/* Galeria da Arte */}
              <div className='mb-6'>
                <h4 className='mb-4 text-xl font-semibold text-text-primary'>Galeria da Arte</h4>
                {loading && (
                  <div className='grid grid-cols-2 gap-3'>
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className='skeleton-shimmer aspect-[4/3] rounded-lg bg-gray-200'></div>
                    ))}
                  </div>
                )}
                {error && <p className='text-sm text-red-500'>{error}</p>}
                {!loading && !error && (
                  <div className='grid grid-cols-2 gap-3'>
                    {moreProducts.map((product, index) => (
                      <div
                        key={index}
                        className='overflow-hidden rounded-lg bg-card shadow-card transition-shadow hover:shadow-card-hover'
                      >
                        <img src={product.src} alt={product.name} className='h-32 w-full object-cover' />
                        <div className='p-2'>
                          <p className='truncate text-xs font-medium text-text-primary'>{product.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className='border-t border-border pb-6 pt-4 text-center'>
                <span className='inline-flex items-center gap-1 text-sm text-text-secondary'>
                  Feito com <span className='text-miriti'>❤️</span> em Abaetetuba
                </span>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
});
