import { useState } from 'react';
import { Drawer } from 'vaul';
import { ImageZoom } from './ImageZoom';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface ToyCardProps {
  src: string;
  toyName: string;
  artisanName: string;
}

export function ToyCard({ src, toyName, artisanName }: ToyCardProps) {
  const [isOpen, setOpen] = useState(false);

  // Dados fictícios fixos
  const price = 'R$ 50,00';
  const description = 'Brinquedo de miriti feito a mão. Ideal para crianças de 3 a 5 anos.';
  const artisanImage = 'https://f.i.uol.com.br/fotografia/2023/10/30/1698701766654021c63e971_1698701766_3x2_rt.jpg';
  const whatsappLink = 'https://wa.me/5598988888888';
  const moreProducts = [
    {
      src: 'https://portalamazonia.com/wp-content/uploads/2021/05/b2ap3_large_2_miriti.jpeg',
      name: 'Brinquedo 1',
    },
    {
      src: 'https://portalamazonia.com/wp-content/uploads/2021/05/b2ap3_large_2_miriti.jpeg',
      name: 'Brinquedo 2',
    },
  ];

  return (
    <div className='active:scale-98 relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg'>
      <ImageZoom src={src} alt={toyName} className='h-[150px] w-full rounded-t-xl object-cover' />

      <div className='p-4'>
        <h3 className='truncate text-lg font-semibold text-gray-900'>{toyName}</h3>
        <p className='mt-1 text-sm text-gray-500'>{artisanName}</p>

        {/* Abre o Drawer ao clicar */}
        <button
          onClick={() => setOpen(true)}
          className='mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2 font-medium text-white shadow-sm transition-all hover:bg-orange-600 active:scale-95'
        >
          Ver mais
          <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z' />
          </svg>
        </button>
      </div>

      {/* Drawer usando a lib "vaul" */}
      <Drawer.Root open={isOpen} onOpenChange={setOpen}>
        <Drawer.Portal>
          {/* Overlay com z-index alto */}
          <Drawer.Overlay className='fixed inset-0 z-[998] bg-black/40' />
          {/* Content com z-index ainda maior */}
          <Drawer.Content className='fixed left-0 right-0 top-10 z-[999] flex h-full flex-col rounded-t-3xl bg-gray-50 outline-none'>
            <div className='relative overflow-y-auto px-4 sm:p-6' style={{ maxHeight: 'calc(100vh - 70px)' }}>
              {/* linha estilo bastantao de comentário */}

              <div
                className='react-modal-sheet-header'
                style={{
                  height: '40px',
                  width: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  className='react-modal-sheet-drag-indicator'
                  style={{
                    width: '18px',
                    height: '4px',
                    borderRadius: '99px',
                    backgroundColor: 'rgb(221, 221, 221)',
                    transform: 'translateX(2px) rotate(0deg)',
                  }}
                ></span>
                <span
                  className='react-modal-sheet-drag-indicator'
                  style={{
                    width: '18px',
                    height: '4px',
                    borderRadius: '99px',
                    backgroundColor: 'rgb(221, 221, 221)',
                    transform: 'translateX(-2px) rotate(0deg)',
                  }}
                ></span>
              </div>

              {/* Botão para fechar o Drawer */}
              <button
                onClick={() => setOpen(false)}
                className='absolute right-4 top-10 flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg active:scale-95'
              >
                Fechar <ArrowRight size={16} />
              </button>

              <ImageZoom
                src={src}
                alt={toyName}
                className='aspect-video max-h-60 w-full rounded-2xl object-cover shadow-sm'
              />

              <div className='mt-4 space-y-1'>
                <h3 className='text-2xl font-bold text-gray-900'>{toyName}</h3>
                <p className='text-sm text-gray-500'>Brinquedos de Animais</p>
                <p className='text-2xl font-extrabold text-green-600'>{price}</p>
              </div>

              <p className='mt-4 leading-relaxed text-gray-700'>{description}</p>

              <div className='mt-4 flex items-center gap-3'>
                <img
                  src={artisanImage}
                  alt={artisanName}
                  className='h-12 w-12 rounded-full border-2 border-orange-500'
                />
                <div>
                  <p className='font-semibold text-gray-900'>{artisanName}</p>
                  <p className='text-sm text-green-600'>Ver mais sobre o artesão</p>
                </div>
              </div>

              <a
                href={whatsappLink}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-4 py-3 text-base font-bold text-white shadow-md hover:bg-green-600 sm:text-lg'
              >
                <MessageCircle size={20} /> Entrar em contato via WhatsApp
              </a>

              <div className='mt-6'>
                <h4 className='text-xl font-extrabold text-gray-800'>Galeria da Arte</h4>
                <div className='mt-4 flex gap-6 overflow-x-auto pb-4'>
                  {moreProducts.map((product, index) => (
                    <div
                      key={index}
                      className='min-w-[150px] transform rounded-xl bg-white shadow'
                    >
                      <img src={product.src} alt={product.name} className='h-32 w-full rounded-t-xl object-cover' />
                      <button className='w-full h-10 bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md 
                      rounded-b-xl transition-all active:scale-95
                      '>
                  Ver Perfil do Artesão
                </button>
                    </div>
                  ))}
                </div>
                
              </div>

              <div className='mt-3 border-t pt-4 text-center text-sm text-gray-500'>
                <span>Feito com 💚 em Abaetetuba</span>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
