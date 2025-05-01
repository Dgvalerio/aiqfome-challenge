import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormItem } from '@/app/(private)/store/[storeId]/item/[itemId]/(components)/item-form';
import { Checkbox } from '@/components/checkbox/checkbox';
import { CurrencyIcon } from '@/components/icon/currency';
import { Label } from '@/components/label/label';
import { QuantityInput } from '@/components/quantity-input/quantity-input';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/radio-group/radio-group';
import { cn } from '@/lib/tailwind/utils';
import { Category } from '@/types/category';
import { formatCurrency } from '@/utils/functions/format-currency';

const OptionLabel: FC<
  Pick<Category['options'][number], 'originalValue' | 'title' | 'value'> & {
    htmlFor: string;
    hasMin: boolean;
  }
> = ({ originalValue, title, value, htmlFor, hasMin }) => (
  <Label
    htmlFor={htmlFor}
    className="text-neutrals-500 flex w-full items-center gap-1"
  >
    {originalValue && <CurrencyIcon />}
    <span className="mr-auto">{title}</span>
    {originalValue && (
      <span className="text-xs font-bold">
        de {formatCurrency.format(originalValue)} por
      </span>
    )}
    {value && (
      <span
        className={cn(
          'font-bold',
          originalValue ? 'text-green-500' : 'text-purple-500'
        )}
      >
        {!hasMin && '+'}
        {formatCurrency.format(value)}
      </span>
    )}
  </Label>
);

export const ItemCategory: FC<Category & { index: number }> = ({
  index,
  id,
  title,
  options,
  min,
  max,
}) => {
  const form = useFormContext<FormItem>();

  let inputType: 'quantity' | 'checkbox' | 'radio' = 'radio';

  if (!min && !max) inputType = 'quantity';
  if (max && max > 1) inputType = 'checkbox';

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
        {min && min > 0 && (
          <span className="bg-neutrals-700 text-neutrals-0 rounded px-2 py-1.5 text-xs">
            obrigatório
          </span>
        )}
      </div>
      {inputType === 'quantity' && (
        <div className="flex flex-col gap-3">
          {options.map((option, idx) => (
            <div key={option.title} className="flex h-8 items-center gap-2">
              <Controller
                name={`extras.${index}.content.${idx}.quantity`}
                control={form.control}
                render={({ field: { value, onChange } }) => (
                  <QuantityInput value={value || 0} onChange={onChange} />
                )}
              />
              <OptionLabel
                hasMin={!!min}
                title={option.title}
                value={option.value}
                originalValue={option.originalValue}
                htmlFor={id + option.title}
              />
            </div>
          ))}
        </div>
      )}
      {inputType === 'checkbox' && (
        <div className="flex flex-col gap-3">
          {options.map((option, idx) => (
            <div key={option.title} className="flex h-8 items-center gap-2">
              <Controller
                name={`extras.${index}.content.${idx}.checked`}
                control={form.control}
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    id={id + option.title}
                    checked={!!value}
                    onCheckedChange={onChange}
                  />
                )}
              />
              <OptionLabel
                hasMin={!!min}
                title={option.title}
                value={option.value}
                originalValue={option.originalValue}
                htmlFor={id + option.title}
              />
            </div>
          ))}
        </div>
      )}
      {inputType === 'radio' && (
        <Controller
          name={`extras.${index}.radio`}
          control={form.control}
          render={({ field: { value, ...field } }) => (
            <RadioGroup
              className="flex flex-col gap-3"
              value={value}
              onValueChange={field.onChange}
            >
              {options.map((option) => (
                <div key={option.title} className="flex h-8 items-center gap-2">
                  <RadioGroupItem value={option.title} id={id + option.title} />
                  <OptionLabel
                    hasMin={!!min}
                    title={option.title}
                    value={option.value}
                    originalValue={option.originalValue}
                    htmlFor={id + option.title}
                  />
                </div>
              ))}
            </RadioGroup>
          )}
        />
      )}
    </section>
  );
};
