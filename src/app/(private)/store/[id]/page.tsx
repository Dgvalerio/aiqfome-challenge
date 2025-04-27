import { FC } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import { ChevronRightIcon } from '@/components/icon/chevron-right';
import { DeliveryIcon } from '@/components/icon/delivery';
import { SaveIcon } from '@/components/icon/save';
import { ShareIcon } from '@/components/icon/share';
import { StarIcon } from '@/components/icon/star';
import { cn } from '@/lib/tailwind/utils';
import { formatCurrency } from '@/utils/functions/format-currency';

const StoreInfo: FC = () => (
  <section className="py-6 px-4 flex flex-col gap-1.6">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src="https://picsum.photos/36"
          width={36}
          height={36}
          alt="Matsuri Concept"
          priority
          className={cn('rounded-xl')}
        />
        <h1 className="font-extrabold text-xl">Matsuri Concept</h1>
      </div>
      <div className="flex gap-3 items-center">
        <ShareIcon />
        <SaveIcon />
        <div className="flex text-xs ml-auto gap-1 items-center text-teal-400 px-0.5 py-1">
          mais infos
          <ChevronRightIcon />
        </div>
      </div>
    </div>
    <div className="font-bold items-start flex flex-col gap-1 text-xs text-neutrals-500">
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1 text-purple-500">
          <DeliveryIcon />
          <span className="text-sm">{formatCurrency.format(4.99)}</span>
          <ChevronRightIcon />
        </div>
        <span className="text-neutrals-400">•</span>
        hoje, 30-40 min
        <span className="text-neutrals-400">•</span>
        5.2km
      </div>
      <div className="bg-teal-50 text-teal-600 py-1.5 px-1 rounded w-auto">
        entrega grátis acima de R$ 35,00
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1">
          <StarIcon height="16" width="16" /> 4.5 de 5 <ChevronRightIcon />
        </div>
        <span className="text-neutrals-400">•</span>
        <span className="text-green-500">fecha às 20:00</span>
      </div>
      pedido mínimo: {formatCurrency.format(15)}
    </div>
  </section>
);

const StorePage: NextPage = () => <StoreInfo />;

export default StorePage;
