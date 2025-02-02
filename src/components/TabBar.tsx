import { memo } from 'react';
import { House, Menu, Store, UserSearch } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const TabBarItem = memo(({ isActive, label, icon: Icon, onClick }: any) => (
  <div
    onClick={onClick}
    className={`flex w-full flex-col items-center gap-[4px] rounded-tl-[10px] rounded-br-[0] rounded-tr-[10px] rounded-bl-[0] px-[24px] py-[20px] text-[12px] font-medium ${
      isActive ? 'text-[#0033EC]' : 'text-[#636161] '
    } transition-transform duration-300 ease-in-out hover:scale-105`}
  >
    <Icon />
    <span>{label}</span>
  </div>
));

export function TabBar() {
  const { currentPage, navigate } = useNavigation();

  return (
    <footer className='fixed bottom-0 z-[100000] flex w-full select-none justify-between border-t bg-[#FCFCFC] shadow-[0px_-2px_12px_0px_rgba(0,0,0,0.08)]'>
      <TabBarItem isActive={currentPage === '/'} label='Home' icon={House} onClick={() => navigate('/')} />
      <TabBarItem
        isActive={currentPage === '/products'}
        label='Produtos'
        icon={Store}
        onClick={() => navigate('/products')}
      />
      <TabBarItem
        isActive={currentPage === '/artisans'}
        label='Artesãos'
        icon={UserSearch}
        onClick={() => navigate('/artisans')}
      />
      <TabBarItem isActive={currentPage === '/more'} label='Mais' icon={Menu} onClick={() => navigate('/more')} />
    </footer>
  );
}
