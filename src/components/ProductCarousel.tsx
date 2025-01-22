/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { ToyCard } from './ToyCard';

interface Product {
  image: string;
  title: string;
  seller: string;
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
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        style={
          {
            '--swiper-pagination-bottom': '-4px',
            paddingBottom: '28px',
            '--swiper-navigation-size': '15px',
            "--swiper-navigation-top-offset": "97%",
            "--swiper-navigation-sides-offset":"30%"
          } as React.CSSProperties
        }
        className='mySwiper'
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ToyCard src={product.image} toyName={product.title} artisanName={product.seller} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
