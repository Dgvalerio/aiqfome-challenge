import { FC } from 'react';

import { CategoryProps } from '@/app/(private)/store/[storeId]/item/[itemId]/page';
import { Checkbox } from '@/components/checkbox/checkbox';
import { CurrencyIcon } from '@/components/icon/currency';
import { Label } from '@/components/label/label';
import { QuantityInput } from '@/components/quantity-input/quantity-input';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/radio-group/radio-group';
import { cn } from '@/lib/tailwind/utils';
import { formatCurrency } from '@/utils/functions/format-currency';

export const ItemCategory: FC<CategoryProps> = ({
  title,
  isRequired,
  options,
  min,
  max,
}) => {
  const Group = max && max > 1 ? 'div' : RadioGroup;
  const Item = max && max > 1 ? Checkbox : RadioGroupItem;

  let choiceText = 'escolha';

  if (min) choiceText += ` de ${min}`;
  if (max) choiceText += ` até ${max}`;

  if (min === max) choiceText = `escolha ${min}`;
  if (!min && !max) choiceText = `escolha quantos quiser`;

  return (
    <section className="border-neutrals-100 flex flex-col gap-4 border-b-4 p-4">
      <div className="flex items-center justify-between gap-4 font-bold">
        <div className="flex flex-col gap-0.5">
          <h3>{title}</h3>
          <h4 className="text-neutrals-500 text-xs">{choiceText}</h4>
        </div>
        {isRequired && (
          <span className="bg-neutrals-700 text-neutrals-0 rounded px-2 py-1.5 text-xs">
            obrigatório
          </span>
        )}
      </div>
      <Group className="flex flex-col gap-3">
        {options.map((option) => (
          <div key={option.title} className="flex h-8 items-center gap-2">
            {!min && !max ? (
              <QuantityInput value={0} />
            ) : (
              <Item
                value={option.title.replace(' ', '-')}
                id={option.title.replace(' ', '-')}
              />
            )}
            <Label
              htmlFor={option.title.replace(' ', '-')}
              className="text-neutrals-500 flex w-full items-center gap-1"
            >
              {option.originalValue && <CurrencyIcon />}
              <span className="mr-auto">{option.title}</span>
              {option.originalValue && (
                <span className="text-xs font-bold">
                  de {formatCurrency.format(option.originalValue)} por
                </span>
              )}
              {option.value && (
                <span
                  className={cn(
                    'font-bold',
                    option.originalValue ? 'text-green-500' : 'text-purple-500'
                  )}
                >
                  {!min && '+'}
                  {formatCurrency.format(option.value)}
                </span>
              )}
            </Label>
          </div>
        ))}
      </Group>
    </section>
  );
};
