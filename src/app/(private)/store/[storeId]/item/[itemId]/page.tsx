/* eslint-disable padding-line-between-statements */
import { NextPage } from 'next';

import { ItemForm } from '@/app/(private)/store/[storeId]/item/[itemId]/(components)/item-form';
import { Item } from '@/types/item';
import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';
import { env } from '@/utils/constants/env';

interface ItemPageProps {
  params: Promise<{ storeId: string; itemId: string }>;
  searchParams: Promise<object>;
}

const ItemPage: NextPage<ItemPageProps> = async ({ params }) => {
  const { storeId, itemId } = await params;

  const itemResponse = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/api/stores/${storeId}/item/${itemId}`
  );

  const {
    success: itemSuccess,
    data: item,
    messages: itemMessages,
  }: ResponseAPI<Item> = await itemResponse.json();

  if (!itemSuccess) {
    return <h1>{itemMessages.join(`;\n`)}</h1>;
  }

  const storeResponse = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/api/stores/${storeId}`
  );

  const {
    success: storeSuccess,
    data: store,
    messages: storeMessages,
  }: ResponseAPI<Store> = await storeResponse.json();

  if (!storeSuccess) {
    return <h1>{storeMessages.join(';\n')}</h1>;
  }

  return <ItemForm store={store} item={item} />;
};

export default ItemPage;
