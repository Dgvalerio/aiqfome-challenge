import { FC } from 'react';

import Image from 'next/image';

import { Button } from '@/components/button/button';
import { SpicyIcon } from '@/components/icon/spicy';
import { VeganIcon } from '@/components/icon/vegan';
import { QuantityInput } from '@/components/quantity-input/quantity-input';
import { Item } from '@/types/item';
import { formatCurrency } from '@/utils/functions/format-currency';

export const ItemInfo: FC<Item> = ({
  image,
  name,
  isInitial,
  value,
  description,
  isVegan,
  isSpicy,
}) => {
  const count: number = 2;

  return (
    <section className="border-neutrals-100 flex flex-col gap-4 border-b-4 pb-4">
      <Image src={image} width={390} height={195} alt={name} priority />
      <div className="text-neutrals-500 flex flex-col gap-1.5 px-4 text-xs font-extrabold">
        <h1 className="text-neutrals-700 flex items-center gap-2 text-xl">
          {name} {isSpicy && <SpicyIcon />}
          {isVegan && <VeganIcon />}
        </h1>
        {isInitial && (
          <span className="text-lg text-purple-500">
            {formatCurrency.format(value)}
          </span>
        )}
        <span className="font-semibold">{description}</span>
      </div>
      <div className="flex justify-between px-4 py-2">
        <div className="text-neutrals-700 flex flex-col gap-1.5 font-bold">
          <h2>quantos?</h2>
          <div className="flex gap-1 text-sm">
            <span className="text-neutrals-500 font-semibold">total</span>
            <span>{formatCurrency.format(count * value)}</span>
          </div>
        </div>
        {count === 0 ? (
          <Button type="button" disabled>
            adicionar
          </Button>
        ) : (
          <QuantityInput value={count} size="lg" />
        )}
      </div>
    </section>
  );
};
