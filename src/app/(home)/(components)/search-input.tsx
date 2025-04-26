import { FC } from 'react';

import { SearchIcon } from '@/components/icon/search';
import { Input } from '@/components/input/input';
import { cn } from '@/lib/tailwind/utils';

export const SearchInput: FC = () => (
  <div className="p-4">
    <div
      className={cn(
        'py-2 px-4 rounded-xl gap-2 flex items-center bg-neutrals-0 border-[#CDD1D9] border shadow-xs transition-[color,box-shadow]',
        'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]'
      )}
    >
      <div>
        <SearchIcon />
      </div>
      <Input
        className="p-0 border-transparent h-auto shadow-none focus-visible:border-transparent focus-visible:ring-transparent"
        placeholder="busque pela loja ou culinária"
      />
    </div>
  </div>
);
