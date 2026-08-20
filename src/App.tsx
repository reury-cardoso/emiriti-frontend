import { ArtisansProvider } from './context/ArtisansContext';
import { BannersProvider } from './context/BannersContext';
import { ProductsProvider } from './context/ProductsContext';
import { Router } from './router';

function App() {
  return (
    <ArtisansProvider>
      <ProductsProvider>
        <BannersProvider>
          <main className='w-screen min-h-screen bg-[#FAFAFA] pb-[5.4rem] md:pb-0'>
            <Router />
          </main>
        </BannersProvider>
      </ProductsProvider>
    </ArtisansProvider>
  );
}

export default App;
