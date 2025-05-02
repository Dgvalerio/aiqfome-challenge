import { NextRequest } from 'next/server';

import file from '@/app/api/db.json';
import { Item } from '@/types/item';
import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';

export const GET = async (
  _req: NextRequest,
  props: { params: Promise<{ storeId: string; itemId: string }> }
): Promise<Response> => {
  let response: ResponseAPI<Item | null>;
  const params = await props.params;

  try {
    const store = file.find((store: Store) => store.id === params.storeId);

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

  // info: Está aqui para simular carregamento de uma API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(response);
};
