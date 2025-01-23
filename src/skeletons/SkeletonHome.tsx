import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function SkeletonHome() {
  return (
    <div className='px-5  py-[24px]'>
      <section className='mb-3'>
        <Skeleton height={150} borderRadius={8} />
      </section>

      <section className='grid grid-cols-2 gap-[16px] items-center mt-[16px]'>
        <Skeleton height={134}  borderRadius={8} />
        <Skeleton height={134}  borderRadius={8} />
      </section>

      <section>
        <div className='flex mt-[32px] justify-between'>
          <Skeleton height={30} width={150} />
          <Skeleton height={30} width={90} />
        </div>
        <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-2'>
          <Skeleton height={250} borderRadius={12} />
          <Skeleton height={250} borderRadius={12} />
        </div>
      </section>
    </div>
  );
}
