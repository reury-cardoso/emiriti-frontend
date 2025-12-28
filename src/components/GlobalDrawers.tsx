import { useSearchParams, useLocation } from 'react-router-dom';
import { ToyCard } from './ToyCard';
import { ProfileCard } from './ProfileCard';
import { useEffect, useState, useMemo } from 'react';
import { getProductById } from '../services/products';
import { getArtisanById } from '../services/artisans';
import { useProducts } from '../context/ProductsContext';
import { useArtisans } from '../context/ArtisansContext';

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

interface Artisan {
  id: string;
  name: string;
  photo: string;
  location: string;
  bio: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  createdAt: string;
  products: Product[];
}

export function GlobalDrawers() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const productId = searchParams.get('product');
  const artisanId = searchParams.get('artisan');

  const [product, setProduct] = useState<Product | null>(null);
  const [artisan, setArtisan] = useState<Artisan | null>(null);

  const { paginatedProducts, productsByView } = useProducts();
  const { artisans } = useArtisans();

  // Verifica se o produto está na lista atual da página
  const productInCurrentPage = useMemo(() => {
    if (!productId) return false;
    const allProducts = [...(paginatedProducts?.pages.flatMap((page) => page.data) || []), ...(productsByView || [])];
    return allProducts.some((p) => p.id === productId);
  }, [productId, paginatedProducts, productsByView]);

  // Verifica se o artesão está na lista atual da página
  const artisanInCurrentPage = useMemo(() => {
    if (!artisanId) return false;
    return artisans.some((a) => a.id === artisanId);
  }, [artisanId, artisans]);

  // Define quais drawers devem ser renderizados pelo GlobalDrawers
  const shouldRenderProductDrawer =
    location.pathname === '/artisans' || location.pathname === '/more' || !productInCurrentPage;
  const shouldRenderArtisanDrawer =
    location.pathname === '/products' || location.pathname === '/more' || !artisanInCurrentPage;

  useEffect(() => {
    if (productId) {
      getProductById(productId)
        .then((data) => {
          // Só define o produto se tiver dados válidos
          if (data && data.id) {
            setProduct(data);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar produto:', error);
          setProduct(null);
        });
    } else {
      setProduct(null);
    }
  }, [productId]);

  useEffect(() => {
    if (artisanId) {
      getArtisanById(artisanId)
        .then((data) => {
          // Só define o artesão se tiver dados válidos
          if (data && data.id) {
            setArtisan(data);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar artesão:', error);
          setArtisan(null);
        });
    } else {
      setArtisan(null);
    }
  }, [artisanId]);

  return (
    <>
      {/* Renderiza drawer de produto apenas onde produtos não são listados nativamente */}
      {shouldRenderProductDrawer && product && product.id && <ToyCard product={product} />}
      {/* Renderiza drawer de artesão apenas onde artesãos não são listados nativamente */}
      {shouldRenderArtisanDrawer && artisan && artisan.id && (
        <ProfileCard id={artisan.id} name={artisan.name} location={artisan.location} photo={artisan.photo} />
      )}
    </>
  );
}
