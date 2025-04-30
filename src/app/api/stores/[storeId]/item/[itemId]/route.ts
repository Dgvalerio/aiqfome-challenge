import { NextRequest } from 'next/server';

import { Item } from '@/types/item';
import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';

import { promises as fs } from 'node:fs';

export const GET = async (
  _req: NextRequest,
  props: { params: Promise<{ storeId: string; itemId: string }> }
): Promise<Response> => {
  let response: ResponseAPI<Item | null>;
  const params = await props.params;

  try {
    const file = await fs.readFile(
      process.cwd() + '/src/app/api/db.json',
      'utf8'
    );

    const data: Store[] = JSON.parse(file);

    const store = data.find((store: Store) => store.id === params.storeId);

    if (!store) {
      response = {
        success: false,
        data: null,
        messages: ['Loja não encontrada!'],
      };
    } else {
      const item = store.sections
        .reduce((prev, curr) => prev.concat(curr.items), [] as Item[])
        .find((item) => item.id === params.itemId);

      response = !item
        ? {
            success: false,
            data: null,
            messages: ['Produto não encontrado!'],
          }
        : { success: true, data: item, messages: [] };
    }
  } catch (e) {
    response = {
      success: false,
      data: null,
      messages: [JSON.stringify(e)],
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(response);
};
