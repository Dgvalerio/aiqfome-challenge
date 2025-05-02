import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';
import { env } from '@/utils/constants/env';

export const listStores = async (): Promise<ResponseAPI<Store[]>> => {
  'use server';

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/stores`);

  return await response.json();
};
