import { FC } from 'react';

import { Store, StoreProps } from '@/app/(private)/(home)/(components)/store';

export const ClosedStores: FC<{ stores: StoreProps[] }> = ({ stores }) => (
  <div className="flex flex-col gap-4 px-4 pb-3 pt-6">
    <h1 className="text-primary font-extrabold text-xl">fechados</h1>
    {stores.map((store, index) => (
      <Store key={index} {...store} isOpened={false} />
    ))}
  </div>
);
