import { useSearchParams, useLocation } from 'react-router-dom';
import { ToyCard } from './ToyCard';
import { ProfileCard } from './ProfileCard';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/products';
import { getArtisanById } from '../services/artisans';

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

  // Só renderiza o GlobalDrawers se não estiver em uma página que já tem os cards
  const shouldRenderGlobalDrawers = !['/products', '/artisans', '/'].includes(location.pathname);

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

  // Não renderiza se já estiver em uma página que tem os cards
  if (!shouldRenderGlobalDrawers) {
    return null;
  }

  return (
    <>
      {/* Renderiza apenas um drawer por vez - produto tem prioridade */}
      {product && product.id && !artisanId && <ToyCard product={product} />}
      {artisan && artisan.id && !productId && (
        <ProfileCard id={artisan.id} name={artisan.name} location={artisan.location} photo={artisan.photo} />
      )}
    </>
  );
}
