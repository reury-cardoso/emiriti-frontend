/* eslint-disable react/prop-types */
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageZoom({ src, alt, className }: ImageZoomProps) {
  const [srcLoaded, setSrcLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <Zoom>
      {!srcLoaded && !hasError && <Skeleton height={150} borderRadius={0} />}
      {hasError ? (
        <div
          className={`${className} flex flex-col items-center justify-center gap-1 bg-gray-100`}
          style={{ minHeight: 150 }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#9ca3af'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <rect width='18' height='18' x='3' y='3' rx='2' ry='2' />
            <circle cx='9' cy='9' r='2' />
            <path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
          </svg>
          <span style={{ fontSize: 11, color: '#9ca3af' }}>Sem imagem</span>
        </div>
      ) : (
        <img
          alt={alt}
          src={src}
          className={`${className} ${srcLoaded ? '' : 'hidden'}`}
          onLoad={() => setSrcLoaded(true)}
          onError={() => {
            setSrcLoaded(false);
            setHasError(true);
          }}
        />
      )}
    </Zoom>
  );
}
