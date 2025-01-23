import { Banners } from '../components/Banners';
import ProductCarousel from '../components/ProductCarousel';
import { useNavigate } from 'react-router-dom';
import { ToyCard } from '../components/ToyCard';
import { ProfileCard } from '../components/ProfileCard';

const products = [
  {
    title: 'Barcos de Miriti',
    seller: 'Sr. João Silva',
    price: 'R$25,00',
    image: 'https://www.oliberal.com/image/contentid/policy:1.688370:1685640122/MiritiFest.jpg?f=3x2&$p$f=4f4fd6b',
  },
  {
    title: 'CASINHA DE MIRITI',
    seller: 'Sra. Maria Souza',
    price: 'R$23,90',
    image: 'https://www.oliberal.com/image/contentid/policy:1.688370:1685640122/MiritiFest.jpg?f=3x2&$p$f=4f4fd6b',
  },
  {
    title: 'Barquinho de miriti',
    seller: 'Sra. Ana Paula',
    price: 'R$20,00',
    image: 'https://www.oliberal.com/image/contentid/policy:1.688370:1685640122/MiritiFest.jpg?f=3x2&$p$f=4f4fd6b',
  },
  {
    title: 'Barco artesanal',
    seller: 'Sr. Carlos Alberto',
    price: 'R$30,00',
    image: 'https://www.oliberal.com/image/contentid/policy:1.688370:1685640122/MiritiFest.jpg?f=3x2&$p$f=4f4fd6b',
  },
  {
    title: 'barco de artesanato',
    seller: 'Sra. Isabel Lima',
    price: 'R$28,50',
    image: 'https://www.oliberal.com/image/contentid/policy:1.688370:1685640122/MiritiFest.jpg?f=3x2&$p$f=4f4fd6b',
  },
];

const imageMain = 'https://res.cloudinary.com/emiriti/image/upload/cardOneHome_stiuax.svg';
const imageSecundary = 'https://res.cloudinary.com/emiriti/image/upload/cardTwoHome_nqkqqc.svg';
const imageTertiary = 'https://res.cloudinary.com/emiriti/image/upload/cardThreeHome_kff8ou.svg';

export default function PageHome() {
  const navigate = useNavigate();
  return (
    <>
      <Banners urlMain={imageMain} urlSecundary={imageSecundary} urlTertiary={imageTertiary} />
      <section className='mx-auto w-[90%] pb-[24px] pt-[8px]'>
        <div className='flex justify-between pb-[16px]'>
          <h2 className='text-[1.5rem] font-bold text-[#424242]'>Brinquedos</h2>
          <button onClick={() => navigate('/products')} className='text-[1rem] font-bold text-[#9F9F9F]'>
            Ver todos
          </button>
        </div>

        <div className=''>
          <ProductCarousel products={products} />
        </div>
      </section>

      <section className='mx-auto w-[90%] pb-[24px] pt-[8px]'>
        <h2 className='pb-[16px] text-[1.5rem] font-bold text-[#424242]'>Mais Populares</h2>

        <div className='grid grid-cols-2 gap-4'>
          <ToyCard src={products[0].image} toyName={products[0].title} artisanName={products[0].seller} />
          <ToyCard src={products[1].image} toyName={products[1].title} artisanName={products[1].seller} />
          <ToyCard src={products[2].image} toyName={products[2].title} artisanName={products[2].seller} />
          <ToyCard src={products[3].image} toyName={products[3].title} artisanName={products[3].seller} />
        </div>
      </section>

      <section className='mx-auto w-[90%] pb-[24px] pt-[8px]'>
        <div className='flex justify-between pb-[16px]'>
          <h2 className='text-[1.5rem] font-bold text-[#424242]'>Artesãos</h2>
          <button className='text-[1rem] font-bold text-[#9F9F9F]'>Ver todos</button>
        </div>

        <div className='flex flex-col gap-4'>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </section>
    </>
  );
}
