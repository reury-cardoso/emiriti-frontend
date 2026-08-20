import { memo } from 'react';
import { House, Menu, Store, UserSearch } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const TabBarItem = memo(({ isActive, label, icon: Icon, onClick }: any) => (
  <button
    onClick={onClick}
    className='duration-250 relative flex w-full flex-col items-center gap-1.5 px-4 py-3 transition-all ease-bounce active:scale-95'
  >
    {isActive && <div className='absolute left-1/2 top-0 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[#00A86B]' />}
    <Icon
      size={24}
      strokeWidth={2}
      className={`transition-colors ${isActive ? 'text-[#00A86B]' : 'text-gray-500'}`}
      fill='none'
    />
    <span className={`text-xs font-medium transition-colors ${isActive ? 'text-[#00A86B]' : 'text-gray-500'}`}>
      {label}
    </span>
  </button>
));

export function TabBar() {
  const { currentPage, navigate } = useNavigation();

  return (
    <footer className='fixed bottom-0 z-[997] md:hidden flex w-full select-none justify-between border-t border-border bg-card/95 shadow-top backdrop-blur-md'>
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
