import { ImageZoom } from './ImageZoom';

interface ToyCardProps {
  src: string;
  toyName: string;
  artisanName: string;
}

export function ToyCard({ src, toyName, artisanName }: ToyCardProps) {
  return (
    <div className='overflow-hidden rounded-[12px] bg-white shadow-md'>
      <ImageZoom src={src} alt={toyName} className='h-[150px] w-full object-cover' />
      <div className='p-[12px]'>
        <h3 className='truncate text-[1rem] font-bold text-[#212121]'>{toyName}</h3>
        <p className='text-[0.9rem] text-[#757575]'>{artisanName}</p>
        <button className='mt-[8px] w-full rounded-[4px] bg-[#F16038] px-[12px] py-[4px] text-[0.9rem] text-white transition hover:bg-[#D14A29]'>
          Ver mais
        </button>
      </div>
    </div>
  );
}
