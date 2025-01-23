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

  return (
    <Zoom>
      {!srcLoaded && <Skeleton height={150} borderRadius={0} />}
      <img
        alt={alt}
        src={src}
        className={`${className} ${srcLoaded ? '' : 'hidden'}`}
        onLoad={() => setSrcLoaded(true)}
      />
    </Zoom>
  );
}
