import { FC } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import { Button } from '@/components/button';
import { formatCurrency } from '@/utils/functions/format-currency';

const Info: FC = () => (
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
      <Button type="button" variant="secondary">
        adicionar
      </Button>
    </div>
  </section>
);

const ItemPage: NextPage = () => <Info />;

export default ItemPage;
