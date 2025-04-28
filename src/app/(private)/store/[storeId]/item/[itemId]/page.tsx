import { FC } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button/button';
import { Checkbox } from '@/components/checkbox/checkbox';
import { CurrencyIcon } from '@/components/icon/currency';
import { MinusIcon } from '@/components/icon/minus';
import { PlusIcon } from '@/components/icon/plus';
import { TrashIcon } from '@/components/icon/trash';
import { Label } from '@/components/label/label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/radio-group/radio-group';
import { Textarea } from '@/components/textarea/textarea';
import { cn } from '@/lib/tailwind/utils';
import { routes } from '@/utils/constants/routes';
import { formatCurrency } from '@/utils/functions/format-currency';

const Info: FC = () => {
  const count: number = 2;

  return (
    <section className="flex flex-col gap-4 border-b-4 pb-4 border-neutrals-100">
      <Image
        src="https://picsum.photos/390/195"
        width={390}
        height={195}
        alt="Ceviche de salmão"
        priority
      />
      <div className="font-extrabold flex flex-col px-4 gap-1.5 text-xs text-neutrals-500">
        <h1 className="text-xl text-neutrals-700">Ceviche de salmão</h1>
        <div className="flex text-sm items-center gap-2">
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
        <div className="text-neutrals-700 font-bold flex flex-col gap-1.5">
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
          <div className="font-bold flex gap-1.5 items-center">
            <Button
              variant="ghost"
              className={cn(
                'w-8 h-8 m-0.5 !p-0 text-teal-400',
                count > 1 && 'border-teal-400 border rounded-full'
              )}
            >
              {count > 1 ? <MinusIcon className="!w-2" /> : <TrashIcon />}
            </Button>
            <span className="min-w-8 text-center">{count}</span>
            <Button
              variant="ghost"
              className="border-teal-400 border rounded-full text-teal-400 !p-0 w-8 h-8 m-0.5"
            >
              <PlusIcon className="!w-2.5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

interface CategoryProps {
  title: string;
  isRequired?: boolean;
  min?: number;
  max?: number;
  options: { title: string; value?: number; originalValue?: number }[];
}

const categories: CategoryProps[] = [
  {
    title: 'qual o tamanho?',
    isRequired: true,
    min: 1,
    max: 1,
    options: [
      { title: 'médio', value: 19.9, originalValue: 22.9 },
      { title: 'grande', value: 28.9 },
    ],
  },
  {
    title: 'acompanhamentos',
    isRequired: true,
    min: 1,
    max: 2,
    options: [
      { title: 'shoyu' },
      { title: 'gengibre' },
      { title: 'wasabi' },
      { title: 'sem acompanhamentos' },
    ],
  },
  {
    title: 'vai querer bebida?',
    options: [
      { title: 'coca-cola', value: 5 },
      { title: 'fanta laranja', value: 5 },
      { title: 'guaraná antarctica', value: 5 },
      { title: 'suco prats laranja', value: 6 },
      { title: 'água sem gás', value: 3 },
    ],
  },
  {
    title: 'precisa de talher?',
    max: 1,
    options: [
      { title: 'hashi' },
      { title: 'garfo e faca descartável', value: 1 },
    ],
  },
  {
    title: 'mais alguma coisa?',
    max: 2,
    options: [
      { title: 'biscoito da sorte', value: 2 },
      { title: 'rolinho primavera', value: 8 },
      { title: 'guioza', value: 6 },
    ],
  },
];

const Category: FC<CategoryProps> = ({
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
    <section className="p-4 flex flex-col gap-4 border-b-4 border-neutrals-100">
      <div className="font-bold flex gap-4 justify-between items-center">
        <div className="flex flex-col gap-0.5">
          <h3>{title}</h3>
          <h4 className="text-xs text-neutrals-500">{choiceText}</h4>
        </div>
        {isRequired && (
          <span className="text-xs py-1.5 px-2 bg-neutrals-700 text-neutrals-0 rounded">
            obrigatório
          </span>
        )}
      </div>
      <Group className="flex flex-col gap-3">
        {options.map((option) => (
          <div key={option.title} className="flex items-center gap-2 h-8">
            {!min && !max ? (
              <div className="font-bold flex gap-1.5 items-center">
                <Button
                  variant="ghost"
                  className="bg-neutrals-100 rounded-full text-neutrals-400 !p-0 w-6 h-6 m-0.5"
                >
                  <MinusIcon className="!w-2" />
                </Button>
                <span className="min-w-8 text-center">0</span>
                <Button
                  variant="ghost"
                  className="border-teal-400 border rounded-full text-teal-400 !p-0 w-6 h-6 m-0.5"
                >
                  <PlusIcon className="!w-2" />
                </Button>
              </div>
            ) : (
              <Item
                value={option.title.replace(' ', '-')}
                id={option.title.replace(' ', '-')}
              />
            )}
            <Label
              htmlFor={option.title.replace(' ', '-')}
              className="flex items-center gap-1 w-full text-neutrals-500"
            >
              {option.originalValue && <CurrencyIcon />}
              <span className="mr-auto">{option.title}</span>
              {option.originalValue && (
                <span className="font-bold text-xs">
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

const ItemPage: NextPage = () => {
  const count: number = 1;

  return (
    <>
      <Info />
      {categories.map((category) => (
        <Category key={category.title} {...category} />
      ))}
      <div className="flex flex-col gap-4 p-4">
        <Textarea
          placeholder={`alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato`}
        />
        {count > 0 && (
          <Button asChild>
            <Link href={routes.ticket()}>ver ticket</Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default ItemPage;
