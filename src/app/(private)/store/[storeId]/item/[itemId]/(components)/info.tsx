import { FC } from 'react';

import Image from 'next/image';

import { Button } from '@/components/button/button';
import { QuantityInput } from '@/components/quantity-input/quantity-input';
import { formatCurrency } from '@/utils/functions/format-currency';

export const ItemInfo: FC = () => {
  const count: number = 2;

  return (
    <section className="border-neutrals-100 flex flex-col gap-4 border-b-4 pb-4">
      <Image
        src="https://picsum.photos/390/195"
        width={390}
        height={195}
        alt="Ceviche de salmão"
        priority
      />
      <div className="text-neutrals-500 flex flex-col gap-1.5 px-4 text-xs font-extrabold">
        <h1 className="text-neutrals-700 text-xl">Ceviche de salmão</h1>
        <div className="flex items-center gap-2 text-sm">
          a partir de
          <span className="text-lg text-purple-500">
            {formatCurrency.format(19.9)}
          </span>
        </div>
        <span className="font-semibold">
          salmão temperado com limão, cebola e pimenta
        </span>
      </div>
      <div className="flex justify-between px-4 py-2">
        <div className="text-neutrals-700 flex flex-col gap-1.5 font-bold">
          <h2>quantos?</h2>
          <div className="flex gap-1 text-sm">
            <span className="text-neutrals-500 font-semibold">total</span>
            <span>{formatCurrency.format(19.9)}</span>
          </div>
        </div>
        {count === 0 ? (
          <Button type="button" disabled>
            adicionar
          </Button>
        ) : (
          <QuantityInput value={0} size="lg" />
        )}
      </div>
    </section>
  );
};
