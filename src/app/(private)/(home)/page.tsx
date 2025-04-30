import { NextPage } from 'next';
import Image from 'next/image';

import { ClosedStores } from '@/app/(private)/(home)/(components)/closed';
import { OpenedStores } from '@/app/(private)/(home)/(components)/opened';
import { SearchInput } from '@/app/(private)/(home)/(components)/search-input';
import { ToastWarning } from '@/components/sonner/toast';
import { ResponseAPI } from '@/types/response-api';
import { Store } from '@/types/store';

import { isAfter, isBefore, set } from 'date-fns';

const HomePage: NextPage = async () => {
  const response = await fetch('http://localhost:3001/api/stores');

  const { success, data, messages }: ResponseAPI<Store[]> =
    await response.json();

  const opened: Store[] = [];
  const closed: Store[] = [];

  data.forEach((store) => {
    const now = new Date();
    const [openH, openM] = store.openTime.split(':').map(Number);
    const [closeH, closeM] = store.closeTime.split(':').map(Number);

    const openDate = set(now, {
      hours: openH,
      minutes: openM,
      seconds: 0,
      milliseconds: 0,
    });
    const closeDate = set(now, {
      hours: closeH,
      minutes: closeM,
      seconds: 0,
      milliseconds: 0,
    });

    return isAfter(now, openDate) && isBefore(now, closeDate)
      ? opened.push(store)
      : closed.push(store);
  });

  return (
    <>
      {!success && <ToastWarning messages={messages} />}
      <SearchInput className="pt-0" />
      <Image
        priority
        width={390}
        height={130}
        src="/banner.png"
        alt="Rango barato no dia das crianças! Peça com até 50% OFF"
      />
      <OpenedStores stores={opened} />
      <ClosedStores stores={closed} />
    </>
  );
};

export default HomePage;
