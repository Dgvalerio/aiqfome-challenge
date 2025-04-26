import { ComponentProps, FC } from 'react';

import Image from 'next/image';

import { ArrowRightIcon } from '@/components/icon/arrow-right';
import { LocationIcon } from '@/components/icon/location';
import { UserIcon } from '@/components/icon/user';
import { cn } from '@/lib/tailwind/utils';

type HeaderProps = ComponentProps<'header'>;

export const Header: FC<HeaderProps> = ({ className, ...props }) => (
  <header
    className={cn(
      'bg-primary text-primary-foreground gap-6 flex p-4 items-center',
      className
    )}
    {...props}
  >
    <Image priority width={32} height={32} src="/logo.svg" alt="Logo AiQFome" />
    <div className="flex gap-2.5 items-center flex-1">
      <LocationIcon />
      <div className="flex flex-col flex-1 gap-0.5 font-bold">
        <span className="text-purple-200 text-sm">entregando em</span>
        <div className="flex gap-1 items-center">
          <span>Rua Mandaguari, 198</span>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
    <UserIcon />
  </header>
);
