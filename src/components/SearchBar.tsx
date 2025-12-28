import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='flex h-20 w-screen items-center border-b border-border bg-card px-5 py-4'>
      <div className='relative w-full'>
        <Search
          size={20}
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
            isFocused ? 'text-amazonia' : 'text-text-secondary'
          }`}
        />
        <input
          type='text'
          placeholder='Buscar arte amazônica...'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`h-11 w-full rounded-xl border bg-background px-4 pl-12 text-base text-text-primary transition-all placeholder:text-text-secondary focus:outline-none ${
            isFocused ? 'border-2 border-amazonia shadow-[0_0_0_3px_rgba(0,168,107,0.1)]' : 'border border-border'
          }`}
        />
      </div>
    </div>
  );
}
