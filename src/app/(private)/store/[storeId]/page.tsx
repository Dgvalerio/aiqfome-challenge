import { NextPage } from 'next';

import { StoreInfo } from '@/app/(private)/store/[storeId]/(components)/info';
import { StoreMenu } from '@/app/(private)/store/[storeId]/(components)/menu';
import { ToastWarning } from '@/components/sonner/toast';
import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';
import { env } from '@/utils/constants/env';

interface StorePageProps {
  params: Promise<{ storeId: string }>;
  searchParams: Promise<object>;
}

const StorePage: NextPage<StorePageProps> = async ({ params }) => {
  const { storeId } = await params;

  const response = await fetch(
    `${env.NEXT_PUBLIC_API_URL}/api/stores/${storeId}`
  );

  const { success, data, messages }: ResponseAPI<Store> = await response.json();

  if (!data) {
    return <h1>{messages.join(';\n')}</h1>;
  }

  return (
    <>
      {!success && <ToastWarning messages={messages} />}
      <StoreInfo {...data} />
      <StoreMenu {...data} />
    </>
  );
};

export default StorePage;
