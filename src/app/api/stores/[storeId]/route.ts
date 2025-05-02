import { NextRequest } from 'next/server';

import file from '@/app/api/db.json';
import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';

export const GET = async (
  _req: NextRequest,
  props: { params: Promise<{ storeId: string }> }
): Promise<Response> => {
  let response: ResponseAPI<Store | null>;
  const params = await props.params;

  try {
    const store = file.find((store: Store) => store.id === params.storeId);

    // info: Está aqui para simular carregamento de uma API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    response = !store
      ? { success: false, data: null, messages: ['Nenhuma loja encontrada!'] }
      : { success: true, data: store, messages: [] };
  } catch (e) {
    response = {
      success: false,
      data: null,
      messages: [JSON.stringify(e)],
    };
  }

  return Response.json(response);
};
