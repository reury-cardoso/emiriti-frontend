import { Banners } from '../components/Banners';
import imageMain from '../assets/frame.svg';
import { ProfileCard } from '../components/ProfileCard';

export default function PageArtisans() {
  return (
    <>
      <Banners urlMain={imageMain} />

      <section className='mx-auto w-[90%] pb-[24px] pt-[8px]'>
        <div className='flex justify-between pb-[16px]'>
          <h2 className='text-[1.5rem] font-bold text-[#424242]'>Todos</h2>
        </div>

        <div className='flex flex-col gap-4'>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </section>
    </>
  );
}
