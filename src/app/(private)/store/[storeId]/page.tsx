import { NextPage } from 'next';

import { StoreInfo } from '@/app/(private)/store/[storeId]/(components)/info';
import { StoreMenu } from '@/app/(private)/store/[storeId]/(components)/menu';
import { ToastWarning } from '@/components/sonner/toast';
import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';

interface StorePageProps {
  params: Promise<{ storeId: string }>;
  searchParams: Promise<object>;
}

const StorePage: NextPage<StorePageProps> = async (props) => {
  const { storeId } = await props.params;

  const response = await fetch(`http://localhost:3001/api/stores/${storeId}`);

  const { success, data, messages }: ResponseAPI<Store> = await response.json();

  console.log({ success, data, messages });

  if (!data) {
    return <h1>{messages[0]}</h1>;
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
