import { ComponentProps, FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@/components/icon/arrow-right';
import { LocationIcon } from '@/components/icon/location';
import { UserIcon } from '@/components/icon/user';
import { cn } from '@/lib/tailwind/utils';
import { routes } from '@/utils/constants/routes';

type HeaderProps = ComponentProps<'header'>;

export const Header: FC<HeaderProps> = ({ className, ...props }) => (
  <header
    className={cn(
      'bg-primary text-primary-foreground flex items-center gap-6 p-4',
      className
    )}
    {...props}
  >
    <Link href={routes.store.list()}>
      <Image
        priority
        width={32}
        height={32}
        src="/logo.svg"
        alt="Logo AiQFome"
      />
    </Link>
    <div className="flex flex-1 items-center gap-2.5">
      <LocationIcon />
      <div className="flex flex-1 flex-col gap-0.5 font-bold">
        <span className="text-sm text-purple-200">entregando em</span>
        <div className="flex items-center gap-1">
          <span>Rua Mandaguari, 198</span>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
    <UserIcon />
  </header>
);
