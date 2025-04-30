import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';

import { promises as fs } from 'node:fs';

export const GET = async (): Promise<Response> => {
  let response: ResponseAPI<Store[]>;

  try {
    const file = await fs.readFile(
      process.cwd() + '/src/app/api/db.json',
      'utf8'
    );

    const data: Store[] = JSON.parse(file);

    const sortByRating = data.sort((a, b) => b.rating - a.rating);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    response = {
      success: true,
      data: sortByRating,
      messages: [],
    };
  } catch (e) {
    response = {
      success: false,
      data: [],
      messages: [JSON.stringify(e)],
    };
  }

  return Response.json(response);
};
