'use client';

import { FC, useState } from 'react';

import { Button } from '@/components/button/button';
import { MinusIcon } from '@/components/icon/minus';
import { PlusIcon } from '@/components/icon/plus';
import { TrashIcon } from '@/components/icon/trash';

import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  [
    'm-0.5 !p-0 text-teal-400',
    'disabled:text-neutrals-400 disabled:bg-neutrals-100',
  ],
  {
    variants: {
      size: {
        md: 'size-6 ',
        lg: 'size-8 ',
      },
      variant: {
        borderless: '',
        default:
          'border-teal-400 border rounded-full disabled:border-transparent',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
    compoundVariants: [
      {
        variant: 'default',
        size: 'md',
        className: "[&_svg:not([class*='size-'])]:w-2",
      },
      {
        variant: 'default',
        size: 'lg',
        className: "[&_svg:not([class*='size-'])]:w-2",
      },
      {
        variant: 'borderless',
        size: 'md',
        className: "[&_svg:not([class*='size-'])]:w-4",
      },
      {
        variant: 'borderless',
        size: 'lg',
        className: "[&_svg:not([class*='size-'])]:w-[22px]",
      },
    ],
  }
);

interface QuantityInputProps extends VariantProps<typeof inputVariants> {
  value: number;
}

export const QuantityInput: FC<QuantityInputProps> = ({ value, size }) => {
  const [count, setCount] = useState(value || 0);

  const handleAdd = (): void => setCount((prev) => prev + 1);

  const handleRemove = (): void =>
    setCount((prev) => {
      if (prev === 0) return prev;

      return prev - 1;
    });

  return (
    <div className="flex items-center gap-1.5 font-bold">
      <Button
        variant="ghost"
        className={inputVariants({
          variant: count === 1 ? 'borderless' : 'default',
          size,
        })}
        onClick={handleRemove}
        disabled={count === 0}
      >
        {count === 1 ? <TrashIcon /> : <MinusIcon />}
      </Button>
      <span className="min-w-8 text-center">{count}</span>
      <Button
        variant="ghost"
        className={inputVariants({ size })}
        onClick={handleAdd}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};
