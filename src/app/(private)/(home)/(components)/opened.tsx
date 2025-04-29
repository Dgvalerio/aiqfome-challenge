import { FC } from 'react';

import { Store, StoreProps } from '@/app/(private)/(home)/(components)/store';

export const OpenedStores: FC<{ stores: StoreProps[] }> = ({ stores }) => (
  <div className="flex flex-col gap-4 px-4 pt-6 pb-3">
    <h1 className="text-primary text-xl font-extrabold">abertos</h1>
    {stores.map((store, index) => (
      <Store key={index} {...store} />
    ))}
  </div>
);
