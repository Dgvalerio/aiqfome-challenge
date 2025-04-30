import { ComponentProps, FC } from 'react';

import { cn } from '@/lib/tailwind/utils';

const Skeleton: FC<ComponentProps<'div'>> = ({ className, ...props }) => (
  <div
    data-slot="skeleton"
    className={cn('bg-accent animate-pulse rounded-md', className)}
    {...props}
  />
);

export { Skeleton };
