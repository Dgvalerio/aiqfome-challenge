import { FC } from 'react';

import { StoreMenuItem } from '@/app/(private)/store/[storeId]/(components)/menu-item';
import { Accordion } from '@/components/accordion/accordion';
import { Store } from '@/types/store';

export const StoreMenu: FC<Store> = (store) => (
  <Accordion type="single" collapsible>
    {store.sections.map((section) => (
      <StoreMenuItem key={section.id} storeId={section.id} {...section} />
    ))}
  </Accordion>
);
