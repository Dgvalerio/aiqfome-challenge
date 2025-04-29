import { NextPage } from 'next';

import { StoreInfo } from '@/app/(private)/store/[storeId]/(components)/info';
import { StoreMenu } from '@/app/(private)/store/[storeId]/(components)/menu';

export interface MenuSubItemProps {
  name: string;
  description: string;
  value: number;
  originalValue?: number;
  isInitial?: boolean;
  isSpicy?: boolean;
  isVegan?: boolean;
}

const StorePage: NextPage = () => (
  <>
    <StoreInfo />
    <StoreMenu />
  </>
);

export default StorePage;
