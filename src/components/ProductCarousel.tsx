/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { ToyCard } from './ToyCard';

interface Product {
  images: { url: string }[];
  name: string;
  artisan: { name: string };
}

interface ProductCarouselProps {
  products: Product[];
}

function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className='mx-auto'>
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        style={{ '--swiper-pagination-bottom': '-6px', paddingBottom: '28px' } as React.CSSProperties}
        className='mySwiper'
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ToyCard src={product.images[0].url} toyName={product.name} artisanName={product.artisan.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
