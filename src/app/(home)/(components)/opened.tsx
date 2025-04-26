import { FC } from 'react';

import { Store, StoreProps } from '@/app/(home)/(components)/store';

export const OpenedStores: FC<{ stores: StoreProps[] }> = ({ stores }) => (
  <div className="flex flex-col gap-4 px-4 pb-3 pt-6">
    <h1 className="text-primary font-extrabold text-xl">abertos</h1>
    {stores.map((store, index) => (
      <Store key={index} {...store} />
    ))}
  </div>
);
