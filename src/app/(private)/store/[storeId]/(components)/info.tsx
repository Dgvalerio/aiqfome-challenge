import { FC } from 'react';

import Image from 'next/image';

import { ChevronRightIcon } from '@/components/icon/chevron-right';
import { DeliveryIcon } from '@/components/icon/delivery';
import { SaveIcon } from '@/components/icon/save';
import { ShareIcon } from '@/components/icon/share';
import { StarIcon } from '@/components/icon/star';
import { Store } from '@/types/store';
import { formatCurrency } from '@/utils/functions/format-currency';

export const StoreInfo: FC<Store> = (store) => (
  <section className="flex flex-col gap-1.5 px-4 py-6">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src={store.image}
          width={36}
          height={36}
          alt={store.name}
          priority
          className="rounded-xl"
        />
        <h1 className="text-xl font-extrabold">{store.name}</h1>
      </div>
      <div className="flex items-center gap-3">
        <ShareIcon />
        <SaveIcon />
        <div className="ml-auto flex items-center gap-1 px-0.5 py-1 text-xs font-bold text-teal-400">
          mais infos
          <ChevronRightIcon />
        </div>
      </div>
    </div>
    <div className="text-neutrals-500 flex flex-col items-start gap-1 text-xs font-bold">
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1 text-purple-500">
          <DeliveryIcon />
          <span className="text-sm">
            {formatCurrency.format(store.shipping)}
          </span>
          <ChevronRightIcon />
        </div>
        <span className="text-neutrals-400">•</span>
        {/* todo[2025-04-30]: implementável com serviço de mapa */}
        hoje, 30-40 min
        <span className="text-neutrals-400">•</span>
        {/* todo[2025-04-30]: implementável com serviço de mapa */}
        5.2km
      </div>
      <div className="w-auto rounded bg-teal-50 px-2 py-1.5 text-teal-600">
        {/* todo[2025-04-30]: implementável adicionando na entidade */}
        entrega grátis acima de R$ 35,00
      </div>
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1">
          <StarIcon height="16" width="16" /> {store.rating} de 5
          <ChevronRightIcon />
        </div>
        <span className="text-neutrals-400">•</span>
        <span className="text-green-500">fecha às {store.closeTime}</span>
      </div>
      {/* todo[2025-04-30]: implementável adicionando na entidade */}
      pedido mínimo: {formatCurrency.format(15)}
    </div>
  </section>
);
