import { NextPage } from 'next';
import Link from 'next/link';

import { ItemCategory } from '@/app/(private)/store/[storeId]/item/[itemId]/(components)/category';
import { ItemInfo } from '@/app/(private)/store/[storeId]/item/[itemId]/(components)/info';
import { Button } from '@/components/button/button';
import { Textarea } from '@/components/textarea/textarea';
import { routes } from '@/utils/constants/routes';

export interface CategoryProps {
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

const ItemPage: NextPage = () => {
  const count: number = 1;

  return (
    <>
      <ItemInfo />
      {categories.map((category) => (
        <ItemCategory key={category.title} {...category} />
      ))}
      <div className="mb-11 flex flex-col gap-4 p-4">
        <Textarea
          placeholder={`alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato`}
        />
        {count > 0 && (
          <div className="fixed right-0 bottom-0 left-0 px-6 py-4">
            <Button asChild className="w-full" size="lg">
              <Link href={routes.ticket()}>ver ticket</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemPage;
