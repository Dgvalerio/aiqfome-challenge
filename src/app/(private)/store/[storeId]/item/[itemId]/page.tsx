/* eslint-disable padding-line-between-statements */
import { NextPage } from 'next';

import { ItemForm } from '@/app/(private)/store/[storeId]/item/[itemId]/(components)/item-form';
import { Item } from '@/types/item';
import { ResponseAPI } from '@/types/response-api';

interface ItemPageProps {
  params: Promise<{ storeId: string; itemId: string }>;
  searchParams: Promise<object>;
}

const ItemPage: NextPage<ItemPageProps> = async ({ params }) => {
  const { storeId, itemId } = await params;

  const response = await fetch(
    `http://localhost:3001/api/stores/${storeId}/item/${itemId}`
  );

  const { success, data, messages }: ResponseAPI<Item> = await response.json();

  if (!success) {
    return <h1>{messages.join(`\n`)}</h1>;
  }

  return <ItemForm item={data} />;
};

export default ItemPage;
