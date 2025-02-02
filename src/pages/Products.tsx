import { useEffect } from 'react';
import ProductCarousel from '../components/ProductCarousel';
import { ToyCard } from '../components/ToyCard';
import { useProducts } from '../context/ProductsContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import svgAnimate from '../assets/ring-resize-white-36.svg';

export default function PageProducts() {
  const {
    paginatedProducts,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isError,
    productsByView
  } = useProducts();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isError) return <p>Erro ao carregar produtos.</p>;

  // Une todas as páginas em um único array de produtos
  const products = paginatedProducts?.pages
    ? paginatedProducts.pages.flatMap((page) => page.data)
    : [];

  return (
    <>
      <section className="mx-auto w-[90%] pb-[24px] pt-[24px]">
        <div className="flex justify-between pb-[16px]">
          <h2 className="text-[1.5rem] font-bold text-[#424242]">Mais Populares</h2>
        </div>
        <div>
          {isLoading ? (
            <Skeleton height={200} />
          ) : (
            <ProductCarousel products={productsByView || []} />
          )}
        </div>
      </section>

      <section className="mx-auto w-[90%] pb-[24px] pt-[8px]">
        <h2 className="pb-[16px] text-[1.5rem] font-bold text-[#424242]">Todos</h2>
        <div className="grid grid-cols-2 gap-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <Skeleton key={idx} height={200} />
              ))
            : products.map((product) => (
                <ToyCard
                  key={product.id}
                  src={product.images[0].url}
                  toyName={product.name}
                  artisanName={product.artisan.name}
                />
              ))}
        </div>

        {isFetchingNextPage && (
          <div className="flex justify-center pt-8 pb-4">
            <img src={svgAnimate} alt="Carregando" className="w-10 h-10" />
          </div>
        )}
      </section>
    </>
  );
}
