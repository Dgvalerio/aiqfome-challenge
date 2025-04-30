import { NextRequest } from 'next/server';

import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';

import { promises as fs } from 'node:fs';

export const GET = async (
  _req: NextRequest,
  props: { params: Promise<{ storeId: string }> }
): Promise<Response> => {
  let response: ResponseAPI<Store | null>;
  const params = await props.params;

  try {
    const file = await fs.readFile(
      process.cwd() + '/src/app/api/db.json',
      'utf8'
    );

    const data: Store[] = JSON.parse(file);

    const store = data.find((store: Store) => store.id === params.storeId);

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
