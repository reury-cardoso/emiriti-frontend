import { Banners } from '../components/Banners';
import ProductCarousel from '../components/ProductCarousel';
import { useNavigate } from 'react-router-dom';
import { ToyCard } from '../components/ToyCard';
import { ProfileCard } from '../components/ProfileCard';
import { useArtisans } from '../context/ArtisansContext';
import { useProducts } from '../context/ProductsContext';

export default function PageHome() {
  const navigate = useNavigate();
  const { artisans } = useArtisans();
  const {productsByView, paginatedProducts } = useProducts();

  const products = paginatedProducts?.pages.flatMap(page => page.data) || [];
  return (
    <>
      <Banners />

      <section className='mx-auto w-[90%] pb-[24px] pt-[8px]'>
        <div className='flex justify-between pb-[16px]'>
          <h2 className='text-[1.5rem] font-bold text-[#424242]'>Brinquedos</h2>
          <button onClick={() => navigate('/products')} className='text-[1rem] font-bold text-[#9F9F9F]'>
            Ver todos
          </button>
        </div>

        <div>
          <ProductCarousel products={
            products.slice(0, 8)
          } />
        </div>
      </section>

      <section className='mx-auto w-[90%] pb-[24px] pt-[8px]'>
        <h2 className='pb-[16px] text-[1.5rem] font-bold text-[#424242]'>Mais Populares</h2>

        <div className='grid grid-cols-2 gap-4'>
          {productsByView?.slice(0, 4).map((product , index) => (
            <ToyCard
              key={product.id}
              src={product.images[0].url}
              toyName={product.name}
              artisanName={product.artisan.name}
              topRank={index + 1}
            />
          ))}
        </div>
      </section>

      <section className='mx-auto w-[90%] pb-[24px] pt-[8px]'>
        <div className='flex justify-between pb-[16px]'>
          <h2 className='text-[1.5rem] font-bold text-[#424242]'>Artesãos</h2>
          <button onClick={() => navigate('/artisans')} className='text-[1rem] font-bold text-[#9F9F9F]'>
            Ver todos
          </button>
        </div>

        <div className='flex flex-col gap-4'>
          {artisans
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((artisan) => (
              <ProfileCard
                key={artisan.id}
                name={artisan.name}
                location={artisan.location}
                photo={artisan.photo}
              />
            ))}
        </div>
      </section>
    </>
  );
}
