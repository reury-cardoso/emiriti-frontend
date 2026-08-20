/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { ToyCard } from './ToyCard';

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

interface ProductCarouselProps {
  products: Product[];
}

function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <div className='mx-auto'>
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        style={{ '--swiper-pagination-bottom': '-6px', paddingBottom: '28px' } as React.CSSProperties}
        className='mySwiper'
      >
        {products.map((product, index) => (
          <SwiperSlide key={`${product.id}-${index}`}>
            <ToyCard
              key={`${product.id}-${index}`}
              product={product}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
