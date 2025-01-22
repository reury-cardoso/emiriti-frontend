/* eslint-disable react/prop-types */
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageZoom({ src, alt, className }: ImageZoomProps) {
  return (
    <Zoom>
      <img alt={alt} src={src} className={className} />
    </Zoom>
  );
}
