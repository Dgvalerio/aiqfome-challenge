import { FC } from 'react';

import { StoreMenuItem } from '@/app/(private)/store/[storeId]/(components)/menu-item';
import { MenuSubItemProps } from '@/app/(private)/store/[storeId]/page';
import { Accordion } from '@/components/accordion/accordion';

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

export const StoreMenu: FC = () => (
  <Accordion type="single" collapsible>
    <StoreMenuItem id="item-1" title="Niguiris" showCurrency items={subItems} />
    <StoreMenuItem
      id="item-2"
      title="Ceviches"
      details="um prato super refrescante de peixe fatiado e marinado com limão"
      showCurrency
      items={subItems}
    />
    <StoreMenuItem
      id="item-3"
      title="Temakis"
      details="sushi em forma de cone com salmão e cream cheese"
      items={subItems}
    />
    <StoreMenuItem id="item-4" title="Bebidas" items={subItems} />
    <StoreMenuItem id="item-5" title="Sobremesas" items={subItems} />
  </Accordion>
);
