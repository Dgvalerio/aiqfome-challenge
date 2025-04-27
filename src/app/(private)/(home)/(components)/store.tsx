import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AiqentregaIcon } from '@/components/icon/aiqentrega';
import { DeliveryIcon } from '@/components/icon/delivery';
import { StarIcon } from '@/components/icon/star';
import { cn } from '@/lib/tailwind/utils';
import { formatCurrency } from '@/utils/functions/format-currency';

export interface StoreProps {
  image: string;
  name: string;
  shipping: number;
  rating: number;
  isOpened?: boolean;
}

export const Store: FC<StoreProps> = ({
  image,
  name,
  shipping,
  rating,
  isOpened = true,
}) => (
  <Link
    href="/store/7"
    className="bg-neutrals-50 flex font-bold rounded-xl items-center"
  >
    <Image
      src={image}
      width={72}
      height={72}
      alt={name}
      className={cn('rounded-xl', !isOpened && 'opacity-40')}
    />
    <div className="flex flex-col p-3">
      <span className="text-neutrals-700">{name}</span>
      <div className="flex items-center text-sm gap-1">
        <div className="flex items-center gap-[2px]">
          {shipping > 0 ? (
            <>
              <AiqentregaIcon />
              <span className="text-primary">
                {formatCurrency.format(shipping)}
              </span>
            </>
          ) : (
            <>
              <DeliveryIcon className="text-teal-600" />
              <span className="text-teal-600">grátis</span>
            </>
          )}
        </div>
        <span className="text-neutral-400">•</span>
        <div className="flex items-center gap-[2px]">
          <StarIcon />
          <span className="text-neutrals-500">{rating}</span>
        </div>
      </div>
    </div>
  </Link>
);
