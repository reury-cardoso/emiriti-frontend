export default function PageMore() {
  return (
    <>
      <section className='mx-auto w-[90%] rounded-[16px] mt-[24px] py-[8px] pl-[16px] pr-[16px] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.10)]'>
        <h2 className='text-[1.3rem] font-bold text-[#424242]'>Sobre o Projeto</h2>
        <p className='pb-[16px] pt-[8px] text-[1rem] text-[#424242]'>
          Este projeto conecta artesãos locais a pessoas em busca de produtos artesanais. Explore e apoie o trabalho
          artesanal por meio do app.
        </p>
      </section>

      <section className='mx-auto mt-[16px] w-[90%] rounded-[16px] py-[8px] pl-[16px] pr-[16px] [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.10)]'>
        <h2 className='text-[1.3rem] font-bold text-[#424242]'>Fale Conosco</h2>
        <div className='flex flex-col gap-2 pt-[8px]'>
          <button className='h-[42px] rounded-[12px] bg-[#25D366] text-[1rem] font-bold text-[#FFF]'>WhatsApp</button>
          <button className='h-[42px] rounded-[12px] bg-[#007BFF] text-[1rem] font-bold text-[#FFF]'>Email</button>
          <button className='h-[42px] rounded-[12px] bg-[#E1306C] text-[1rem] font-bold text-[#FFF]'>Instagram</button>
        </div>
      </section>

      <section className='mx-auto mt-4 w-[90%] rounded-lg px-4 py-4 shadow-md'>
        <h2 className='text-xl font-bold text-gray-800'>Configurações</h2>
        <div className='flex flex-col gap-4 pt-2'>
          <div className='flex items-center justify-between'>
            <p className='text-base text-gray-800'>Notificações</p>
            <label className='relative inline-flex cursor-pointer items-center'>
              <input type='checkbox' className='peer sr-only' />
              <div className='peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-green-500 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:bg-gray-700'></div>
              <span className='absolute left-1 top-1 h-4 w-4 transform rounded-full bg-white transition-transform peer-checked:translate-x-5'></span>
            </label>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-base text-gray-800'>Idioma</p>
            <select className='rounded-md border border-gray-300 px-3 py-1 text-gray-800'>
              <option>Português</option>
            </select>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-base text-gray-800'>Tema</p>
            <button className='rounded-md bg-gray-200 px-4 py-1 text-sm text-gray-800 hover:bg-gray-300'>Claro</button>
          </div>
        </div>
      </section>
    </>
  );
}
