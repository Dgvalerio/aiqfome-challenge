'use client';

import { FC } from 'react';
import { Controller, NonUndefined, useFormContext } from 'react-hook-form';

import Image from 'next/image';

import { FormItem } from '@/app/(private)/store/[storeId]/item/[itemId]/(components)/item-form';
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
  categories,
  originalValue,
}) => {
  const form = useFormContext<FormItem>();

  const handleAdd = (): void => form.setValue('quantity', 1);

  const quantity = form.watch('quantity');
  const extras:
    | Record<string, NonUndefined<FormItem['extras']>[number]>
    | undefined = form
    .watch('extras')
    ?.reduce((prev, curr) => ({ ...prev, [curr.id]: curr }), {});

  const addEnabled = categories
    .map((category) => {
      if (category.min) {
        if (category.min > 0) {
          if (!extras) return false;

          const item = extras[category.id];
          const quantity = item.content.reduce(
            (prev, content) => prev + (content.quantity || 0),
            0
          );
          const checked = item.content.reduce(
            (prev, content) => prev + (content.checked ? 1 : 0),
            0
          );

          return (
            !!item.radio || quantity >= category.min || checked >= category.min
          );
        } else {
          return true;
        }
      } else {
        return true;
      }
    })
    .every((item) => item);

  return (
    <section className="border-neutrals-100 flex flex-col gap-4 border-b-4 pb-4">
      <Image src={image} width={390} height={195} alt={name} priority />
      <div className="text-neutrals-500 flex flex-col gap-1.5 px-4 text-xs font-extrabold">
        <h1 className="text-neutrals-700 flex items-center gap-2 text-xl">
          {name} {isSpicy && <SpicyIcon />}
          {isVegan && <VeganIcon />}
        </h1>
        {isInitial && originalValue && (
          <span className="text-lg text-purple-500">
            {formatCurrency.format(originalValue)}
          </span>
        )}
        <span className="font-semibold">{description}</span>
      </div>
      <div className="flex justify-between px-4 py-2">
        <div className="text-neutrals-700 flex flex-col gap-1.5 font-bold">
          <h2>quantos?</h2>
          <div className="flex gap-1 text-sm">
            <span className="text-neutrals-500 font-semibold">total</span>
            <span>{formatCurrency.format(value)}</span>
          </div>
        </div>
        {quantity === 0 ? (
          <Button type="button" onClick={handleAdd} disabled={!addEnabled}>
            adicionar
          </Button>
        ) : (
          <Controller
            name="quantity"
            control={form.control}
            render={({ field: { value, onChange } }) => (
              <QuantityInput value={value || 0} onChange={onChange} size="lg" />
            )}
          />
        )}
      </div>
    </section>
  );
};
