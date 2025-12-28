export default function PageMore() {
  return (
    <div className='animate-fade-in'>
      {/* Sobre o Projeto */}
      <section className='mx-auto mt-6 w-[90%] rounded-lg border border-amazonia/10 bg-amazonia-light p-5'>
        <div className='mb-3 flex items-center gap-2'>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
              fill='#00A86B'
            />
          </svg>
          <h2 className='text-xl font-bold text-text-primary'>Sobre o Projeto</h2>
        </div>
        <p className='font-secondary text-base leading-relaxed text-text-primary'>
          O E-Miriti conecta artesãos de Abaetetuba com pessoas que valorizam o artesanato tradicional amazônico. Cada
          peça conta uma história e preserva a cultura do miriti, uma palmeira típica da região.
        </p>
        <div className='mt-4 flex flex-wrap gap-2'>
          <span className='rounded-xl bg-amazonia px-3 py-1.5 text-xs font-medium text-white'>
            Artesanato Sustentável
          </span>
          <span className='rounded-xl bg-miriti px-3 py-1.5 text-xs font-medium text-white'>Arte Tradicional</span>
        </div>
      </section>

      {/* Fale Conosco */}
      <section className='mx-auto mt-4 w-[90%] rounded-lg bg-card p-5 shadow-card'>
        <h2 className='mb-4 text-xl font-bold text-text-primary'>Fale Conosco</h2>
        <div className='flex flex-col gap-3'>
          <a
            href='https://wa.me/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp font-semibold text-white transition-all hover:bg-whatsapp/90 active:scale-95'
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
            </svg>
            WhatsApp
          </a>
          <a
            href='mailto:contato@emiriti.com'
            className='flex h-12 items-center justify-center gap-2 rounded-xl bg-[#007BFF] font-semibold text-white transition-all hover:bg-[#007BFF]/90 active:scale-95'
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <rect x='3' y='4' width='18' height='16' rx='2' />
              <path d='m3 4 9 9 9-9' />
            </svg>
            Email
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex h-12 items-center justify-center gap-2 rounded-xl font-semibold text-white transition-all active:scale-95'
            style={{ background: 'linear-gradient(135deg, #E1306C, #FD1D1D, #F77737)' }}
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
            Instagram
          </a>
        </div>
      </section>

      {/* Configurações */}
      <section className='mx-auto mt-4 w-[90%] rounded-lg bg-card p-5 shadow-card'>
        <h2 className='mb-4 text-xl font-bold text-text-primary'>Configurações</h2>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between border-b border-border py-2'>
            <p className='text-base font-medium text-text-primary'>Notificações</p>
            <label className='relative inline-flex cursor-pointer items-center'>
              <input type='checkbox' className='peer sr-only' />
              <div className='peer h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-amazonia'></div>
              <span className='absolute left-1 top-1 h-4 w-4 transform rounded-full bg-white shadow-card transition-transform peer-checked:translate-x-5'></span>
            </label>
          </div>

          <div className='flex items-center justify-between border-b border-border py-2'>
            <p className='text-base font-medium text-text-primary'>Idioma</p>
            <select className='rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-text-primary focus:border-amazonia focus:outline-none'>
              <option>Português</option>
              <option>English</option>
            </select>
          </div>

          <div className='flex items-center justify-between py-2'>
            <p className='text-base font-medium text-text-primary'>Tema</p>
            <button className='rounded-lg border border-border bg-background px-4 py-1.5 text-sm font-medium text-text-primary transition-colors hover:border-amazonia hover:bg-amazonia-light'>
              Claro
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className='mx-auto mt-6 w-[90%] pb-4 text-center'>
        <p className='text-sm text-text-secondary'>
          Feito com <span className='text-miriti'>❤️</span> em Abaetetuba
        </p>
        <p className='mt-1 text-xs text-text-secondary'>v1.0.0 © 2026 E-Miriti</p>
      </div>
    </div>
  );
}
