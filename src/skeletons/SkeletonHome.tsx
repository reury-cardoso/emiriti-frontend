import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function SkeletonHome() {
  return (
    <div className='animate-fade-in pb-24'>
      {/* Banner skeleton */}
      <section className='mx-auto w-[90%] py-6'>
        <Skeleton height={200} borderRadius={12} className='mb-4' />
        <div className='grid grid-cols-2 gap-4'>
          <Skeleton height={134} borderRadius={12} />
          <Skeleton height={134} borderRadius={12} />
        </div>
      </section>

      {/* Brinquedos skeleton */}
      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <div className='flex items-center justify-between pb-4'>
          <Skeleton height={28} width={140} borderRadius={8} />
          <Skeleton height={20} width={80} borderRadius={8} />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='space-y-3'>
              <Skeleton height={180} borderRadius={12} />
              <Skeleton height={20} width='80%' borderRadius={8} />
              <Skeleton height={16} width='60%' borderRadius={8} />
              <Skeleton height={40} borderRadius={12} />
            </div>
          ))}
        </div>
      </section>

      {/* Artesãos skeleton */}
      <section className='mx-auto w-[90%] pb-6 pt-2'>
        <div className='flex items-center justify-between pb-4'>
          <Skeleton height={28} width={120} borderRadius={8} />
          <Skeleton height={20} width={80} borderRadius={8} />
        </div>
        <div className='flex flex-col gap-4'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='flex w-full overflow-hidden rounded-lg border border-border bg-card p-0 shadow-card'
            >
              <Skeleton height={96} width={80} borderRadius={0} />
              <div className='flex flex-1 flex-col gap-2 p-3'>
                <Skeleton height={18} width='70%' borderRadius={8} />
                <Skeleton height={14} width='50%' borderRadius={8} />
                <Skeleton height={20} width='60%' borderRadius={12} />
                <div className='mt-1 flex gap-2'>
                  <Skeleton height={40} width={40} circle />
                  <Skeleton height={40} className='flex-1' borderRadius={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
