import { FC } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion/accordion';
import { ChevronRightIcon } from '@/components/icon/chevron-right';
import { CurrencyIcon } from '@/components/icon/currency';
import { DeliveryIcon } from '@/components/icon/delivery';
import { SaveIcon } from '@/components/icon/save';
import { ShareIcon } from '@/components/icon/share';
import { SpicyIcon } from '@/components/icon/spicy';
import { StarIcon } from '@/components/icon/star';
import { VeganIcon } from '@/components/icon/vegan';
import { cn } from '@/lib/tailwind/utils';
import { routes } from '@/utils/constants/routes';
import { formatCurrency } from '@/utils/functions/format-currency';

interface MenuSubItemProps {
  name: string;
  description: string;
  value: number;
  originalValue?: number;
  isInitial?: boolean;
  isSpicy?: boolean;
  isVegan?: boolean;
}

const Info: FC = () => (
  <section className="flex flex-col gap-1.5 px-4 py-6">
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
        <h1 className="text-xl font-extrabold">Matsuri Concept</h1>
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
          <span className="text-sm">{formatCurrency.format(4.99)}</span>
          <ChevronRightIcon />
        </div>
        <span className="text-neutrals-400">•</span>
        hoje, 30-40 min
        <span className="text-neutrals-400">•</span>
        5.2km
      </div>
      <div className="w-auto rounded bg-teal-50 px-2 py-1.5 text-teal-600">
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

const MenuItem: FC<{
  id: string;
  title: string;
  details?: string;
  items: MenuSubItemProps[];
  showCurrency?: boolean;
}> = ({ id, title, details, items, showCurrency }) => (
  <AccordionItem value={id}>
    <AccordionTrigger>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          {title} {showCurrency && <CurrencyIcon />}
        </div>
        {details && (
          <div className="text-neutrals-500 text-xs font-semibold">
            {details}
          </div>
        )}
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="flex flex-col gap-6 px-4 pt-2 pb-4">
        {items.map((item, index) => (
          <Link
            href={routes.store.item(7, 7)}
            key={index}
            className="flex gap-4"
          >
            <div className="flex-1">
              <div className="text-neutrals-900 flex items-center gap-1 text-sm font-semibold">
                {item.name} {item.isSpicy && <SpicyIcon />}
                {item.isVegan && <VeganIcon />}
              </div>
              <div
                className="text-neutrals-500 line-clamp-2 text-xs"
                title={item.description}
              >
                {item.description}
              </div>
            </div>
            <div className="text-right">
              {item.originalValue && (
                <div className="text-neutrals-500 text-xs font-bold line-through">
                  {formatCurrency.format(item.originalValue)}
                </div>
              )}
              {item.isInitial && (
                <div className="text-neutrals-500 text-xs font-bold">
                  a partir de
                </div>
              )}
              <div
                className={cn(
                  'flex items-center gap-0.5 text-sm font-bold',
                  item.originalValue ? 'text-green-500' : 'text-purple-500'
                )}
              >
                {item.originalValue && <CurrencyIcon height="16" width="16" />}
                {formatCurrency.format(item.value)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AccordionContent>
  </AccordionItem>
);

const subItems: MenuSubItemProps[] = [
  {
    name: 'Califórnia',
    description: 'Kani, pepino e maçã ou manga',
    value: 13.99,
    originalValue: 17,
  },
  {
    name: 'Califórnia',
    description: 'Kani, pepino e maçã ou manga',
    value: 13.99,
    isVegan: true,
  },
  {
    name: 'Filadélfia',
    description: 'Arroz, salmão fresco, cream cheese e cebolinha',
    value: 13.99,
  },
  {
    name: 'Mix',
    description:
      'Escolha 3 ingredientes: shimeji, alface americana, rúcula, pepino, tomate seco, cream cheese, maionese, goiabada, banana, requeijão, molho de maracujá, manga, maçã e morango.',
    value: 13.99,
    isInitial: true,
    isSpicy: true,
  },
  {
    name: 'Salmão picante',
    description: 'Alga, arroz, salmão fresco, pimenta e cebolinha',
    value: 13.99,
    isInitial: true,
    isSpicy: true,
  },
];

const Menu: FC = () => (
  <Accordion type="single" collapsible>
    <MenuItem id="item-1" title="Niguiris" showCurrency items={subItems} />
    <MenuItem
      id="item-2"
      title="Ceviches"
      details="um prato super refrescante de peixe fatiado e marinado com limão"
      showCurrency
      items={subItems}
    />
    <MenuItem
      id="item-3"
      title="Temakis"
      details="sushi em forma de cone com salmão e cream cheese"
      items={subItems}
    />
    <MenuItem id="item-4" title="Bebidas" items={subItems} />
    <MenuItem id="item-5" title="Sobremesas" items={subItems} />
  </Accordion>
);

const StorePage: NextPage = () => (
  <>
    <Info />
    <Menu />
  </>
);

export default StorePage;
