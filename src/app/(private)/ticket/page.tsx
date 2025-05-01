import { NextPage } from 'next';

import { TicketItems } from '@/app/(private)/ticket/(components)/items';
import { TicketTotal } from '@/app/(private)/ticket/(components)/total';

export interface TicketItem {
  store: string;
  items: {
    name: string;
    value: number;
    quantity: number;
    extras?: {
      label: string;
      content: {
        text: string;
        value?: number;
      }[];
    }[];
    observation?: string;
  }[];
}

const items: TicketItem[] = [
  {
    store: 'Matsuri Concept',
    items: [
      {
        name: 'Ceviche de salmão',
        value: 19.9,
        quantity: 2,
        extras: [
          { label: 'tamanho', content: [{ text: 'médio' }] },
          {
            label: 'vai querer bebida?',
            content: [{ text: 'coca-cola', value: 5 }],
          },
        ],
      },
      {
        name: 'Temaki Filadélfia',
        value: 14,
        quantity: 1,
        extras: [
          {
            label: 'escolha 3 ingredientes',
            content: [
              { text: 'shimeji' },
              { text: 'cream cheese' },
              { text: 'tomate seco' },
            ],
          },
        ],
        observation: 'tirar a cebolinha',
      },
      {
        name: 'Temaki Mix',
        value: 22,
        quantity: 1,
        extras: [
          { label: 'quer o dobro?', content: [{ text: 'salmão', value: 8 }] },
        ],
      },
      {
        name: 'Coca-cola lata',
        value: 10,
        quantity: 2,
      },
    ],
  },
];

const TicketPage: NextPage = () => (
  <div className="flex flex-col gap-5">
    <TicketItems items={items} />
    <TicketTotal />
  </div>
);

export default TicketPage;
