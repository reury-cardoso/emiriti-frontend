interface BannersProps {
  urlMain: string;
  urlSecundary: string;
  urlTertiary: string;
}

export function Banners({ urlMain, urlSecundary, urlTertiary }: BannersProps) {
  return (
    <section className='mx-auto w-[90%] py-[24px]'>
      <div className='flex flex-col gap-[16px] md:flex-row'>
        <div className='flex w-full flex-col gap-[16px]'>
          <img className='pointer-events-none w-full select-none' src={urlMain} alt='Banner principal' />

          <div className='flex justify-between gap-[16px]'>
            <img className='pointer-events-none w-full select-none' src={urlSecundary} alt='Bennar secundário' />
            <img className='pointer-events-none w-full select-none' src={urlTertiary} alt='Banner terciário' />
          </div>
        </div>
      </div>
    </section>
  );
}
