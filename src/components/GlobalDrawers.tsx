import { useSearchParams } from 'react-router-dom';
import { ToyCard } from './ToyCard';
import { ProfileCard } from './ProfileCard';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/products';

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

export function GlobalDrawers() {
  const [searchParams] = useSearchParams();
  const rawProductId = searchParams.get('product');
  const rawArtisanId = searchParams.get('artisan');
  
  const productId = rawProductId ? rawProductId.split(':')[0] : null;
  const artisanId = rawArtisanId ? rawArtisanId.split(':')[0] : null;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      getProductById(productId)
        .then((data) => {
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

  return (
    <>
      {product && product.id && <ToyCard product={product} />}
      {artisanId && (
        <ProfileCard id={artisanId} name='' location='' photo='' />
      )}
    </>
  );
}
