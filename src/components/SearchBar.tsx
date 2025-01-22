import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className='flex h-[4.75rem] w-screen items-center bg-[#fff] px-[20px] py-[16px]'>
      <div className='relative w-full'>
        <Search size={24} className='absolute left-[12px] top-1/2 -translate-y-1/2 transform text-[#B3B3B3]' />
        <input
          type='text'
          placeholder='Buscar artesãos ou brinquedos'
          className='w-full rounded-[8px] border-[1px] border-[#E6E6E6] border-[solid] bg-[#FAFAFA] py-[12px] pl-[48px] pr-[16px] text-[16px] placeholder-[#979797]'
        />
      </div>
    </div>
  );
}
