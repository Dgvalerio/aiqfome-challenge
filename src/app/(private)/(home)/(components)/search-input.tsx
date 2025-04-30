import { ComponentProps, FC } from 'react';

import { SearchIcon } from '@/components/icon/search';
import { Input } from '@/components/input/input';
import { cn } from '@/lib/tailwind/utils';

// todo[2025-04-30]: implementar search

export const SearchInput: FC<ComponentProps<'div'>> = ({
  className,
  ...props
}) => (
  <div className={cn('bg-primary p-4', className)} {...props}>
    <div
      className={cn(
        'bg-neutrals-0 border-dividers-gray flex items-center gap-2 rounded-xl border px-4 py-2 shadow-xs transition-[color,box-shadow]',
        'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]'
      )}
    >
      <div>
        <SearchIcon />
      </div>
      <Input
        className="h-auto border-transparent p-0 shadow-none focus-visible:border-transparent focus-visible:ring-transparent"
        placeholder="busque pela loja ou culinária"
      />
    </div>
  </div>
);
