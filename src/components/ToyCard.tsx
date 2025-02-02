import { ImageZoom } from "./ImageZoom";

interface ToyCardProps {
  src: string;
  toyName: string;
  artisanName: string;
  topRank?: number; // Se for top 4, recebe 1, 2, 3 ou 4
}

export function ToyCard({ src, toyName, artisanName, topRank }: ToyCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg active:scale-98">
      {topRank && topRank <= 4 && (
        <div className="absolute top-2 left-2 z-10 bg-white/80 text-gray-800 px-3 py-1 rounded-full shadow-md text-sm font-semibold">
          TOP {topRank}
        </div>
      )}
      
      <ImageZoom
        src={src}
        alt={toyName}
        className="h-[150px] w-full object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="truncate text-lg font-semibold text-gray-900">{toyName}</h3>
        <p className="text-sm text-gray-500 mt-1">{artisanName}</p>
        
        <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-white font-medium shadow-sm hover:bg-orange-600 active:scale-95 transition-all">
          Ver mais
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        </button>
      </div>
    </div>
  );
}