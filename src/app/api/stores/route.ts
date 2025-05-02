import file from '@/app/api/db.json';
import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';

export const GET = async (): Promise<Response> => {
  let response: ResponseAPI<Store[]>;

  try {
    const sortByRating = file.sort((a, b) => b.rating - a.rating);

    // info: Está aqui para simular carregamento de uma API
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
